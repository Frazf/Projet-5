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

let arrow_left = document.querySelector(".arrow_left") // Sélectionne l'élément HTML avec la classe "arrow_left" et le stocke dans la variable arrow_left
const arrow_right = document.querySelector(".arrow_right") // Sélectionne l'élément HTML avec la classe "arrow_right" et le stocke dans la constante arrow_right
let index = 0; // Initialise la variable index à 0, qui servira à suivre l'index actuel des slides

// Flèche 

// Ajoute un écouteur d'événements sur le clic de la flèche droite
arrow_right.addEventListener("click",function(){
	index++; // Incrémente l'index
	if(index >= slides.length ){ // Vérifie si l'index dépasse le nombre de slides
		index = 0; // Réinitialise l'index à 0 s'il dépasse
	}
	console.log("Index est : " + index); // Affiche l'index actuel dans la console
	displayDots(index); 
})
// Ajoute un écouteur d'événements sur le clic de la flèche gauche
arrow_left.addEventListener("click",function(){
	index--; // Décrémente l'index 
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
