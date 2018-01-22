var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messsageDisplay = document.querySelector("#message");
var h1  = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// colorDisplay.textContent = pickedColor;

init();

function init() {

	setUpModeButtons();
	setUpSquares();
	resetMode();
}

function setUpModeButtons() {

	for (var i = 0; i <modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function () {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares=3:numSquares=6;
		resetMode();
		});
	}
}

function setUpSquares() {

	for (var i = 0; i < squares.length; i++) {
	// squares[i].style.background = colors[i];
		squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		// console.log(clickedColor,pickedColor);
		if(clickedColor === pickedColor) {
			messsageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
			resetButton.textContent = "Play Again?";

		}
		else {
			this.style.background = "#232323"
			messsageDisplay.textContent = "Try Again";
			}
		});
	}
}

function resetMode(){
	
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	messsageDisplay.textContent = "";
	resetButton.textContent = "New colors"
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}
// easyBtn.addEventListener("click",function(){
// 	this.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColor(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i< squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6
// 	colors = generateRandomColor(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i< squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 		}
// 	}
// });


resetButton.addEventListener("click", function(){
	resetMode();	
});

for (var i = 0; i < squares.length; i++) {
// squares[i].style.background = colors[i];

squares[i].addEventListener("click",function(){
	var clickedColor = this.style.background;
	// console.log(clickedColor,pickedColor);
	if(clickedColor === pickedColor) {
		messsageDisplay.textContent = "Correct!";
		changeColor(clickedColor);
		resetButton.textContent = "Play Again?";

	}
	else {
		this.style.background = "#232323"
		messsageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color) {
	for(var i=0;i<squares.length;i++) {
		squares[i].style.background = color;
	}
	h1.style.background = color;
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num)
{
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g +", " + b +")";
}