const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');

prevArrow.addEventListener('click', handlePrevSlide);
nextArrow.addEventListener('click', handleNextSlide);

function handlePrevSlide() {
    const currentSlide = document.querySelector('.slider__item_active');
    const prevSlide = currentSlide.previousElementSibling || currentSlide.parentNode.lastElementChild;

    currentSlide.classList.remove('slider__item_active');
    prevSlide.classList.add('slider__item_active');
  }
  function handleNextSlide() {
    const currentSlide = document.querySelector('.slider__item_active');
    const nextSlide = currentSlide.nextElementSibling || currentSlide.parentNode.firstElementChild;
  
    currentSlide.classList.remove('slider__item_active');
    nextSlide.classList.add('slider__item_active');
  }
document.addEventListener('keydown', handleKeyPress);
  function handleKeyPress(event) {
    if (event.code === 'ArrowLeft') {
       handlePrevSlide();
     } else if (event.code === 'ArrowRight') {
     handleNextSlide();
   }
 }