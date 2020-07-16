const electron = require("electron");
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
