
// window.addEventListener('DOMContentLoaded', () => { 
//     const body = document.querySelector('body');
//     console.log(body);
// })

// console.log(window);
console.log(window.api);
window.addEventListener('DOMContentLoaded', () => { 
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', window.api.hd);
})

window.api.counter((value) => { 
    console.log('counter:'+ value);
})

window.addEventListener('DOMContentLoaded', () => { 
    const btn = document.querySelector('#upload');
    btn.addEventListener('click', () => { 
        window.api.upload((file) => { 
            console.log('渲染进程接收到文件啦：'+file);
        })
    });
})

window.addEventListener('DOMContentLoaded', () => { 
    const btn = document.querySelector('#setTitle');
    btn.addEventListener('click', () => { 
        const title = document.querySelector('input').value;
        window.api.changeTitle(title);
    });
})