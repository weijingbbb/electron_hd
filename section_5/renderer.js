


window.addEventListener('DOMContentLoaded', () => {
    window.api.toPreload((val) => {
        console.log('toPreload事件：得到主进程菜单传递过来的参数-' + val);
    })
    const selectBtn = document.querySelector('#selectBtn');
    selectBtn.addEventListener('click', async () => { 
        const container = document.querySelector('#container');
        const result = await window.api.selectFilePreload();
        for (const file of result.filePaths) {
            const p = document.createElement('p');
            p.innerText = file;
            container.appendChild(p);
        }
    })

    const saveBtn = document.querySelector('#saveBtn');
    saveBtn.addEventListener('click', () => {
        const txt = document.querySelector('#txt').value;
        window.api.saveFile(txt);
     })

})

window.addEventListener('contextmenu', () => {
    window.api.showMainPopMenu();
})