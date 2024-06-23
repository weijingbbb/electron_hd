import { BrowserWindow, IpcMainEvent, app, dialog, globalShortcut, ipcMain } from 'electron'

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
  ipcMain.on('shortCur', (event: IpcMainEvent, { type, shortCur }: HotKeyProps) => {
    // 如果注册了,则不再进行注册
    if (HotKeyDictionary[type] === shortCur) return
    HotKeyDictionary[type] = shortCur
    const win = BrowserWindow.fromWebContents(event.sender)!
    let ret
    switch (type) {
      case 'renderWindow':
        ret = renderWindow(win, shortCur)
        break
    }
    if (!ret) {
      dialog.showErrorBox('提示', '热键注册失败')
      console.log('热键注册失败, 类型为：', type, '值为：', shortCur)
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
