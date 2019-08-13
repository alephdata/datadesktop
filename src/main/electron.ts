import { BrowserWindow , app , ipcMain, IpcMessageEvent, Menu } from 'electron' ;
import * as isDev from "electron-is-dev" ;
import * as path from 'path'
import { autoUpdater } from 'electron-updater'
import { Window, CustomMenu } from './components'
import attachUpdateListeners from './attachUpdateListeners'

import { saveFile, openFile, newFile } from './actions'

app.on('ready', function() {
  new App()
});

app.on('window-all-closed', () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

class App {
  private mainWindow: Window

  constructor() {
    const mainWindow = new Window()

    autoUpdater.checkForUpdatesAndNotify();
    attachUpdateListeners(mainWindow);
    Menu.setApplicationMenu(CustomMenu(
      this.saveFile.bind(this), this.newFile.bind(this), this.openFile.bind(this)
    ))

    this.mainWindow = mainWindow
  }

  saveFile(saveAs?:boolean) {
    const onSuccess = (path: string) => this.mainWindow.setTitleFromPath(path)
    saveFile(this.mainWindow.win, saveAs, onSuccess)
  }

  newFile() {
    saveFile(this.mainWindow.win, false)
    newFile()
    this.mainWindow.destroy()
    this.mainWindow = new Window()
  }

  openFile() {
    saveFile(this.mainWindow.win, false)
    const onSuccess = (filePath: string, data: any) => {
      this.mainWindow.destroy()
      this.mainWindow = new Window()
    }
    openFile(this.mainWindow.win, onSuccess)

  }
}
