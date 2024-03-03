

// НАЧАЛО БЛОК ЧИТАТЬ ДАЛЕЕ
let buttonShowText = document.querySelector(".article__btn");
let heightListText = document.querySelector(".article__text-1");

buttonShowText.addEventListener("click", function () {
  heightListText.classList.add("article__text-1--maxHeight");
  buttonShowText.remove();
});

// КОНЕЦ БЛОК ЧИТАТЬ ДАЛЕЕ

// НАЧАЛО БЛОК БРЕНДОВ

let buttonShowBrands = document.querySelector(".brands-button__more--open");
let buttonHideBrands = document.querySelector(".brands-button__more--close");
let heightListBrands = document.querySelector(".brands-slider__list");

buttonShowBrands.addEventListener("click", function () {
  buttonHideBrands.classList.remove("brands-button__more--hidden");
  buttonShowBrands.classList.add("brands-button__more--hidden");
  heightListBrands.classList.add("brands-slider__list--maxHeight");
});

buttonHideBrands.addEventListener("click", function () {
  buttonHideBrands.classList.add("brands-button__more--hidden");
  buttonShowBrands.classList.remove("brands-button__more--hidden");
  heightListBrands.classList.remove("brands-slider__list--maxHeight");
});

// КОНЕЦ БЛОК БРЕНДОВ

// НАЧАЛО БЛОК ТЕХНИКИ

let buttonShowTechnic = document.querySelector(".technic-button__more--open");
let buttonHideTechnic = document.querySelector(".technic-button__more--close");
let heightListTechnic = document.querySelector(".technic-slider__list");

buttonShowTechnic.addEventListener("click", function () {
  buttonHideTechnic.classList.remove("technic-button__more--hidden");
  buttonShowTechnic.classList.add("technic-button__more--hidden");
  heightListTechnic.classList.add("technic-slider__list--maxHeight");
});

buttonHideTechnic.addEventListener("click", function () {
  buttonHideTechnic.classList.add("technic-button__more--hidden");
  buttonShowTechnic.classList.remove("technic-button__more--hidden");
  heightListTechnic.classList.remove("technic-slider__list--maxHeight");
});

// КОНЕЦ БЛОК ТЕХНИКИ
