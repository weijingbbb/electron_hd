// const fs = require('fs')

// fs.writeFileSync('b.txt', 'ccc')


// window.addEventListener('DOMContentLoaded', () => {
//     window.api.toMain();
// })

window.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => { 
        // 获取input的值
        const width = Number(document.querySelector('[name="width"]').value);
        const height = Number(document.querySelector('[name="height"]').value);
        console.log(width, height);
        window.api.changePosition({width, height})
    })
})