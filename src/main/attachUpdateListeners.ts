import { BrowserWindow }  from 'electron'
import { autoUpdater } from "electron-updater"


const sendStatusToWindow = (win: BrowserWindow, text: string) => {
  win.webContents.send('message', text);
}

export default (win: BrowserWindow) => {
  autoUpdater.on('checking-for-update', () => {
    sendStatusToWindow(win, 'Checking for update...');
  })
  autoUpdater.on('update-available', (info) => {
    sendStatusToWindow(win, 'Update available.');
  })
  autoUpdater.on('update-not-available', (info) => {
    sendStatusToWindow(win, 'Update not available.');
  })
  autoUpdater.on('error', (err) => {
    sendStatusToWindow(win, 'Error in auto-updater. ' + err);
  })
  autoUpdater.on('download-progress', (progressObj) => {
    let log_message = "Download speed: " + progressObj.bytesPerSecond;
    log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
    log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
    sendStatusToWindow(win, log_message);
  })
  autoUpdater.on('update-downloaded', (info) => {
    sendStatusToWindow(win, 'Update downloaded');
  });
}
