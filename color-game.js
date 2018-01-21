colors = [
	"rgb(255, 0, 0)",	
	"rgb(255, 255, 0)",	
	"rgb(0, 255, 0)",	
	"rgb(255, 0, 255)",	
	"rgb(0, 0, 255)",	
	"rgb(0, 255, 255)"	
]

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var messsageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		console.log(clickedColor,pickedColor);
		if(clickedColor === pickedColor) {
			messsageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
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
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}