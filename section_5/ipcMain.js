const { ipcMain, dialog } = require("electron");
const fs = require('fs');

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
    return res
})

ipcMain.on('saveFileMain', async (event, value) => { 
    console.log('saveFileMain:', value);
    const { filePath } = await dialog.showSaveDialog({
        title: '保存文件'
    })
    fs.writeFileSync(filePath, value);

})