import { getPortfolioItem, portfolioLength } from "./portfolio.js";

const debug = true;

const circle = document.getElementById("circle");
const circleText = document.getElementById("circle-text");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const portfolioImg = document.getElementById("portfolio");
const sectionText = document.getElementById("section-text");
const bottom = document.getElementById("bottom");
const descriptionText = document.getElementById("description-text");
const madeWithImg = document.getElementById("made-with-icon");
const madeWithImgSecondary = document.getElementById(
  "made-with-icon-secondary",
);
let pageIdx = -1;

const circleTextAnim = lottie.loadAnimation({
  container: circleText,
  loop: false,
  autoplay: false,
  path: "assets/circle-text.json",
});

const arrowFromDirection = (direction) =>
  direction === "right" ? arrowRight : arrowLeft;

const oppositeDirection = (direction) =>
  direction === "right" ? "left" : "right";

const showArrow = (direction) => {
  const elem = arrowFromDirection(direction);
  elem.classList.remove(`arrow-${direction}-hidden`);
};

const hideArrow = (direction) => {
  const elem = arrowFromDirection(direction);
  elem.classList.add(`arrow-${direction}-hidden`);
};

const handleArrowClick = (direction) => {
  if (direction === "right" && pageIdx < portfolioLength - 1) {
    pageIdx += 1;
  } else if (direction === "left" && pageIdx > 0) {
    pageIdx -= 1;
  }

  circle.classList.add("circle-hidden");
  setTimeout(() => {
    circle.classList.add("hidden");
    portfolioImg.classList.remove("hidden");
  }, 700);

  const item = getPortfolioItem(pageIdx);

  portfolioImg.style.transformOrigin = oppositeDirection(direction);
  portfolioImg.classList.add("portfolio-hidden");
  bottom.classList.add("bottom-hidden");

  if (sectionText.textContent !== item.section) {
    sectionText.classList.add("section-text-hidden");

    setTimeout(() => {
      sectionText.textContent = item.section;
      sectionText.classList.remove("section-text-hidden");
    }, 400);
  }

  setTimeout(() => {
    portfolioImg.src = item.path;
    portfolioImg.alt = item.description;
    portfolioImg.style.transformOrigin = direction;
    portfolioImg.classList.remove("portfolio-hidden");

    descriptionText.textContent = item.description;

    madeWithImg.src = `assets/${item.madeWith[0]}.svg`;
    if (item.madeWith.length === 1) {
      madeWithImgSecondary.classList.add("hidden");
    } else {
      madeWithImgSecondary.classList.remove("hidden");
      madeWithImgSecondary.src = `assets/${item.madeWith[1]}.svg`;
    }
    bottom.classList.remove("bottom-hidden");
  }, 400);

  if (pageIdx <= 0) {
    hideArrow("left");
  } else {
    showArrow("left");
  }

  if (pageIdx >= portfolioLength - 1) {
    hideArrow("right");
  } else {
    showArrow("right");
  }
};

circle.addEventListener("animationend", (_) => {
  if (debug) {
    circleTextAnim.setSpeed(100);
  }
  setTimeout(() => {
    circleTextAnim.play();
  }, 100);
});

circleTextAnim.addEventListener("complete", (_) => {
  showArrow("right");
});

arrowRight.addEventListener("click", (_) => {
  handleArrowClick("right");
});

arrowLeft.addEventListener("click", (_) => {
  handleArrowClick("left");
});
