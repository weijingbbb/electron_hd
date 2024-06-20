
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