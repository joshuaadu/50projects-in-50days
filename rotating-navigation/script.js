const container = document.querySelector('.container');
const close = document.querySelector('.close');
const open = document.querySelector('.open');
// const circle = document.querySelector('.circle');


close.addEventListener('click', () => {
    container.classList.remove('show-nav')
    // circle.classList.remove('rotate')
})

open.addEventListener('click', () => {
    container.classList.add('show-nav')
    // circle.classList.add('rotate')
})
