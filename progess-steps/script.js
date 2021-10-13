// Declare and initialize DOM elements
const progress = document.querySelector('.progress-path')
const circles = document.querySelectorAll('.circle')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')


// declare count of active elements currentActive
let currentActive = 1

/* 
    Add eventlistener to next button
    set increment on active currentActive by 1
    control currentActive value <= numbet of circles
    update DOM
*/
nextBtn.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length) currentActive = circles.length

    update()

})


/* 
    Add eventlistener to previous button
    set decrement on active currentActive by 1
    control currentActive value > 1
    update DOM

*/
prevBtn.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1) currentActive = 1

    update()
})

/* 
    Update each circle 
    add class active if index > currentActive
    remove class active if index > currentActive

    increase progress path width according to the number of circles marked active
    
    disable buttons
    disable previous if only the first circle is active
    diable next if all the circles are active
    else keep both buttons should not be disabled
*/
const update = () => {
    circles.forEach((circle, index) => {
        if(index < currentActive) circle.classList.add('active')
        else circle.classList.remove('active')
    });

    const actives = document.querySelectorAll('.active')
    progress.style.width = `${(actives.length - 1) / (circles.length - 1) * 100}%`

    if(currentActive === 1) prevBtn.disabled = true
    else if (currentActive === circles.length) nextBtn.disabled = true
    else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}