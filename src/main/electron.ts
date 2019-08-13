import { BrowserWindow , app , ipcMain, IpcMessageEvent, Menu } from 'electron' ;
import * as isDev from "electron-is-dev" ;
import * as path from 'path'
import { autoUpdater } from 'electron-updater'
import { Window, CustomMenu } from './components'
import attachUpdateListeners from './attachUpdateListeners'

import { saveFile, openFile, newFile } from './actions'

app.on('ready', function() {
  // sendMessage();
  new App()
});

app.on('window-all-closed', () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

class App {
  private windows: Window[]
  private activeWindow: number

  constructor() {
    this.onWindowFocus = this.onWindowFocus.bind(this)
    const mainWindow = new Window({id: 0, onFocus: this.onWindowFocus})

    autoUpdater.checkForUpdatesAndNotify();
    attachUpdateListeners(mainWindow);

    Menu.setApplicationMenu(CustomMenu(
      this.sendSaveFile.bind(this), this.newFile.bind(this), this.openFile.bind(this)
    ))

    this.windows = [mainWindow]
    this.activeWindow = 0

    this.attachListeners()
  }

  attachListeners() {
     ipcMain.on('SAVE_FILE_SUCCESS', this.receiveSaveFile.bind(this))
  }

  onWindowFocus(id: number) {
    console.log('changing active window', id)
    this.activeWindow = id
  }

  sendSaveFile(saveAs?:boolean) {
    console.log('saving', this.activeWindow)
    this.windows[this.activeWindow].sendSaveFile()

    // const onSuccess = (path: string) => this.mainWindow.setTitleFromPath(path)
    // saveFile(this.mainWindow.win, saveAs, onSuccess)
  }

  receiveSaveFile(event, contents) {
    this.windows[this.activeWindow].receiveSaveFile(contents)
  }

  newFile() {
    const newWindow = new Window({id: this.windows.length, onFocus:this.onWindowFocus})
    this.windows.push(newWindow)
    newWindow.sendMessage('NEW_FILE_CREATED')
    // saveFile(this.mainWindow.win, false)
    // newFile()
    // this.mainWindow.destroy()
    // this.mainWindow = new Window()
  }

  openFile() {

    // saveFile(this.mainWindow.win, false)
    // const onSuccess = (filePath: string, data: any) => {
    //   this.mainWindow.destroy()
    //   this.mainWindow = new Window()
    // }
    // openFile(this.mainWindow.win, onSuccess)

  }
}
