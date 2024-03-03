let asideMenu = document.querySelector(".burger-menu");
let buttonsShowModalFeed = document.querySelectorAll(".btn-msg");
let buttonCloseModalFeed = document.querySelector(".modal-feedback__btn-close");
let modalFeedback = document.querySelector(".modal-feedback");
let modalFeedbackBG = document.querySelector(".modal-feedback__bg");

for (let i = 0; i < buttonsShowModalFeed.length; i++) {
  buttonsShowModalFeed[i].addEventListener("click", function () {
    modalFeedback.classList.add("modal-feedback--show");
  });
}

buttonCloseModalFeed.addEventListener("click", function () {
  modalFeedback.classList.remove("modal-feedback--show");
});

modalFeedbackBG.addEventListener("click", function () {
  modalFeedback.classList.remove("modal-feedback--show");
});
modalFeedbackBG.addEventListener("click", function () {
  asideMenu.classList.remove("burger-menu--show");
});

document.addEventListener("keydown", function (evt) {
  if (evt.key == "Escape") {
    modalFeedback.classList.remove("modal-feedback--show");
  }
});