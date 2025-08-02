'use strict';

{
  const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    watchSlidesProgress: true,
    loopAdditionalSlides: 1,
    centeredSlides: true,
    // navigation: {
    //   prevEl: '.swiper-button-prev',
    //   nextEl: '.swiper-button-next',
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
    }, 
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 0,
    },
    speed: 3000,
  });









}