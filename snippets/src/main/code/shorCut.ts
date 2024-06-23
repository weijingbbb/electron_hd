import { BrowserWindow, app, dialog, globalShortcut } from 'electron'

// 注册热键
export const registerShortCut = (win: BrowserWindow) => {
  const key = 'CommandOrControl+;'

  app.whenReady().then(() => {
    const ret = globalShortcut.register(key, () => {
      win?.isVisible() ? win.hide() : win?.show()
    })
    if (!ret) {
      dialog.showErrorBox('提示', '热键注册失败')
      console.log('热键注册失败')
    }
    // 检查是否注册成功
    console.log('快捷键盘初始化注册成功：',globalShortcut.isRegistered(key))
  })

  app.on('will-quit', () => {
    // 注销快捷键
    // globalShortcut.unregister(key)
    // 注销所有快捷键
    globalShortcut.unregisterAll()
  })
}
