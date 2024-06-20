const { ipcMain, Menu, BrowserView, BrowserWindow } = require("electron");


ipcMain.on('mainPopMenu', (event) => { 
    const temp = [
        {
            label: '右键菜单',
            click: () => {
                console.log('???');
             }
        }
    ]
    
    const menu = Menu.buildFromTemplate(temp);

    menu.popup(BrowserWindow.fromWebContents(event.sender));
})