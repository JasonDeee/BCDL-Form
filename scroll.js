//
//
// Hi There, Have a good day

const body = document.body;
const main = document.getElementById("main_scroll");
const background = document.querySelector(".background");

let sx = 0, // For scroll positions
  sy = 0;
let dx = sx, // For container positions And Force (Percentage 70% Recommended)
  dy = sy,
  Force = 70;

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
window.addEventListener("scroll", (e) => {
  easeScroll();
});

function easeScroll() {
  sy = window.pageYOffset;
}

window.requestAnimationFrame(render);

function render() {
  //We calculate our container position by linear interpolation method
  dy = li(dy, sy, Force / 1000);

  dy = Math.floor(dy * 100) / 100;

  if (window.innerWidth > 768) {
    background.style.transform = `translateY(-${dy / 6}px)`;

    main.style.transform = `translateY(-${dy}px)`;
  } else if (window.innerWidth < 768) {
    //
    background.style.transform = `translateY(-${dy / 40}px)`;

    main.style = ``;
  }

  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}
