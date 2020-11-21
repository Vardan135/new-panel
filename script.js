const panel = document.querySelector("#panel");
const view = document.querySelector("#view");
const btn = document.querySelectorAll(".button");
const content = document.querySelectorAll(".content");
const aroow = document.querySelectorAll(".arrow");
let elements = panel.getElementsByClassName("content");
let bool = false;
function open_content(e) {
	content.forEach(item => { item.style.display = "none" });
	aroow.forEach(item => { item.src = "images/arrow.png"; item.classList.remove("anim") });
	content[e].style.display = "flex";
	if (window.outerWidth <= 1200) {
		aroow[e].classList.add("anim");
		view.classList.add("anim2");
		panel.appendChild(view);
		btn[e].after(view);
		bool = true;
	}
	else {
		if (bool) {
			panel.removeChild(view);
			document.querySelector("#box").appendChild(view);
			bool = false;
		}
	}
	aroow[e].src = "images/arrow_select.png";
}
