import { IpcMainEvent, ipcMain } from 'electron'

import { getWindowByEvent, getWindowByName } from './window'

ipcMain.on('openWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getWindowByName(name).show()
})

ipcMain.on('closeWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getWindowByName(name).hide()
})

ipcMain.on(
  'setIgnoreMouseEvents',
  (event: IpcMainEvent, ignore: boolean, options?: { forward: boolean }) => {
    getWindowByEvent(event).setIgnoreMouseEvents(ignore, options)
  }
)
