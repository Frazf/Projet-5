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

/*Variable globales*/
	
const dots = document.querySelector(".dots");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img");
const h2 = document.querySelector("#banner p")
let index = 0;




// Variables Globales

let arrow_left = document.querySelector(".arrow_left")                    // Sélectionne l'élément HTML avec la classe "arrow_left" et le stocke dans la variable arrow_left
const arrow_right = document.querySelector(".arrow_right")               // Sélectionne l'élément HTML avec la classe "arrow_right" et le stocke dans la constante arrow_right                                                       

// Fonction pour afficher les points indicateurs
function displayDots(){                            
	dots.innerHTML = "";                                                        // Efface tout contenu précédent dans l'élément "dots"
	
	for(let i = 0; i < slides.length; i++){                                   // slides.legth sert a selectionner toute les slide en haut de la page et i est le compteur de slide (// Boucle à travers toutes les slides)
		let dot = document.createElement("div");                            // Crée un élément span pour chaque point indicateur
		dot.classList.add("dot");                                           // Ajoute la classe "dot" à chaque point indicateur
		if(i == index){                                                    // Vérifie si l'indice de la boucle correspond à l'index actuel
			dot.classList.add("dot_selected");                                  // Ajoute la classe "active" au point indicateur correspondant à l'index actuel
		}
		dots.appendChild(dot);                                          // Ajoute le point indicateur à l'élément "dots"
	}
}
displayDots();

// Ajoute un écouteur d'événements sur le clic de la flèche droite
arrow_right.addEventListener("click",function(){                               // Retire la classe "dot_selected" du point indicateur actuel                                                          // Incrémente l'index
	const tabdots = document.querySelectorAll(".dot .dots");
	if(tabdots.length > 0){
	
	tabdots[index].classList.remove("dot_selected");                           // Ajoute la classe "dot_selected" au point indicateur actuel
index++;
if(index >= slides.length ){                                              // Vérifie si l'index dépasse le nombre de slides
	index = 0;                                                           // Réinitialise l'index à 0 s'il dépasse
}
tabdots[index].classList.add("dot_selected");                            // Ajoute la classe "dot_selected" au point indicateur actuel
img.src = "./assets/images/slideshow/"+slides[index].image;	
h2.innerHTML = slides[index].tagLine;
console.log("l'image est",slides[index].tagLine)
console.log("La source de l'image est",img.src);
	}else{
		console.log("Pas de slides")
	}
})
// Ajoute un écouteur d'événements sur le clic de la flèche gauche
/*arrow_left.addEventListener("click",function(){
index--;                                                              // Décrémente l'index 
if(index < 0){                                                       // Vérifie si l'index est inférieur à 0
	index = slides.length -1;                                       // Réinitialise l'index au dernier élément s'il est inférieur à 0
} 
displayDots();                                                   // Appelle la fonction pour afficher les points indicateurs
})*/



// Slides



