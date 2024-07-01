import { BrowserWindow, Menu, app } from 'electron'

const createMenu = () => {
  const menu = [
    {
      label: '记事本',
      submenu: [
        {
          label: '访问网站',
          click: () => {
            console.log('点击了访问网站菜单')
          }
        }
      ]
    },
    {
      label: '菜单',
      submenu: [
        {
          label: '打开搜索窗口',
          click: () => {
            BrowserWindow.getFocusedWindow()?.webContents.send('toRenderOpenWindow', 'search')
            // win.webContents.send('openWindow')
          }
        },
        {
          label: '打开配置窗口',
          click: () => {
            BrowserWindow.getFocusedWindow()?.webContents.send('toRenderOpenWindow', 'config')
            // win.webContents.send('toRenderOpenWindow', 'config')
          }
        },
        {
          label: '打开设置窗口',
          click: () => {
            BrowserWindow.getFocusedWindow()?.webContents.send('toRenderOpenWindow', 'setting')
          }
        },
        {
          label: '退出',
          click: () => {
            app.quit()
          }
        }
      ]
    }
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
}

export { createMenu }
