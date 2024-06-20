const { app, Menu, BrowserWindow } = require('electron');

const createMenu = () => {

    const isMac = process.platform === 'darwin';

    const config = [
        ...(isMac ? [
            {
                label: app.name,
                submenu: [
                    {
                        label: '访问网站',
                        click: () => {
                            console.log('点击了访问网站菜单');
                        }
                    }
                ]
            }
        ] : []),
        {
            label: '操作',
            submenu: [
                {
                    label: '打开窗口',
                    click: () => { 
                        new BrowserWindow({
                            width: 300,
                            height: 300
                        })
                    }
                },
                {
                    type: 'separator'
                },
                {
                    label: isMac ? '关闭' : '退出',
                    role: isMac ? 'close' : 'quit'
                }
            ]
        }
    ]

    Menu.setApplicationMenu(Menu.buildFromTemplate(config));
}

module.exports = {
    createMenu
}