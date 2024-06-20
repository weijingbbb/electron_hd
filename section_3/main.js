const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => { 
    // 定义窗口
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        // 窗口在顶端
        // alwaysOnTop: true,
        webPreferences: {
            // 预加载脚本
            preload: path.resolve(__dirname, 'preload.js'),
            // 使用node的功能,为了安全，默认不开启
            nodeIntegration: true,
        }
    });
    // 打开开发者工具
    mainWindow.webContents.openDevTools();
    // 加载模板
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));
}

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
