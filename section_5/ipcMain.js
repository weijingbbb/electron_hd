const { ipcMain, dialog } = require("electron");

ipcMain.handle('selectFileMain', async (event) => { 
    const res = await dialog.showOpenDialog({
        title: '选择图片文件',
        properties: ['openFile', 'multiSelections'],
        filters: [
            {
                name: 'image',
                extensions: ['png']
            }
        ]
    })
    console.log( res);
})