import { app, BrowserWindow, Menu } from 'electron'
// import { newFile, openFile, saveFile } from '../actions'

export const CustomMenu = (saveFile: any, newFile: any, openFile: any) => {
    return Menu.buildFromTemplate([
        {
            label: app.getName(),
            submenu: [
                { label: `Hello`, click: () => console.log("Hello world") }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                {label: 'Undo', role: 'undo'  },
                {label: 'Redo', role: 'redo'  },
                {label: 'Cut', role: 'cut'  },
                {label: 'Copy', role: 'copy'  },
                {label: 'Paste', role:'paste'  },
            ]
        },
        {
            label: 'File',
            submenu: [
              {
                label: 'New',
                accelerator: 'cmd+N',
                click: () => {
                  console.log('creating new')
                  newFile()
                }
              },
              {
                label: 'Save',
                accelerator: 'cmd+S',
                click: () => {
                  saveFile(false)
                }
              },
              {
                label: 'Save as...',
                accelerator: 'Shift+cmd+S',
                click: () => {
                  saveFile(true)
                }
              },
              {
                label: 'Open',
                accelerator: 'cmd+O',
                click: () => {
                  console.log('opening')
                  openFile()
                }
              }
            ]
        }

    ])
}
