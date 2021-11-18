const boxes = document.querySelectorAll(".box");

// Set event Listener on the window to listen for scroll events
// Set to checkBoxes callback to check the coordinates of the boxes
window.addEventListener("scroll", checkBoxes);
checkBoxes();
// define checkBoxes callback
// find trigger bottom using window.innerHeight
// find boundingClientRect object of each box (top)
// Show box is top value is less than the trigger bottom else hide it

function checkBoxes() {
	const triggerBottom = (window.innerHeight / 5) * 4;

	boxes.forEach((box) => {
		const top = box.getBoundingClientRect().top;
		if (top < triggerBottom) {
			box.classList.add("show");
		} else {
			box.classList.remove("show");
		}
	});
}
