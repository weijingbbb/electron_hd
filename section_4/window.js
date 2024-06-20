const { app, BrowserWindow, ipcMain, dialog, screen } = require('electron');
const path = require('path');

const createWindow = () => { 
    // 定义窗口
    const mainWindow = new BrowserWindow({
        width: 300,
        height: 300,
        // 窗口在顶端
        // alwaysOnTop: true,
        webPreferences: {
            // 预加载脚本
            preload: path.resolve(__dirname, 'preload.js'),
            // 使用node的功能,为了安全，默认不开启
            // nodeIntegration: true,
            // 隔离
            // contextIsolation: false,
            // 沙盒模式，关闭了，预加载脚本可以使用node的部分模块，渲染脚本不能使用，
            // 当nodeIntegration = true,则表示sandbox=false
            // sandbox: false
        }
    });
    // 打开开发者工具
    mainWindow.webContents.openDevTools();
    // 加载模板
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));

    setTimeout(() => {
        const { width } = screen.getPrimaryDisplay().workAreaSize
        const x = width / 2 - 400;
        mainWindow.setBounds({
            width: 800,
            height: 300,
            x,
            y: 100
        }, true)
     }, 1000)
}

module.exports = {
    createWindow
}