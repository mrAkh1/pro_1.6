let asideMenu = document.querySelector(".burger-menu");
let buttonsShowModalCall = document.querySelectorAll(".btn-call");
let buttonCloseModalCall = document.querySelector(".modal-call__btn-close");
let modalCall = document.querySelector(".modal-call");
let modalCallBG = document.querySelector(".modal-call__bg");

for (let i = 0; i < buttonsShowModalCall.length; i++) {
  buttonsShowModalCall[i].addEventListener("click", function () {
    modalCall.classList.add("modal-call--show");
  });
}

buttonCloseModalCall.addEventListener("click", function () {
  modalCall.classList.remove("modal-call--show");
});

modalCallBG.addEventListener("click", function () {
  modalCall.classList.remove("modal-call--show");
});

modalCallBG.addEventListener("click", function () {
  asideMenu.classList.remove("burger-menu--show");
});

document.addEventListener("keydown", function (evt) {
  if (evt.key == "Escape") {
    modalCall.classList.remove("modal-call--show");
  }
});
