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
//

const wheelValidate = (e) => {
  var isTouchPad = e.wheelDeltaY
    ? e.wheelDeltaY === -3 * e.deltaY
    : e.deltaMode === 0;

  Force = isTouchPad ? 800 : 77;
};

const touch = () => {
  Force = 800;
};
//

window.addEventListener("wheel", wheelValidate);
window.addEventListener("touchstart", touch);

// Onpage Load And Refresh Events

body.style.height = main.clientHeight + "px";

ResetPage();

window.addEventListener("beforeunload", (e) => {
  ResetPage();
  ScrollResize();
});

function ResetPage() {
  window.scrollTo(0, 0);

  body.scrollTo(0, 0);
  main.style = ``;
}

function ScrollResize() {
  let bodyHeight = main.getBoundingClientRect().height;
  body.style.height = `${bodyHeight}px`;
  easeScroll();

  var resizetime = setTimeout(() => {
    bodyHeight = Math.floor(main.getBoundingClientRect().height);
    body.style.height = `${bodyHeight}px`;
    easeScroll();

    clearTimeout(resizetime);
  }, 1222);
}
ScrollResize();
window.addEventListener("resize", ScrollResize);

//
// Momentum Scrolling
var CheckerTimer;
// Scroll Functions
var ES = window.addEventListener("scroll", () => {
  easeScroll();
  clearTimeout(CheckerTimer);
  ScrollChecker();

  //
  CheckerTimer = setTimeout(ScrollChecker, 888);
});

function easeScroll() {
  sy = window.pageYOffset;
}

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
  element.style.transition = `width 0.8s ${
    index * 0.15
  }s cubic-bezier(0.25, 0, 0, 1)`;
  if (index === Need.length - 1) {
    break;
  }
}

// Sec2 Animation
//
// Title OnScroll
const Title = document.querySelector("#Sec2 .Title_Box");
const Title_Box = document.querySelector("#Sec2 .Title_Box h2");

const Title_Box_ContentArr = Title_Box.innerText.split("");
Title_Box.innerHTML = ``;

for (let index = 0; index < Title_Box_ContentArr.length; index++) {
  if (Title_Box_ContentArr[index] == " ") {
    Title_Box_ContentArr[index] = "&nbsp;";
  }

  Title_Box.innerHTML += `<span style="transition: all 0.8s ${
    index / 50
  }s cubic-bezier(0.25, 0, 0, 1);">${Title_Box_ContentArr[index]}</span>`;

  if (index == Title_Box_ContentArr.length - 1) {
    break;
  }
}
//
// Sec 3 Scroll Animate
const sec3 = document.querySelector("#Sec3");
const sec3Swicth = document.querySelector("#Sec3 .row");

const Sec3_Active = () => {
  sec3Swicth.classList.remove("sec3Pending");
};
const Sec3_DeActive = () => {
  sec3Swicth.classList = "row sec3Pending";
};
//
//
// Sec 4 Scroll Animate
const sec4 = document.querySelector("#Sec4");
const sec4Swicth = document.querySelector("#Sec4 .row");

const Sec4_Active = () => {
  sec4Swicth.classList.remove("sec4Pending");
};
const Sec4_DeActive = () => {
  sec4Swicth.classList = "row sec4Pending";
};
//
//
// Sec 6 Scroll Animate
const sec6 = document.querySelector("#sec6");
const sec6Swich = document.querySelector("#sec6 .row");
const sec6STitle = document.querySelector("#sec6 .row .Content_sec6 h2");

const sec6STitleArr = sec6STitle.innerText.split("");
sec6STitle.innerHTML = ``;

for (let index = 0; index < sec6STitleArr.length; index++) {
  let element = sec6STitleArr[index];

  if (element == " ") {
    element = "&nbsp;";
  }

  sec6STitle.innerHTML += `<span style="transition: all 0.8s ${
    index / 10
  }s cubic-bezier(0.25, 0, 0, 1)">${element}</span>`;

  if (index >= sec6STitleArr.length - 1) {
    break;
  }
}

const Sec6_Active = () => {
  sec6Swich.classList.remove("sec6Pending");
};
const Sec6_DeActive = () => {
  sec6Swich.classList = "row sec6Pending";
};
//
//
// Spinner AOS
const Spinner_Section_S = document.querySelector("#Spinner_Section");
const Spinner_Main = document.querySelector("#Spinner_Section .Spinner_Main");

const Spinner_S_Active = () => {
  Spinner_Main.classList.remove("Spinner_pending");
};
const Spinner_S_DeActive = () => {
  Spinner_Main.classList.add("Spinner_pending");
};

// Final Function
const ScrollChecker = () => {
  // Header Section Checker
  if (header.getBoundingClientRect().bottom <= 300) {
    Basic_Needs.classList.add("Basic_Needs_Active");
  } else if (header.getBoundingClientRect().bottom > window.innerHeight / 2) {
    Basic_Needs.classList.remove("Basic_Needs_Active");
  }
  //
  // Sec2 Title Checker
  if (Title_Box.getBoundingClientRect().top - window.innerHeight <= 0) {
    Title.classList.add("Title_Box_Active");
  } else if (
    Title_Box.getBoundingClientRect().top + window.innerHeight / 3 >
    0
  ) {
    Title.classList = "Title_Box";
  }
  //
  // Sec 3 Scroll Animate
  if (sec3.getBoundingClientRect().top <= window.innerHeight / 3) {
    Sec3_Active();
  } else if (sec3.getBoundingClientRect().top > window.innerHeight * 1.3) {
    Sec3_DeActive();
  }

  //
  // Sec 4 Scroll Animate
  if (sec4.getBoundingClientRect().top <= (window.innerHeight * 2) / 3) {
    Sec4_Active();
  } else if (sec4.getBoundingClientRect().top > window.innerHeight * 1.3) {
    Sec4_DeActive();
  }

  //
  // Sec 6 Scroll Animate
  if (sec6.getBoundingClientRect().top <= window.innerHeight / 3) {
    Sec6_Active();
  } else if (sec6.getBoundingClientRect().top > window.innerHeight * 1.3) {
    Sec6_DeActive();
  }
  //
  // Spinner AOS
  if (Spinner_Section_S.getBoundingClientRect().top <= window.innerHeight / 2) {
    Spinner_S_Active();
  } else if (
    Spinner_Section_S.getBoundingClientRect().top >
    window.innerHeight * 1.3
  ) {
    Spinner_S_DeActive();
  }

  // Cleat Timer
  clearTimeout(CheckerTimer);
};
//
// linear interpolation Formula
function li(a, b, n) {
  return (1 - n) * a + n * b;
}

function render() {
  //We calculate our container position by linear interpolation method
  dy = li(dy, sy, Force / 1000);

  dy = Math.floor(dy * 100) / 100;

  main.style.transform = `translateY(-${dy}px)`;

  if (header.getBoundingClientRect().bottom >= 0) {
    noodle.style.transform = `translateY(${
      -header.getBoundingClientRect().top / 1.8
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
window.requestAnimationFrame(render);
