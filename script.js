const	    css 		= document.querySelector("h3"),
				color1	= document.querySelector(".color1"),
		 		color2 	= document.querySelector(".color2"),
		 		body    = document.querySelector("body"),
		 		random	= document.querySelector(".random");

// Setting the Gradient
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// Generate Random RGB Colors
function randomColors() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const color = "rgb(" + r + ", " + g + ", " + b + ")";
	return color;
}

// Set Random Gradient Colors
function setRandomColors() {
	body.style.background = 
	"linear-gradient(to right, "
	+ randomColors()
	+ ", "
	+ randomColors()
	+ ")";
	css.textContent = body.style.background + ";";
}

// Setting Gradient
setGradient();

// When we change the color on the Color Input
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// When we click on the Generate Random Gradient Button
random.addEventListener("click", setRandomColors);
