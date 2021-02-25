import { app, BrowserWindow, Menu } from 'electron'

export const CustomMenu = (sendSaveFile: any, newFile: any, openFileDialog: any, sendExportSvg: any) => {
    return Menu.buildFromTemplate([
        {
            label: 'Aleph Data Desktop',
            submenu: [
              { role: 'about' },
              { type: 'separator' },
              { role: 'services' },
              { type: 'separator' },
              { role: 'hide' },
              { role: 'unhide' },
              { role: 'quit' }
            ]
        },
        {
            label: 'File',
            submenu: [
              {
                label: 'New',
                accelerator: 'cmd+N',
                click: () => {
                  newFile()
                }
              },
              {
                label: 'Save',
                accelerator: 'cmd+S',
                click: () => {
                  sendSaveFile(false)
                }
              },
              {
                label: 'Save as...',
                accelerator: 'Shift+cmd+S',
                click: () => {
                  sendSaveFile(true)
                }
              },
              {
                label: 'Open',
                accelerator: 'cmd+O',
                click: () => {
                  openFileDialog()
                }
              },
              {
                label: 'Export as SVG',
                click: () => {
                  sendExportSvg()
                }
              }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                // {label: 'Undo', role: 'undo'  },
                // {label: 'Redo', role: 'redo'  },
                {label: 'Cut', accelerator: "CmdOrCtrl+X", role: 'cut'  },
                {label: 'Copy', accelerator: "CmdOrCtrl+C", role: 'copy'  },
                {label: 'Paste', accelerator: "CmdOrCtrl+V", role:'paste'  },
                // { role: 'delete' },
                { type: 'separator' },
                { role: 'selectAll', accelerator: "CmdOrCtrl+A",  }
            ]
        },
        {
          label: 'Window',
          submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            { type: 'separator' },
            { role: 'front' },
            { type: 'separator' },
            { role: 'window' }
          ]
        },
    ])
}
