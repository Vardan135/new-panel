const panel = document.querySelector("#panel");
const view = document.querySelector("#view");
const btn = document.querySelectorAll(".button");
const content = document.querySelectorAll(".content");
const arrow = document.querySelectorAll(".arrow");
let elements = panel.getElementsByClassName("content");
let bool = false;
function open_content(e) {
	arrow.forEach(item => { item.src = "images/arrow.png"; item.classList.remove("anim"); item.classList.remove("anim3") });
	if (content[e].style.display == "none" || content[e].style.display == "") {
		content.forEach(item => { item.style.display = "none" });
		content[e].style.display = "flex";
		arrow[e].src = "images/arrow_select.png";
	} else {
		if (window.outerWidth <= 768) { arrow[e].classList.add("anim3") }
		content[e].style.display = "none";
	}
	if (window.outerWidth <= 768) {
		arrow[e].classList.add("anim");
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
}
