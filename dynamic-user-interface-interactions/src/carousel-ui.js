import { createCarousel } from "./carousel";

const btnLogic = (carousel, carouselWrapper) => {
  const imgContainer = carouselWrapper.querySelector(".img-container");
  const prevBtn = carouselWrapper.querySelector(".prev");
  const nextBtn = carouselWrapper.querySelector(".next");
  const pagination = carouselWrapper.querySelector(".pagination");

  const slides = carousel.getSlides();
  const numSlides = carousel.getNumSlides();

  // initial state
  imgContainer.style.backgroundImage = `url(${slides[carousel.getCurSlide()]})`;
  for (let i = 0; i < numSlides; i++) {
    const paginationCircle = document.createElement("div");
    paginationCircle.classList.add("pagination-circle");
    if (i === carousel.getCurSlide()) paginationCircle.classList.add("active");
    pagination.appendChild(paginationCircle);

    paginationCircle.addEventListener("click", () => {
      pagination.childNodes[carousel.getCurSlide()].classList.remove("active");

      carousel.navSlide(i);

      imgContainer.style.backgroundImage = `url(${
        slides[carousel.getCurSlide()]
      })`;
      pagination.childNodes[carousel.getCurSlide()].classList.add("active");
    });
  }

  // btn logic
  [prevBtn, nextBtn].forEach((item, idx) => {
    item.addEventListener("click", () => {
      pagination.childNodes[carousel.getCurSlide()].classList.remove("active");

      if (idx === 0) {
        carousel.prevSlide();
      } else {
        carousel.nextSlide();
      }

      imgContainer.style.backgroundImage = `url(${
        slides[carousel.getCurSlide()]
      })`;
      pagination.childNodes[carousel.getCurSlide()].classList.add("active");
    });
  });
};

const createCarouselUI = () => {
  const carouselWrapper = document.createElement("div");
  carouselWrapper.classList.add("carousel-wrapper");

  const prevBtn = document.createElement("button");
  const nextBtn = document.createElement("button");
  prevBtn.classList.add("prev");
  nextBtn.classList.add("next");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const pagination = document.createElement("div");
  pagination.classList.add("pagination");

  carouselWrapper.appendChild(prevBtn);
  carouselWrapper.appendChild(imgContainer);
  carouselWrapper.appendChild(nextBtn);
  carouselWrapper.appendChild(pagination);

  return carouselWrapper;
};

export const carousel = (src) => {
  const carousel = createCarousel(src);
  const carouselWrapper = createCarouselUI();

  // add logic
  btnLogic(carousel, carouselWrapper);

  return carouselWrapper;
};
