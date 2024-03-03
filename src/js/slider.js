
import Swiper, {Pagination } from 'swiper';
Swiper.use([Pagination]);

let swiper;
function initSwiper() {
  swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: "auto",
    spaceBetween: 16,
  });
}

function destroySwiper() {
  swiper.destroy();
  swiper = null;
}

function handleResize() {
  if (window.innerWidth < 768) {
    if (!swiper) {
      initSwiper();
    }
  } else {
    if (swiper) {
      destroySwiper();
    }
  }
}
window.addEventListener("resize", handleResize);
handleResize();


