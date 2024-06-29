import { IpcMainEvent, ipcMain } from 'electron'

import { WindowNameType, getWindow } from './windowConfig'

ipcMain.on('openWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getWindow(name).show()
})

ipcMain.on('closeWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getWindow(name).hide()
})
