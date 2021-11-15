const background = document.querySelector('.background');
const loadingText = document.querySelector('.loading-text');

// Set Load counter to start from 0%
let load = 0;

// Set time interval object to remove blur effect
let timer = null;

// Display load counter after page DOM has loaded. 
// This fixes the display of the '0%' until page is completely loaded.
document.addEventListener('DOMContentLoaded', () => {
    loadBackgroundImg('https://source.unsplash.com/random/1024x900').then((image) => {
        //Set background image to the image promise object.
        background.style.backgroundImage = image;
        // Run counter and remove blur effect
        // with time interval of 50ms
        timer = setInterval(blurring, 50);
    })
})



/**
 * https://stackoverflow.com/questions/52059596/loading-an-image-on-web-browser-using-promise/52060802
 * Load an image from a given URL
 * @param {String} url The URL of the image resource
 * @returns {Promise<Image>} The loaded image
 */
function loadBackgroundImg (url) {
    // Return a promise which returns a fully loaded Image object
    return new Promise(resolve => {
        // Create the image object 
        const image = new Image();
        // Listen for when the image is loaded from the specified url
        image.addEventListener('load', () => {
            // Resolve or return image object when it's loaded
            resolve(image);
        });
        // Set the url of the image object 
        // which will fires a the load event after the image has be loaded by the browser
        image.src = url;
    });

}

// Remove the blur filter on the background image
function blurring() {
    // Increase counter by 1%
    load++;
    // Remove timer when image is in full focus 100%
    if (load > 99) {
        clearInterval(timer);
    }
    // Display counter
    loadingText.innerHTML = `${load}`;
    // Reduce opacity
    loadingText.style.opacity = scale(load, 0, 100, 1 , 0);
    // Reduce blur filter
    background.style.filter =`blur(${scale(load, 0, 100, 30 , 0)}px)`


}


/*
https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
*/
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }