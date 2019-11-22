import Swiper from 'swiper';
export let swiper = new Swiper(".swiper-container", {
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true
    },
    slidesPerView: "auto",
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      bulletClass: "swiper-pagination-bullet",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });