
const { app, ipcMain, BrowserWindow } = require('electron');
const { createWindow } = require('./window');



// 应用准备好后创建窗口
app.whenReady().then(() => { 
    createWindow();
    //苹果电脑当关闭所有窗口后，点击dash图标时创建新窗口
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

//非苹果系统当关闭所有窗口时退出应用
app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})


ipcMain.on('mainEvent', () => { 
    console.log('mainEvent： 主进程接收到消息');
})