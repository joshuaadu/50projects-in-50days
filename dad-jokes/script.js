const nextJokeBtn = document.querySelector(".next");
const prevJokeBtn = document.querySelector(".prev");
const newJokeBtn = document.querySelector(".new");
const jokeDiv = document.querySelector(".jokes");

let jokes = [];
let currentIndex = 0;
prevJokeBtn.disabled = true;
nextJokeBtn.disabled = true;

// Listen to any click event on the body to
// activate or deactivate buttons
document.body.addEventListener("click", disableBtns);

// Activate or disable buttons
function disableBtns() {
	// Disable previous and next button from start
	// Activate previous when there are lower indexes
	// from the current index of the jokes array
	if (jokes.length > 0 && currentIndex > 0) {
		prevJokeBtn.disabled = false;
		console.log("Previous button disabled");
	}
	// Activate next button when the index of
	// the current joke in display is lower than the total number of jokes in the array
	else if (currentIndex < jokes.length - 1) {
		nextJokeBtn.disabled = false;
		// prevJokeBtn.disabled = false && (nextJokeBtn.disabled = false);
	} else {
		prevJokeBtn.disabled = true;
		nextJokeBtn.disabled = true;
	}
	console.log("working");
	console.log(jokes);
}

// Display a new joke
newJokeBtn.addEventListener("click", (e) => {
	getJoke().then((e) => {
		currentIndex = jokes.length - 1;
		displayJoke();
	});
});
// Display previous joke in jokes array
prevJokeBtn.addEventListener("click", (e) => {
	currentIndex--;
	displayJoke();
});
// Display next joke in jokes array
nextJokeBtn.addEventListener("click", (e) => {
	currentIndex++;
	displayJoke();
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

function generateJoke() {
	getJoke();
}

function displayJoke() {
	jokeDiv.textContent = jokes[currentIndex].joke;
}
disableBtns();
getJoke().then((e) => {
	displayJoke();
});
// console.log(jokes);
