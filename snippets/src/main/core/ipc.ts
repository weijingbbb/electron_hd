import { BrowserWindow, IpcMainEvent, ipcMain } from 'electron'
import { createConfigWindow } from '../config'


export const registerIpc = (win?: BrowserWindow) => {
  ipcMain.on('hideWindow', (event: IpcMainEvent) => {
    const win = BrowserWindow.fromWebContents(event.sender)
    win?.hide()
  })

  ipcMain.on('openConfigWindow', () => {
    const configWin = createConfigWindow()
  })
}
