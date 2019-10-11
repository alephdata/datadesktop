import { BrowserWindow , app , ipcMain, IpcMessageEvent, Menu, dialog } from 'electron' ;
import * as isDev from "electron-is-dev" ;
import { autoUpdater } from 'electron-updater'
import { Window, CustomMenu } from './components'
import * as fs from 'fs'

app.on('ready', function() {
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
    const log = require("electron-log")
    log.transports.file.level = "debug"
    autoUpdater.logger = log
    autoUpdater.checkForUpdatesAndNotify();

    Menu.setApplicationMenu(CustomMenu(
      this.sendSaveFile.bind(this), this.newFile.bind(this), this.openFile.bind(this)
    ))

    this.windows = [mainWindow]
    this.activeWindow = 0

    this.attachListeners()
  }

  attachListeners() {
    ipcMain.on('SAVE_FILE_SUCCESS', this.receiveSaveFile.bind(this))
    ipcMain.on('GRAPH_CHANGED', this.onGraphChanged.bind(this))
    ipcMain.on('EXPORT_SVG', this.exportSvg.bind(this))
  }

  onWindowFocus(id: number) {
    this.activeWindow = id
  }

  sendSaveFile(saveAs?:boolean) {
    this.windows[this.activeWindow].sendSaveFile(saveAs)
  }

  receiveSaveFile(event: any, contents: any) {
    this.windows[this.activeWindow].receiveSaveFile(contents)
  }

  onGraphChanged() {
    this.windows[this.activeWindow].onGraphChanged()
  }

  exportSvg(event: any, data: any) {
    this.windows[this.activeWindow].exportSvg(data)
  }

  newFile() {
    const newId = this.windows.length
    const newWindow = new Window({id: newId, onFocus:this.onWindowFocus})
    this.windows.push(newWindow)
    this.activeWindow = newId
    return newWindow
  }

  openFile() {
    dialog.showOpenDialog({filters:[{name: '*',extensions:['vis']}]}).then(({filePaths}) => {
      if (filePaths && filePaths.length > 0) {
        filePaths.forEach(filePath => {
          fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err){
                console.log("An error ocurred reading the file :" + err.message);
                return;
            }
            const newWindow = this.newFile()
            newWindow.sendOpenFile(filePath, data)
          });
        })
      }
    });
  }
}
