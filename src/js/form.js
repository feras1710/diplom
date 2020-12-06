// открытие формы по кнопкам
let popupCont = document.querySelector('.modal__container');

let callBtn = document.querySelector('.connect__mobile-call');
let contentBtn = document.querySelector('.content__btn');
let skillsBtn = document.querySelector('.skills__btn');
let sliderBtn = document.querySelector('.slider__btn');
let networksBtn = document.querySelector('.networks__btn');
let modalSuccess = document.querySelector('.modal__success');


let modalClose = document.querySelector('.modal__close');
let modalSubmit = document.querySelector('.modal__submit');

const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
const targetElement = document.querySelector('.modal');


function modalWindow() {
  if (popupCont.style.display = 'none') {
    popupCont.style.display = 'block';

    document.body.classList.add('body-scroll-lock');
    disableBodyScroll(targetElement);
  }
};


modalClose.addEventListener('click', function (e) {
  e.preventDefault();
  popupCont.style.display = 'none';
  enableBodyScroll(targetElement);
});

callBtn.addEventListener('click', modalWindow);
contentBtn.addEventListener('click', modalWindow);
skillsBtn.addEventListener('click', modalWindow);
sliderBtn.addEventListener('click', modalWindow);
networksBtn.addEventListener('click', modalWindow);


