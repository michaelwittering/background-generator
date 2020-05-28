var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// function to change gradient via input and update css
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// set gradient on loading of window
window.onload = (event) =>{
	setGradient();
}

// set gradient on change of color value input
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// random number generator 0-255
function randomNumber() {
	return (Math.random() * 256|0);
}

// generate two unique values for R, G, B
var numGenR1 = randomNumber();
var numGenG1 = randomNumber();
var numGenB1 = randomNumber();
var numGenR2 = randomNumber();
var numGenG2 = randomNumber();
var numGenB2 = randomNumber();

// function to convert to string to Hex
function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

// function for converting RGB components to hex
function rgbToHex(r, g, b) {
return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// adds random generated values for color 1
function rndmHexColor1() {
	return rgbToHex(numGenR1, numGenG1, numGenB1);
}

// adds random generated values for color 2
function rndmHexColor2() {
	return rgbToHex(numGenR2, numGenG2, numGenB2);
}

// function to randomise color 1 & 2 values
function randomiseBtn() {
	document.getElementById("color1").value = rndmHexColor1();
	document.getElementById("color2").value = rndmHexColor2();
	location.reload();
}

// listen event to trigger randomise color
var button = document.getElementById("button");
button.addEventListener("click", randomiseBtn);



