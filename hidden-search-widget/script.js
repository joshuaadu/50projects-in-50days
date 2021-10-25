const search = document.querySelector('.search');
const button = document.querySelector('.search-button');
const input = document.querySelector('.search-input');


button.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})