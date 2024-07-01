import { BrowserWindow, IpcMainInvokeEvent, app, globalShortcut, ipcMain } from 'electron'
import { getWindowByName } from './window'

const HotKeyDictionary: {
  [key in HotKeyType]?: string
} = {}

// 注册热键
ipcMain.handle('shortCur', (_event: IpcMainInvokeEvent, { type, shortCur }: HotKeyProps) => {
  // 如果注册了,则不再进行注册
  // if (HotKeyDictionary[type] === shortCur) return
  // if (HotKeyDictionary[type]) {
  //   globalShortcut.unregister(HotKeyDictionary[type]!)
  // }

  // 注销旧的快捷键，
  // HotKeyDictionary[type] = shortCur
  globalShortcut.unregisterAll()
  if (shortCur && globalShortcut.isRegistered(shortCur)) {
    // dialog.showErrorBox('温馨提示','快捷键注册失败，请检查快捷键是否已被占用。')
    return false
  }
  const win = getWindowByName('search')

  switch (type) {
    case 'RenderSearch':
      return renderSearch(win, shortCur)
    default:
      break
  }
})

// 注册切换窗口快捷键
function renderSearch(win: BrowserWindow, shortCur: string) {
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
