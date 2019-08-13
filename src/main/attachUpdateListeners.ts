import { Window }  from './components'
import { autoUpdater } from "electron-updater"

export default (win: Window) => {
  autoUpdater.on('checking-for-update', () => {
    win.sendMessage('Checking for update...');
  })
  autoUpdater.on('update-available', (info) => {
    win.sendMessage('Update available.');
  })
  autoUpdater.on('update-not-available', (info) => {
    win.sendMessage('Update not available.');
  })
  autoUpdater.on('error', (err) => {
    win.sendMessage('Error in auto-updater. ' + err);
  })
  autoUpdater.on('download-progress', (progressObj) => {
    let log_message = "Download speed: " + progressObj.bytesPerSecond;
    log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
    log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
    win.sendMessage(log_message);
  })
  autoUpdater.on('update-downloaded', (info) => {
    win.sendMessage('Update downloaded');
  });
}
