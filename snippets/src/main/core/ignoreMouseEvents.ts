import { BrowserWindow, IpcMainEvent, ipcMain } from 'electron'

// 忽略鼠标穿透事件
export default (win: BrowserWindow) => {
  ipcMain.on(
    'setIgnoreMouseEvents',
    (_event: IpcMainEvent, ignore: boolean, options?: { forward: boolean }) => {
      win.setIgnoreMouseEvents(ignore, options)
    }
  )
}
