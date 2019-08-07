import { app, BrowserWindow, Menu } from 'electron'
import { openFile } from '../actions'

export const CustomMenu = (win: BrowserWindow) => {
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
                label: 'Open',
                accelerator: 'cmd+O',
                click: () => {
                  console.log('opening')
                  // openFile()
                }
              }
            ]
        }

    ])
}
