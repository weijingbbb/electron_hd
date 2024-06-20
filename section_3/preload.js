// 为了安全，默认不能使用node的个别模块
// 需要设置主进程的webPreferences中的nodeIntegration为true
// const fs = require('fs');

const { ipcRenderer, contextBridge } = require("electron");


// window.addEventListener('DOMContentLoaded', () => { 
//     document.querySelector('body');
// })

// ipcRenderer.send('message', 'hello from preload');
// console.log(window);
contextBridge.exposeInMainWorld('api', {
    a: 333,
    hd: () => { 
        ipcRenderer.send('message', '主进程，主进程，听到吗，我是hd方法的message')
    }
})

window.addEventListener('DOMContentLoaded', () => { 
   
    for(const app of ['node', 'chrome', 'electron']) {
        const el = document.querySelector(`#${app}`);
        el.innerHTML = `${app}: ${process.versions[app]}`;
    }
})

ipcRenderer.on('test', () => {
    console.log('接收到主进程的test事件');
})