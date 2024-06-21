import { Menu, shell, Tray } from 'electron'
import path from 'path'

// 系统托盘
const createTray = () => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin'
        ? '../../resources/trayTemplate@2x.png'
        : '../../resources/windowTray.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([
    { label: '百度一下', click: () => shell.openExternal('https://www.baidu.com') },
    { label: '退出', role: 'quit' }
  ])
  tray.setToolTip('摸鱼摄像头')
  tray.setContextMenu(contextMenu)
}

export default createTray
