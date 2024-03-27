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

let arrow_left = document.querySelector(".arrow_left")
const arrow_right = document.querySelector(".arrow_right")
let index = 0;

// Flèche 

arrow_right.addEventListener("click",function(){
	index++;
	if(index >= slides.length ){
		index = 0;
	}
	console.log("Index est : " + index);
	displayDots(index);
})

arrow_left.addEventListener("click",function(){
	index--;
	if(index < 0){
		index = slides.length -1;
	}
	console.log("Index est : " + index);
	displayDots(index);
})

// Slides
function displayDots(index){
	const dots = document.querySelector(".dots");
	dots.innerHTML = "";

	for(let i = 0; i < slides.length; i++){   // slides.legth sert a selectionner toute les slide en haut de la page et i est le compteur de slide
		let dot = document.createElement("span");
		dot.classList.add("dot");
		if(i == index){
			dot.classList.add("active");
		}
		dots.appendChild(dot);
	}
}
