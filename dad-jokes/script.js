const nextJokeBtn = document.querySelector(".next");
const prevJokeBtn = document.querySelector(".prev");
const newJokeBtn = document.querySelector(".new");
const jokeDiv = document.querySelector(".jokes");

let jokes = [];
let currentIndex = 0;
prevJokeBtn.disabled = true;
nextJokeBtn.disabled = true;

// Fetch and display initial joke
window.addEventListener("load", (e) => {
	getJoke().then((e) => {
		displayJoke();
	});
	disableBtns();
});

// Display a new joke
newJokeBtn.addEventListener("click", (e) => {
	getJoke().then((e) => {
		currentIndex = jokes.length - 1;
		displayJoke();
		changePrevBtnActiveState();
		changeNextBtnActiveState();
	});
});

// Display previous joke in jokes array
prevJokeBtn.addEventListener("click", (e) => {
	currentIndex--;
	displayJoke();
	// disableBtns();
	changePrevBtnActiveState();
	changeNextBtnActiveState();
});

// Display next joke in jokes array
nextJokeBtn.addEventListener("click", (e) => {
	currentIndex++;
	displayJoke();
	// disableBtns();
	changePrevBtnActiveState();
	changeNextBtnActiveState();
});

// Get joke from API
async function getJoke() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};
	const response = await fetch("https://icanhazdadjoke.com/", config);
	const joke = await response.json();
	jokes.push(joke);
}

// Display joke of the current index of the jokes array
function displayJoke() {
	jokeDiv.textContent = jokes[currentIndex].joke;
}

// Disable buttons
function disableBtns() {
	// Disable previous and next buttons
	prevJokeBtn.disabled = true;
	nextJokeBtn.disabled = true;
}

// Activate or disable prev button
function changePrevBtnActiveState() {
	jokes.length > 0 && currentIndex > 0
		? (prevJokeBtn.disabled = false)
		: (prevJokeBtn.disabled = true);
}

// Activate or disable next button
function changeNextBtnActiveState() {
	currentIndex < jokes.length - 1
		? (nextJokeBtn.disabled = false)
		: (nextJokeBtn.disabled = true);
}
