const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector(".arrow-left")
const arrow_right = document.querySelector(".arrow-right")
let index = 0;

// Flèche 


arrow_left.addEventListener("click",function(){
	index--;
	displayDots(index);
})

arrow_right.addEventListener("click",function(){
	index++;
})

// Slides

function displayDots(){
	dots.innerHTML = "";

	for(let i = 0; i < slides.length; i++){
		let dot = document.createElement("span");
		dot.classList.add("dot");
		if(i == index){
			dot.classList.add("active");
		}
		dots.appendChild(dot);
	}
}
