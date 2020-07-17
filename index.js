const electron = require("electron");
const _ = require("lodash");
const { app, BrowserWindow, ipcMain, shell, Notification } = electron;

const ffmpeg = require("fluent-ffmpeg");
const ffprobePath = require("@ffprobe-installer/ffprobe").path;
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

let mainWin = undefined;

app.on("ready", () => {
  mainWin = new BrowserWindow({
    height: 600,
    width: 800,
    center: true,
    title: "Video Converter",
    // resizable: false,
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
        if (err !== undefined && err !== null) {
          const ntc = new Notification({
            title: "Video Converter Error",
            subtitle: "ffmpeg.ffprobe failed",
            body: "error message:" + err,
          });
          ntc.show();
          reject(err);
        } else {
          video.duration_sec = metadata.format.duration;
          video.format = "avi";
          resolve(video);
        }
      });
    });
  });

  Promise.all(promises)
    .then((results) => {
      mainWin.webContents.send("videos:metadata-complete", results);
    })
    .catch((error) => console.log(`Error in promises ${error}`));
});

ipcMain.on("folder:open", (event, outputPath) => {
  shell.showItemInFolder(outputPath);
});

ipcMain.on("conversion:start", (event, videos) => {
  _.each(videos, (video) => {
    const outputDirectory = video.path.split(video.name)[0];
    const outputName = video.name.split(".")[0];
    const outputPath = `${outputDirectory}${outputName}.${video.format}`;

    ffmpeg(video.path)
      .output(outputPath)
      .on("progress", ({ timemark }) =>
        mainWin.webContents.send("conversion:progress", { video, timemark })
      )
      .on("end", () =>
        mainWin.webContents.send("conversion:end", { video, outputPath })
      )
      .run();
  });
});
