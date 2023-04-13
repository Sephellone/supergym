const initSliders = () => {
  if (document.querySelector('.staff__slider')) {
    const staffSlider = new Swiper('.staff__slider', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      initialSlide: 2,
      centeredSlides: true,
      autoResize: false,

      breakpoints: {
        768: {
          spaceBetween: 30,
          centeredSlides: false,
          slidesPerView: 'auto',
        },

        1200: {
          spaceBetween: 40,
          slidesPerView: 'auto',
          initialSlide: 0,
          centeredSlides: false,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.staff__slider-button--prev',
      },
    });
  }
};

export {initSliders};
