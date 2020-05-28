let numSquares = 6;
let colors = generateArray(numSquares);
let selectedColor = pickColor();
let displayColor = document.getElementById('display');
let message = document.querySelector('#displayMessage');
let square = document.querySelectorAll('.square');
let head = document.querySelector('.heading');
let reset = document.querySelector('#reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function() {
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	numSquares = 3;
	colors = generateArray(numSquares);
	selectedColor = pickColor();
	displayColor.textContent = selectedColor;
	reset.textContent = 'New Colors';
	message.textContent = '';
	head.style.backgroundColor = 'steelblue';
	for (let i = 0; i < square.length; i++) {
		if (colors[i]) {
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = 'none';
		}
	}
});
hardBtn.addEventListener('click', function() {
	hardBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
	numSquares = 6;
	colors = generateArray(numSquares);
	selectedColor = pickColor();
	displayColor.textContent = selectedColor;
	reset.textContent = 'New Colors';
	message.textContent = '';
	head.style.backgroundColor = 'steelblue';
	for (let i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = 'block';
	}
});

reset.addEventListener('click', function() {
	reset.textContent = 'New Colors';
	message.textContent = '';
	colors = generateArray(numSquares);
	selectedColor = pickColor();
	displayColor.textContent = selectedColor;
	head.style.backgroundColor = 'steelblue';
	for (let i = 0; i <= square.length; i++) {
		square[i].style.backgroundColor = colors[i];
	}
});
displayColor.textContent = selectedColor;
for (let i = 0; i <= square.length; i++) {
	square[i].style.backgroundColor = colors[i];
	square[i].addEventListener('click', function() {
		let pickedColor = this.style.backgroundColor;
		if (pickedColor === selectedColor) {
			message.textContent = 'Correct!';
			reset.textContent = 'Play Again?';
			head.style.backgroundColor = selectedColor;
			setColor(selectedColor);
		} else {
			this.style.backgroundColor = '#232323';
			message.textContent = 'Try Again';
		}
	});
}

function pickColor() {
	let num = Math.floor(Math.random() * colors.length);
	return colors[num];
}
function setColor(color) {
	for (i = 0; i <= square.length; i++) {
		square[i].style.backgroundColor = color;
	}
}
function generateArray(n) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(randomColor());
	}
	return arr;
}
function randomColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let color = `rgb(${r}, ${g}, ${b})`;
	return color;
}
