/* global lottie */

import {
  getPortfolioItem,
  getPortfolioItems,
  portfolioLength,
} from "./portfolio.js";

for (const item of getPortfolioItems()) {
  new Image().src = item.path;
}

const debug = false;

const circle = document.getElementById("circle");
const circleText = document.getElementById("circle-text");
const portfolioImg = document.getElementById("portfolio");
const sectionText = document.getElementById("section-text");
const bottom = document.getElementById("bottom");
const descriptionText = document.getElementById("description-text");
const madeWith = document.getElementById("made-with");
const madeWithImg = document.getElementById("made-with-icon");
const madeWithImgSecondary = document.getElementById(
  "made-with-icon-secondary",
);
let pageIdx = -1;

const circleTextAnim = lottie.loadAnimation({
  autoplay: false,
  container: circleText,
  loop: false,
  path: "assets/circle-text.json",
});

const transitionDuration = (elem) => {
  const msInSec = 1000;
  return parseFloat(window.getComputedStyle(elem).transitionDuration) * msInSec;
};

const applyToArrows = (direction, fn) => {
  const arrows = [
    document.getElementById(`arrow-${direction}-landscape`),
    document.getElementById(`arrow-${direction}-portrait`),
  ];
  for (const arrow of arrows) {
    fn(arrow);
  }
};
const oppositeDirection = (direction) =>
  direction === "right" ? "left" : "right";

const showArrow = (direction) => {
  applyToArrows(direction, (elem) => {
    elem.classList.remove(`arrow-${direction}-hidden`);
  });
};

const hideArrow = (direction) => {
  applyToArrows(direction, (elem) => {
    elem.classList.add(`arrow-${direction}-hidden`);
  });
};

const showHideArrows = () => {
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

const hideCircle = () => {
  circle.classList.add("circle-hidden");
  setTimeout(() => {
    circle.classList.add("hidden");
    portfolioImg.classList.remove("hidden");
  }, transitionDuration(circle));
};

const updatePageIdx = (direction) => {
  if (direction === "right" && pageIdx < portfolioLength - 1) {
    pageIdx += 1;
  } else if (direction === "left" && pageIdx > 0) {
    pageIdx -= 1;
  }
};

const updateSectionText = (section) => {
  sectionText.classList.add("section-text-hidden");

  setTimeout(() => {
    sectionText.textContent = section;
    sectionText.classList.remove("section-text-hidden");
  }, transitionDuration(sectionText));
};

const updateMadeWith = (itemMadeWith) => {
  if (itemMadeWith.length === 0) {
    madeWith.classList.add("hidden");
  } else {
    madeWithImg.src = `assets/${itemMadeWith[0]}.svg`;
    madeWith.classList.remove("hidden");
    madeWithImg.classList.remove("hidden");
    if (itemMadeWith.length === 1) {
      madeWithImgSecondary.classList.add("hidden");
    } else {
      madeWithImgSecondary.src = `assets/${itemMadeWith[1]}.svg`;
      madeWithImgSecondary.classList.remove("hidden");
    }
  }
};

const handleArrowClick = (direction) => {
  updatePageIdx(direction);

  hideCircle();

  const item = getPortfolioItem(pageIdx);

  portfolioImg.style.transformOrigin = oppositeDirection(direction);
  portfolioImg.classList.add("portfolio-hidden");
  bottom.classList.add("bottom-hidden");

  if (sectionText.textContent !== item.section) {
    updateSectionText(item.section);
  }

  setTimeout(() => {
    portfolioImg.src = item.path;
    portfolioImg.alt = item.description;
    portfolioImg.style.transformOrigin = direction;
    portfolioImg.classList.remove("portfolio-hidden");

    descriptionText.textContent = item.description;

    updateMadeWith(item.madeWith);

    bottom.classList.remove("bottom-hidden");
  }, transitionDuration(bottom));

  showHideArrows();
};

circle.addEventListener("animationend", (_) => {
  if (debug) {
    const speedMultiplier = 100;
    circleTextAnim.setSpeed(speedMultiplier);
  }
  const textAnimDelayMs = 100;
  setTimeout(() => {
    circleTextAnim.play();
  }, textAnimDelayMs);
});

circleTextAnim.addEventListener("complete", (_) => {
  showArrow("right");
});

applyToArrows("right", (arrow) => {
  arrow.addEventListener("click", (_) => {
    handleArrowClick("right");
  });
});

applyToArrows("left", (arrow) => {
  arrow.addEventListener("click", (_) => {
    handleArrowClick("left");
  });
});
