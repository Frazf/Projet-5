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

// Variables Globales

let arrow_left = document.querySelector(".arrow_left")                   // Sélectionne l'élément HTML avec la classe "arrow_left" et le stocke dans la variable arrow_left
const arrow_right = document.querySelector(".arrow_right")              // Sélectionne l'élément HTML avec la classe "arrow_right" et le stocke dans la constante arrow_right
const img = document.querySelector(".banner-img")                       // Sélectionne l'élément HTML avec la classe "banner-img" et le stocke dans la variable img  
let index = 0;                                                         // Initialise la variable index à 0, qui servira à suivre l'index actuel des slides

// Flèche 

// Ajoute un écouteur d'événements sur le clic de la flèche droite
arrow_right.addEventListener("click",function(){
	const tabDots = document.querySelectorAll(".dots .dot");                // Sélectionne tous les éléments HTML avec la classe "dot" et les stocke dans la variable tabDots
	tabDots[index].classList.remove("dot_selected");                   // Retire la classe "dot_selected" du point indicateur actuel
	index++;                                                          // Incrémente l'index
	if(index >= slides.length ){                                     // Vérifie si l'index dépasse le nombre de slides
		index = 0;                                                  // Réinitialise l'index à 0 s'il dépasse
	}
	tadDots[index].classList.add("dot_selected");                    // Ajoute la classe "dot_selected" au point indicateur actuel
	img.src ="./assets/images/slidesshow/"+slides[index].image;      // Affiche l'image du slide actuel
	displayDots(index);                                           // Appelle la fonction pour afficher les points indicateurs
})
// Ajoute un écouteur d'événements sur le clic de la flèche gauche
arrow_left.addEventListener("click",function(){
	index--;                                                   // Décrémente l'index 
	if(index < 0){                                            // Vérifie si l'index est inférieur à 0
		index = slides.length -1;                            // Réinitialise l'index au dernier élément s'il est inférieur à 0
	} 
	displayDots(index);                                   // Appelle la fonction pour afficher les points indicateurs
})



// Slides

// Fonction pour afficher les points indicateurs
function displayDots(index){ 
	const dots = document.querySelector(".dots");                               // Sélectionne l'élément avec la classe "dots" et le stocke dans la constante dots
	dots.innerHTML = "";                                                       // Efface tout contenu précédent dans l'élément "dots"

	for(let i = 0; i < slides.length; i++){              // slides.legth sert a selectionner toute les slide en haut de la page et i est le compteur de slide (// Boucle à travers toutes les slides)
		let dot = document.createElement("span");                            // Crée un élément span pour chaque point indicateur
		dot.classList.add("dot");                                           // Ajoute la classe "dot" à chaque point indicateur
		if(i == index){                                                    // Vérifie si l'indice de la boucle correspond à l'index actuel
			dot.classList.add("active");                                  // Ajoute la classe "active" au point indicateur correspondant à l'index actuel
		}
		dots.appendChild(dot);                                          // Ajoute le point indicateur à l'élément "dots"
	}

}
