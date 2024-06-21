const { app, BrowserWindow, ipcMain, dialog, screen, shell } = require('electron');
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

    // 监听到打开新窗口，
    mainWindow.webContents.setWindowOpenHandler((details) => { 
        shell.openExternal(details.url)
        return {
            action: 'deny'
        }
    })
    return mainWindow;
}

module.exports = {
    createWindow
}