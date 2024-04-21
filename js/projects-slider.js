// let currentSlide = 0;
// const slides = document.querySelectorAll('.projects__slide');
// console.log(slides)

// function showSlide(n) {
//   slides[currentSlide].classList.remove('active');
//   currentSlide = (n + slides.length) % slides.length;
//   slides[currentSlide].classList.add('active');
// }

// function nextSlide() {
//   showSlide(currentSlide + 1);
// }

// function prevSlide() {
//   showSlide(currentSlide - 1);
// }

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider-inner');
    const slides = document.querySelectorAll('.projects__slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
  
    function showSlide(index) {
      const newIndex = (index + totalSlides) % totalSlides;
  
      slides.forEach((slide, i) => {
        if (i === newIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
  
      const translateValue = -newIndex * 100 + '%';
      console.log('translateValue:', translateValue);
      slider.style.transform = 'translateX(' + translateValue + ')';
      currentIndex = newIndex;
    }
    const leftSelector = document.querySelector('.slider-control-prev');
    const rightSelector = document.querySelector('.slider-control-next');
    // const leftSelectors = document.querySelectorAll('.reviews-arrow-left');
    // const rightSelectors = document.querySelectorAll('.reviews-arrow-right');
    leftSelector.addEventListener('click', function (e) {
        showSlide(currentIndex - 1);
    });
    rightSelector.addEventListener('click', function (e) {
        showSlide(currentIndex + 1);
    });
  
    // leftSelectors.forEach(leftSelector => {
    //   leftSelector.addEventListener('click', function (e) {
    //     showSlide(currentIndex - 1);
    //   });
    // });
  
    // rightSelectors.forEach(rightSelector => {
    //   rightSelector.addEventListener('click', function (e) {
    //     showSlide(currentIndex + 1);
    //   });
    // });

    showSlide(currentIndex);
  });