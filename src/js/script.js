// Летающие теги
window.onload = function () {
  document.querySelector('.elements').classList.add('elements--active');
  document.querySelector('.elem').classList.add('elem--active');
};

// Клик по бургеру 
(function () {
  let header__toggle = document.querySelector('.header__toggle');
  let toggleMenu = document.querySelector('nav');
  header__toggle.addEventListener('click', function () {
    header__toggle.classList.toggle('header__toggle-active');

    toggleMenu.classList.toggle('toggle__menu');
    toggleMenu.classList.toggle('header__menu');
  });

}());

// Плавный скролл
let smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    let id = smoothLink.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

//Слайдер
new Swiper('.slider', {
  slidesPerView: 1,
  spaceBetween: 21,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
  loop: true,
  wrapperClass: 'slider__list',
  slideClass: 'slider__item',
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    bulletClass: 'paginator__item',
    bulletActiveClass: 'paginator__item-active',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Слайд {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
});
