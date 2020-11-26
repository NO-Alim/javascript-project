const slides = document.querySelectorAll(".slide");
const radios = document.querySelectorAll(".radio");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const intervalTime = 5000;
let slideInterval;
let play = true;

//create next slide function
const nextSlide = () => {
  const current = document.querySelector(".current");
  const currentradio = document.querySelector(".radioActive");
  //remove current class
  current.classList.remove("current");
  currentradio.classList.remove("radioActive");

  //add current class if current have a next sibling
  if (current.nextElementSibling && currentradio.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
    currentradio.nextElementSibling.classList.add("radioActive");
  } else {
    //if there is has no next sibling lets add current class in first one
    slides[0].classList.add("current");
    radios[0].classList.add("radioActive");
  }
  //set time when current class remone
  setTimeout(() => current.classList.remove("current"));
  setTimeout(() => currentradio.classList.remove("radioActive"));
};

// create previous slide function
const prevSlide = () => {
  const current = document.querySelector(".current");
  const currentradio = document.querySelector(".radioActive");

  current.classList.remove("current");
  currentradio.classList.remove("radioActive");
  //if current have a previous sibling add the current class in this previous one
  if (current.previousElementSibling && currentradio.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
    currentradio.previousElementSibling.classList.add("radioActive");
  } else {
    // back to the last
    //if current has no previous sibling add the current class in the last sibling
    slides[slides.length - 1].classList.add("current");
    radios[radios.length - 1].classList.add("radioActive");
  }
  //set timeout when current class will remove
  setTimeout(() => current.classList.remove("current"));
  setTimeout(() => currentradio.classList.remove("radioActive"));
};

next.addEventListener("click", (e) => {
  e.preventDefault();
  nextSlide();
  if (play) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  e.preventDefault();
  prevSlide();
  if (play) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if (play) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

//-------------------------toggle button control---------------------------------

var pauseBtn = document.querySelector(".togglePlay");

function pauseSlide() {
  pauseBtn.innerHTML = `<i class="fas fa-play"></i>`;
  play = false;
  clearInterval(slideInterval);
}

function playSlide() {
  pauseBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  play = true;
  slideInterval = setInterval(nextSlide, 5000);
}

pauseBtn.onclick = function () {
  if (play) {
    pauseSlide();
  } else {
    playSlide();
  }
};

//-------------------------------product slider

const slidesTwo = document.querySelectorAll(".shopingSlider");
const radiosTwo = document.querySelectorAll(".shopradio");
const nextTwo = document.querySelector(".nextbtn");
const prevTwo = document.querySelector(".prevbtn");

let slideIntervalTwo;
let auto = true;

const nextbtn = () => {
  const currentTwo = document.querySelector(".shopCurrent");
  const currentradioTwo = document.querySelector(".shopradioActive");
  //remove current class ClassName {
  currentTwo.classList.remove("shopCurrent");
  currentradioTwo.classList.remove("shopradioActive");
  //check for next slide
  if (currentTwo.nextElementSibling && currentradioTwo.nextElementSibling) {
    //add current to next sibling
    currentTwo.nextElementSibling.classList.add("shopCurrent");
    currentradioTwo.nextElementSibling.classList.add("shopradioActive");
  } else {
    // back to the start
    slidesTwo[0].classList.add("shopCurrent");
    radiosTwo[0].classList.add("shopradioActive");
  }
  setTimeout(() => currentTwo.classList.remove("shopCurrent"));
  setTimeout(() => currentradioTwo.classList.remove("shopradioActive"));
};

const prevbtn = () => {
  const currentTwo = document.querySelector(".shopCurrent");
  const currentradioTwo = document.querySelector(".shopradioActive");
  //remove current class ClassName {
  currentTwo.classList.remove("shopCurrent");
  currentradioTwo.classList.remove("shopradioActive");
  //check for next slide
  if (
    currentTwo.previousElementSibling &&
    currentradioTwo.previousElementSibling
  ) {
    //add current to prev sibling
    currentTwo.previousElementSibling.classList.add("shopCurrent");
    currentradioTwo.previousElementSibling.classList.add("shopradioActive");
  } else {
    // back to the last
    slidesTwo[slidesTwo.length - 1].classList.add("shopCurrent");
    radiosTwo[radiosTwo.length - 1].classList.add("shopradioActive");
  }
  setTimeout(() => currentTwo.classList.remove("shopCurrent"));
  setTimeout(() => currentradioTwo.classList.remove("shopradioActive"));
};

//button events
nextTwo.addEventListener("click", (e) => {
  e.preventDefault();
  nextbtn();
  if (auto) {
    clearInterval(slideIntervalTwo);
    slideIntervalTwo = setInterval(nextbtn, intervalTime);
  }
});

prevTwo.addEventListener("click", (e) => {
  e.preventDefault();
  prevbtn();
  if (auto) {
    clearInterval(slideIntervalTwo);
    slideIntervalTwo = setInterval(nextbtn, intervalTime);
  }
});

if (auto) {
  //
  slideIntervalTwo = setInterval(nextbtn, intervalTime);
}

//-------------------------------play pause button control -------------------------------
var pauseButton = document.querySelector(".toggle");

function pauseSlideshow() {
  pauseButton.innerHTML = `<i class="fas fa-play"></i>`;
  auto = false;
  clearInterval(slideIntervalTwo);
}

function playSlideshow() {
  pauseButton.innerHTML = `<i class="fas fa-pause"></i>`;
  auto = true;
  slideIntervalTwo = setInterval(nextbtn, 5000);
}

pauseButton.onclick = function () {
  if (auto) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};
