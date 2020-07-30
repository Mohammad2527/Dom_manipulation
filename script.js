const images = ["1.jpg", "2.jpg", "3.jpg"];
let currentImageIndex = 0;

const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const textColor = document.querySelector("#textColor");
const img = document.querySelector("img");
const heading = document.querySelector("h1");
const para = document.querySelector("#para");

textColor.addEventListener("click", function(){
    heading.style.color = "#ff0000";
    para.style.color = "#ff0000";
    heading.style.font = "italic bold 40px arial,serif";
    para.style.font = "italic bold 25px arial,serif";
});


prevButton.addEventListener("click", function(){
    currentImageIndex = 
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    img.src = images[currentImageIndex];
});


nextButton.addEventListener("click", function(){
    currentImageIndex = (currentImageIndex + 1) % images.length;
    img.src = images[currentImageIndex];

});

const darkLightButton = document.querySelector("#dark-light-button");
darkLightButton.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});

const moreLessButton = document.querySelector("#more-less-button");
moreLessButton.addEventListener("click", function(){
    document.querySelector("p").classList.toggle("truncate");
});