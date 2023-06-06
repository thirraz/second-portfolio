let sidebar = document.querySelector(".sidebar")
let hamburger = document.querySelector(".hamburger")
let close = document.querySelector(".close")

close.style.display = "none"

hamburger.addEventListener("click", () => {
	close.style.display = "block"
	hamburger.style.display = "none"
	sidebar.style.transform = "translateX(0%)"
})

close.addEventListener("click", () => {
	close.style.display = "none"
	hamburger.style.display = "block"
	sidebar.style.transform = "translateX(100%)"
})
