const initSliders = () => {
  if (document.querySelector('.staff__slider')) {
    const staffSlider = new Swiper('.staff__slider', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      initialSlide: 2,

      breakpoints: {
        768: {
          spaceBetween: 30,
        },

        1200: {
          spaceBetween: 40,
          initialSlide: 0,
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
