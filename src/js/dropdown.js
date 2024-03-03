let buttonShowText = document.querySelector('.about-btn')
let heightListText = document.querySelector('.about__text-1')

buttonShowText.addEventListener('click', function () {
  heightListText.classList.add('about__text-1--maxHeight')
  buttonShowText.remove()
})

let buttonShowBrands = document.querySelector('.brands-slider__more--open')
let buttonHideBrands = document.querySelector('.brands-slider__more--close')
let heightListBrands = document.querySelector('.brands-slider__list')

buttonShowBrands.addEventListener('click', function () {
  buttonHideBrands.classList.remove('brands-slider__more--hidden')
  buttonShowBrands.classList.add('brands-slider__more--hidden')
  heightListBrands.classList.add('brands-slider__list--maxHeight')
})

buttonHideBrands.addEventListener('click', function () {
  buttonHideBrands.classList.add('brands-slider__more--hidden')
  buttonShowBrands.classList.remove('brands-slider__more--hidden')
  heightListBrands.classList.remove('brands-slider__list--maxHeight')
})

let buttonShowTechnic = document.querySelector('.technic-slider__more--open')
let buttonHideTechnic = document.querySelector('.technic-slider__more--close')
let heightListTechnic = document.querySelector('.technic-slider__list')

buttonShowTechnic.addEventListener('click', function () {
  buttonHideTechnic.classList.remove('technic-slider__more--hidden')
  buttonShowTechnic.classList.add('technic-slider__more--hidden')
  heightListTechnic.classList.add('technic-slider__list--maxHeight')
})

buttonHideTechnic.addEventListener('click', function () {
  buttonHideTechnic.classList.add('technic-slider__more--hidden')
  buttonShowTechnic.classList.remove('technic-slider__more--hidden')
  heightListTechnic.classList.remove('technic-slider__list--maxHeight')
})
