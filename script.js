
// declare vars
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("#gradient")


// function to set background gradient color based on color 1/2 inputs
function setGradient() {
	console.log(color1.value); // check color1 value
	console.log(color2.value); // check color2 value 
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"; //shows real-time color picker rgb output in h3 element
}


// call setGradient function
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);