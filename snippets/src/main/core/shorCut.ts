import { BrowserWindow, IpcMainInvokeEvent, app, globalShortcut, ipcMain } from 'electron'

type HotKeyType = 'renderWindow' | 'search'
interface HotKeyProps {
  type: HotKeyType
  shortCur: string
}
const HotKeyDictionary: {
  [key in HotKeyType]?: string
} = {}

// 注册热键
export const registerShortCut = () => {
  ipcMain.handle('shortCur', (event: IpcMainInvokeEvent, { type, shortCur }: HotKeyProps) => {
    // 如果注册了,则不再进行注册
    if (HotKeyDictionary[type] === shortCur) return
    HotKeyDictionary[type] = shortCur
    const win = BrowserWindow.fromWebContents(event.sender)!

    switch (type) {
      case 'renderWindow':
        return renderWindow(win, shortCur)
      default:
        break
    }
  })

  // 注册切换窗口快捷键
  function renderWindow(win: BrowserWindow, shortCur: string) {
    return globalShortcut.register(shortCur, () => {
      win?.isVisible() ? win.hide() : win?.show()
    })
  }

  app.on('will-quit', () => {
    // 注销快捷键
    // globalShortcut.unregister(key)
    // 注销所有快捷键
    globalShortcut.unregisterAll()
  })
}
