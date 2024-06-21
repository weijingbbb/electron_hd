import { BrowserWindow, ipcMain } from 'electron';

ipcMain.handle('drag', (event, { x, y }: { x: number; y: number }) => {
  // console.log('main:', x, y)
  const win = BrowserWindow.fromWebContents(event.sender)!
  const [oldX, oldY] = win.getPosition()
  win?.setPosition(oldX + x, oldY + y)
})
