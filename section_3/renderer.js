
// window.addEventListener('DOMContentLoaded', () => { 
//     const body = document.querySelector('body');
//     console.log(body);
// })

// console.log(window);
console.log(window.api);
window.addEventListener('DOMContentLoaded', () => { 
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', window.api.c);
})

window.api.counter((value) => { 
    console.log('counter:'+ value);
})