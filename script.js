const btn = document.querySelectorAll(".button");
const content = document.querySelectorAll(".content");
function a(e) {
	content.forEach(item => { item.style.display = "none" });
	content[e].style.display = "block";
}
