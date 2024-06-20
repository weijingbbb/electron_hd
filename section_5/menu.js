const { app, Menu, BrowserWindow, dialog } = require('electron');

const createMenu = (win) => {

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
                    label: '通知渲染进程',
                    click: () => { 
                        win.webContents.send('toPreload', 'hellow')
                    }
                },
                {
                    label: '打开窗口',
                    accelerator: 'CommandOrControl+A',
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
                    // role: isMac ? 'close' : 'quit',
                    click: async () => {
                        const { response, checkboxChecked } = await dialog.showMessageBox({
                            title: app.name,
                            detail: '晚上去唱k吗？',
                            // 尽量固定这个元素位置
                            buttons: ['取消', '确认'],
                            // cancelId: 0,
                            // checkboxLabel: '确定不去？'
                        })
                        console.log(response, checkboxChecked);
                        // if(response === 1) isMac ? app.hide() : app.quit() 
                        // if(!checkboxChecked) dialog.showErrorBox('温馨提示', '请勾选复选框')
                     }
                }
            ]
        }
    ]

    Menu.setApplicationMenu(Menu.buildFromTemplate(config));
}

module.exports = {
    createMenu
}