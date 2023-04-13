const initSliders = () => {

  if (document.querySelector('.staff__slider')) {
    const staffSlider = new Swiper('.staff__slider', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 40,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.staff__slider-button--prev',
      },
    });
  }
};

export {initSliders};
