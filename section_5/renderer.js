


window.addEventListener('DOMContentLoaded', () => {
    window.api.toPreload((val) => {
        console.log('toPreload事件：得到主进程菜单传递过来的参数-' + val);
    })
})

window.addEventListener('contextmenu', () => {
    window.api.showMainPopMenu();
})