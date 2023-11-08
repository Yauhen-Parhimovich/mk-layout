document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector('.navigation-search__button');
  const searchWrapper = document.querySelector('.navigation-search__wrapper');
  const searchInput = document.querySelector('.navigation-search__input');
  const headerSlider = document.querySelector('.header-slider');
  const slides = document.querySelectorAll('.slider-item');
  const slideLength = slides.length - 1;
  const sliderTruck = document.querySelector('.slider-truck');
  const slideWidth = window.innerWidth;
  let currentSlide = 0;

  searchButton.addEventListener('click', () => {
    searchWrapper.classList.add('navigation-search__wrapper_active');
    searchInput.focus();
  })

  searchInput.addEventListener('blur', (event) => {
    if (!event.target.value) {
      searchWrapper.classList.remove('navigation-search__wrapper_active');
    }
  })

  const sliderInterval = setInterval(() => {
    if (currentSlide < slideLength) {
      ++currentSlide;
      sliderTruck.style.cssText +=  `transform: translateX(${-slideWidth * currentSlide}px);`;
    } else {
      clearInterval(sliderInterval);
    }
  }, 7000);

  headerSlider.addEventListener('click', (event) => {
    const button = event.target.closest('.slider-arrow');

    if (button?.classList.contains('slider-arrow_right')) {
      clearInterval(sliderInterval);
      if (currentSlide < slideLength) {
        ++currentSlide;
        sliderTruck.style.cssText +=  `transform: translateX(${-slideWidth * currentSlide}px);`;
      }
    } else if (button?.classList.contains('slider-arrow_left')) {
      clearInterval(sliderInterval);
      if (currentSlide > 0) {
        --currentSlide;
        sliderTruck.style.cssText += `transform: translateX(${-slideWidth * currentSlide}px);`;
      }
    }
  })
});
