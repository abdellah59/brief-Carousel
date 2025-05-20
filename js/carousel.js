"use strict";

let slideIndex = 1; 
showSlides(slideIndex); 


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const imagesContainer = document.querySelector(".carousel .images"); 
  if (!imagesContainer){
    console.error("Le conteneur '.carousel .images' not found.");
    return;
  }

  const slides = imagesContainer.querySelectorAll(".image"); 
  const totalSlides = slides.length;

 
  if (n > totalSlides){
    slideIndex = 1;
  }
  if (n < 1){

    slideIndex = totalSlides;
  }


  for (let i = 0; i < totalSlides; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

