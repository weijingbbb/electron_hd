const { app, BrowserWindow, ipcMain, dialog, screen } = require('electron');
const path = require('path');

const createWindow = () => { 
    // 定义窗口
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 300,
        webPreferences: {
            // 预加载脚本
            preload: path.resolve(__dirname, 'preload.js'),
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