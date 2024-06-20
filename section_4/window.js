const { app, BrowserWindow, ipcMain, dialog } = require('electron');
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
            // nodeIntegration: true,
            contextIsolation: false,
        }
    });
    // 打开开发者工具
    mainWindow.webContents.openDevTools();
    // 加载模板
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));
}

module.exports = {
    createWindow
}