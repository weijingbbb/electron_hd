import { BrowserWindow, IpcMainEvent, ipcMain } from 'electron'

ipcMain.on('hideWindow', (event: IpcMainEvent) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  // win?.hide() ? win.show() : win?.hide()
  // win?.hide()
})
