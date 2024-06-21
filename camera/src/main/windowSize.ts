import { BrowserWindow, ipcMain } from 'electron';

// 获取触发事件的window
const getWin = (event: Electron.IpcMainEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}

ipcMain.on(
  'setWindowSize',
  (event: Electron.IpcMainEvent, opt: { aspectRatio: number; width?: number; height?: number }) => {
    const win = getWin(event)!
    const { aspectRatio, width, height } = opt
    // 改变比例
    win.setAspectRatio(aspectRatio)
    // 改变窗口尺寸
    win.setBounds(
      {
        width,
        height
      },
      true
    )
  }
)
