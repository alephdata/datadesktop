import { app, BrowserWindow, Menu } from 'electron'

export const CustomMenu = (sendSaveFile: any, newFile: any, openFile: any) => {
    return Menu.buildFromTemplate([
        {
            label: 'VIS Desktop',
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
                  openFile()
                }
              }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                // {label: 'Undo', role: 'undo'  },
                // {label: 'Redo', role: 'redo'  },
                // {label: 'Cut', role: 'cut'  },
                // {label: 'Copy', role: 'copy'  },
                // {label: 'Paste', role:'paste'  },
                // { role: 'delete' },
                // { type: 'separator' },
                // { role: 'selectAll' }
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
