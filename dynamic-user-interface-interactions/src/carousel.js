export const createCarousel = (srcArr) => {
  const slides = srcArr;
  let numSlides = srcArr.length;
  let curSlide = 0;

  const carousel = { slides, numSlides, curSlide };

  const getSlides = () => carousel.slides;
  const getNumSlides = () => carousel.numSlides;
  const getCurSlide = () => carousel.curSlide;

  const nextSlide = () => {
    carousel.curSlide = ++carousel.curSlide % carousel.numSlides;
  };
  const prevSlide = () => {
    carousel.curSlide = --carousel.curSlide;
    if (carousel.curSlide === -1) carousel.curSlide = carousel.numSlides - 1;
  };
  const navSlide = (idx) => {
    carousel.curSlide = idx;
  };
  const removeSlide = (idx) => {
    carousel.slides.splice(idx, 1);
    carousel.numSlides--;
  };
  const addSlide = (src, idx) => {
    carousel.slides.splice(idx, 0, src);
    carousel.numSlides++;
  };

  return {
    getSlides,
    getNumSlides,
    getCurSlide,
    nextSlide,
    prevSlide,
    navSlide,
    removeSlide,
    addSlide,
  };
};
