const electron = require("electron");
const ffmpeg = require("fluent-ffmpeg");
const _ = require("lodash");
const { app, BrowserWindow, ipcMain } = electron;

let mainWin = undefined;

app.on("ready", () => {
  mainWin = new BrowserWindow({
    height: 600,
    width: 800,
    center: true,
    title: "Video Converter",
    webPreferences: {
      backgroundThrottling: false,
      nodeIntegration: true,
    },
  });

  mainWin.loadFile("./dist/index.html");
});

ipcMain.on("videos:added", (event, videos) => {
  const promises = _.map(videos, (video) => {
    return new Promise((resolve, reject) => {
      ffmpeg.ffprobe(video.path, (err, metadata) => {
        video.duration = metadata.format.duration;
        video.format = "avi";
        resolve(video);
      });
    });
  });

  Promise.all(promises).then((results) => {
    mainWin.webContents.send("videos:metadata-complete", results);
  });
});
