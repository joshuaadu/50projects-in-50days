const labels = document.querySelectorAll(".form-control label");

// For each label wrap every letter in a span element
// with a transition delay to create the animation
labels.forEach((label) => {
	label.innerHTML = label.textContent
		.split("")
		.map(
			(letter, idx) =>
				`<span style="transition-delay:${idx * 50}ms">${letter}</span>`
		)
		.join("");
});
