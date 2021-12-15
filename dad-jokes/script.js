const splitItems = document.querySelectorAll(".split");
splitItems.forEach((item) => {
	item.addEventListener("mouseenter", () => {
		item.classList.add("active");
		item.classList.remove("non-active");
	});
	item.addEventListener("mouseleave", () => {
		item.classList.remove("active");
		item.classList.add("non-active");
	});
});
