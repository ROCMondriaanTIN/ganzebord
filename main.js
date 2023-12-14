console.log("main.js is running...");

const container = document.querySelector(".container");
const btn = document.querySelector(".next");

for (let i = 0; i < 10; i++) {
	container.innerHTML += `<div class="box">${i}</div>`;
}
const boxes = document.querySelectorAll(".box");
boxes[0].innerHTML += `<div class="goose"></div>`;

let step = 1;
btn.addEventListener("click", function () {
	const previousBox = boxes[step - 1];
	previousBox.innerHTML = step - 1;

	const box = boxes[step];
	box.innerHTML += `<div class="goose"></div>`;

	step++;
});
