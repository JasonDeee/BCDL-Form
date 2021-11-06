//
//
// Hi There, Have a good day

const body = document.body;
const main = document.getElementById("main_scroll");

let // sx = 0, // For scroll positions
  sy = 0;
let // dx = sx, // For container positions And Force (Percentage 70% Recommended)
  dy = sy,
  Force = 77;

// Onpage Load And Refresh Events

body.style.height = main.clientHeight + "px";

ResetPage();

window.addEventListener("beforeunload", (e) => {
  ResetPage();
});

function ResetPage() {
  window.scrollTo(0, 0);

  body.scrollTo(0, 0);
  main.style = ``;
}

window.addEventListener("resize", (e) => {
  var resizetime = setTimeout(() => {
    let bodyHeight = main.getBoundingClientRect().height;
    body.style.height = `${bodyHeight}px`;
    easeScroll();

    clearTimeout(resizetime);
  }, 1200);
});

//
// Momentum Scrolling

// Scroll Functions
var ES = window.addEventListener("scroll", () => {
  easeScroll();
  let CheckerTimer = setTimeout(ScrollChecker, 888);
});

function easeScroll() {
  sy = window.pageYOffset;
}

window.requestAnimationFrame(render);

// Header Animation
const header = document.querySelector("#header");
const noodle = document.querySelector("#header #noodle");
const cirle1 = document.querySelector("#header #cirle1");
const cirle3 = document.querySelector("#header #cirle3");

// Sec1 Animation
const Basic_Needs = document.querySelector(".Basic_Needs");
const Need = document.querySelectorAll(".Basic_Needs .Nees");

for (let index = 0; index < Need.length; index++) {
  const element = Need[index];
  element.style.transition = `all 0.8s ${
    index * 0.15
  }s cubic-bezier(0.25, 0, 0, 1)`;
  if (index === Need.length - 1) {
    break;
  }
}

const ScrollChecker = () => {
  if (header.getBoundingClientRect().bottom <= 300) {
    Basic_Needs.classList.add("Basic_Needs_Active");
  } else if (header.getBoundingClientRect().bottom > window.innerHeight / 2) {
    Basic_Needs.classList.remove("Basic_Needs_Active");
  }

  clearTimeout(CheckerTimer);
};

function render() {
  //We calculate our container position by linear interpolation method
  dy = li(dy, sy, Force / 1000);

  dy = Math.floor(dy * 100) / 100;

  main.style.transform = `translateY(-${dy}px)`;

  if (header.getBoundingClientRect().bottom >= 0) {
    noodle.style.transform = `translateY(${
      -header.getBoundingClientRect().top / 2
    }px)`;
    cirle1.style.transform = `translateY(${
      -header.getBoundingClientRect().top / 3
    }px)`;
    cirle3.style.transform = `translateY(${
      header.getBoundingClientRect().top / 5
    }px)`;
  }

  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}
