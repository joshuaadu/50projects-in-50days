const background = document.querySelector('.background');
const loadingText = document.querySelector('.loading-text');

let load = 0;

let timer = setInterval(blurring, 30);


function blurring() {

    load++;

    if (load > 99) {
        clearInterval(timer);
    }
    loadingText.innerHTML = `${load}`;
    loadingText.style.opacity = scale(load, 0, 100, 1 , 0)
    background.style.filter =`blur(${scale(load, 0, 100, 30 , 0)}px)`


}


/*
https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
*/
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }