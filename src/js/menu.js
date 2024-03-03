let buttonShowMenu = document.querySelector(".header__btn-burger");
let buttonCloseMenu = document.querySelector(".burger-menu__btn-close");
let asideMenu = document.querySelector(".burger-menu");
let burgerMenuBG = document.querySelector(".burger-menu__bg");

buttonShowMenu.addEventListener("click", function () {
  asideMenu.classList.add("burger-menu--show");
});

buttonCloseMenu.addEventListener("click", function () {
  asideMenu.classList.remove("burger-menu--show");
});

burgerMenuBG.addEventListener("click", function () {
  asideMenu.classList.remove("burger-menu--show");
});

document.addEventListener("keydown", function (evt) {
  if (evt.key == "Escape") {
    asideMenu.classList.remove("burger-menu--show");
  }
});