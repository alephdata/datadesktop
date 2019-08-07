import { BrowserWindow , app , ipcMain, IpcMessageEvent } from 'electron' ;
import * as isDev from "electron-is-dev" ;
import * as path from 'path'
import { autoUpdater } from 'electron-updater'
import createMainWindow from './createMainWindow'
import attachUpdateListeners from './attachUpdateListeners'
import attachEventListeners from './attachEventListeners'


app.on('ready', function() {
  autoUpdater.checkForUpdatesAndNotify();
  const win = createMainWindow();
  attachUpdateListeners(win);
  attachEventListeners(win);
});

app.on('window-all-closed', () => {
  if (process.platform !== "darwin") {
      app.quit();
  }
});

// app.on("activate", () => {
//     if (mainWindow === null) {
//         createWindow();
//     }
// });
