const nextJokeBtn = document.querySelector(".next")
const prevJokeBtn = document.querySelector(".prev")
const newJokeBtn = document.querySelector(".new")

let jokes = []
function disableBtns() {
	if (jokes.length === 0) {
		prevJokeBtn.disabled = true && (nextJokeBtn.disabled = true)
	}
	console.log("working")
}

disableBtns()
