import { BrowserWindow, Menu } from 'electron'
import * as path from 'path'
import * as isDev from "electron-is-dev" ;

import { CustomMenu } from './components'

export default () => {
  let win = new BrowserWindow({width: 800, height: 600, webPreferences: {nodeIntegration: true}});
  // win.on('closed', () => {
  //   win = null;
  // });

  win.loadURL(
      isDev
          ? "http://localhost:3000"
          : `file://${path.join(__dirname, "../build/index.html")}`
  );

  win.on("closed", () => (win.destroy()));
  // win.webContents.openDevTools()

  // ipcMain.on('channel' , (event : IpcMessageEvent , msg: any)=>{
  //     console.log(msg)
  //     mainWindow.webContents.send('response' , {title : 'mymessage'  , data : 1 }) ;
  // })

  Menu.setApplicationMenu(CustomMenu(win))

  return win;
}
