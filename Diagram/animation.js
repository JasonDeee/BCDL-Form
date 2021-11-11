//
// Sec2 3d Reaction
const ThreeD_layout = document.querySelector(".ThreeD_layout");
const Sec2ThreeD_Title = document.querySelector(".ThreeD_layout .Title_Box");
const BlurSec2 = document.querySelector(".ThreeD_layout #Sec2_Blur");
const FemaleSec2 = document.querySelector(".ThreeD_layout #Female ");
const MaleSec2 = document.querySelector(".ThreeD_layout #Male");

const Sec2ThreeD_layout = (e) => {
  if (e.pageX < window.innerWidth / 3) {
    ThreeD_layout.classList = "ThreeD_layout Female_Focus";
  } else if (e.pageX > (2 * window.innerWidth) / 3) {
    ThreeD_layout.classList = "ThreeD_layout Male_Focus";
  } else if (
    e.pageX >= window.innerWidth / 3 &&
    e.pageX <= (2 * window.innerWidth) / 3
  ) {
    ThreeD_layout.classList = "ThreeD_layout";
  }

  BlurSec2.style.transform = `rotateY(${
    -(e.pageX - window.innerWidth / 2) / 35
  }deg) rotateX(${
    -(
      e.pageY -
      window.scrollY -
      (ThreeD_layout.getBoundingClientRect().top +
        ThreeD_layout.getBoundingClientRect().height / 2)
    ) / 20
  }deg) translateZ(-7vw)`;

  Sec2ThreeD_Title.style.transform = `rotateY(${
    -(e.pageX - window.innerWidth / 2) / 35
  }deg) rotateX(${
    -(
      e.pageY -
      window.scrollY -
      (ThreeD_layout.getBoundingClientRect().top +
        ThreeD_layout.getBoundingClientRect().height / 2)
    ) / 20
  }deg) translateZ(14vw)`;
};

const Sec2ThreeD_layout_leave = () => {
  BlurSec2.style = ``;

  Sec2ThreeD_Title.style = ``;
  ThreeD_layout.classList = "ThreeD_layout";
};

ThreeD_layout.addEventListener("mousemove", Sec2ThreeD_layout);
ThreeD_layout.addEventListener("mouseleave", Sec2ThreeD_layout_leave);

//
//
// Sec3 - Percent Animation

const sec3_Motel = document.querySelector("#Sec3 #sec3Bl1");
const sec3_Home = document.querySelector("#Sec3 #sec3Bl2");

const sec3_Motel_Percent = document.querySelector("#Sec3 #sec3Bl1 h3");
const sec3_Home_Percent = document.querySelector("#Sec3 #sec3Bl2 h3");

var MotelPercent = 0,
  HomePercent = 0,
  MotelInterval,
  HomeInterval;

const sec3_Motel_Enter = () => {
  clearInterval(MotelInterval);
  sec3_Motel_Percent.innerHTML = MotelPercent;

  MotelInterval = setInterval(() => {
    MotelPercent++;
    sec3_Motel_Percent.innerHTML = MotelPercent;

    if (MotelPercent >= 64) {
      clearInterval(MotelInterval);
      MotelPercent = 0;
    }
  }, 19);
};

const sec3_Motel_Leave = () => {
  clearInterval(MotelInterval);
  MotelPercent = 0;
};

//
const sec3_Home_Enter = () => {
  clearInterval(HomeInterval);
  sec3_Home_Percent.innerHTML = HomePercent;

  HomeInterval = setInterval(() => {
    HomePercent++;
    sec3_Home_Percent.innerHTML = HomePercent;

    if (HomePercent >= 80) {
      clearInterval(HomeInterval);
      HomePercent = 0;
    }
  }, 16);
};

const sec3_Home_Leave = () => {
  clearInterval(HomeInterval);
  HomePercent = 0;
};

sec3_Motel.addEventListener("mouseenter", sec3_Motel_Enter);
sec3_Motel.addEventListener("mouseleave", sec3_Motel_Leave);

sec3_Home.addEventListener("mouseenter", sec3_Home_Enter);
sec3_Home.addEventListener("mouseleave", sec3_Home_Leave);

// Sec 4 onHover Animation

const sec4_row = document.querySelector("#Sec4 .row");
const sec4_F_year = document.querySelector("#Sec4 .row #F_year");
const sec4_O_year = document.querySelector("#Sec4 .row #O_year");

const sec4_F_year_Enter = () => {
  sec4_row.classList.add("row_F_Active");
};
const sec4_O_year_Enter = () => {
  sec4_row.classList.add("row_O_Active");
};

const sec4_F_year_Leave = () => {
  sec4_row.classList.remove("row_F_Active");
};
const sec4_O_year_Leave = () => {
  sec4_row.classList.remove("row_O_Active");
};

sec4_F_year.addEventListener("mouseenter", sec4_F_year_Enter);
sec4_O_year.addEventListener("mouseenter", sec4_O_year_Enter);

sec4_F_year.addEventListener("mouseleave", sec4_F_year_Leave);
sec4_O_year.addEventListener("mouseleave", sec4_O_year_Leave);
