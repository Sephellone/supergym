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
      loopedSlides: 0,
      maxBackfaceHiddenSlides: 0,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      breakpoints: {
        768: {
          spaceBetween: 30,
          centeredSlides: false,
        },

        1200: {
          spaceBetween: 40,
          initialSlide: 0,
          centeredSlides: false,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: '.staff__slider-button--next',
        prevEl: '.staff__slider-button--prev',
      },
    });

    const duplicates = document.querySelectorAll('.swiper-slide-duplicate');
    duplicates.forEach((duplicate) => {
      duplicate.querySelector('.staff-card').setAttribute('tabindex', '-1');
    });
  }

  if (document.querySelector('.reviews__slider')) {
    const reviewsSlider = new Swiper('.reviews__slider', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 60,
      autoHeight: true,

      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });
  }

  const notificationSpans = document.querySelectorAll('.swiper-notification');

  if (notificationSpans && notificationSpans.length) {
    notificationSpans.forEach((span) => {
      span.remove();
    });
  }
};

export {initSliders};
