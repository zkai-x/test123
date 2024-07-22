// 轮播图
const carouselContainer = document.getElementById('carouselContainer');
  const slides = carouselContainer.children;
  const totalSlides = slides.length;
  let currentSlideIndex = 0;
  const slideWidth = slides[0].clientWidth;

  function slideTo(index) {
    const transformValue = -(index % totalSlides) * slideWidth;
    carouselContainer.style.transform = `translateX(${transformValue}px)`;
  }

  function autoSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    slideTo(currentSlideIndex);
    setTimeout(autoSlide, 3000);
  }

  autoSlide();