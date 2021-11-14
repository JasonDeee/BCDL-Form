//
// Đmẹ! chọn 3 số random khác nhau max = Val
// Nhìn ngu vcl.
const GetThreeNewRandom = (val) => {
  let a = Math.floor(Math.random() * val),
    b = Math.floor(Math.random() * val),
    c = Math.floor(Math.random() * val);
  if (a != b && a != c && b != c) {
    return [a, b, c];
  } else {
    return GetThreeNewRandom(val);
  }
};
//
//

//
//

//
// Spinner Init
const Spinner_Ico_Head = document.querySelectorAll(
  "#Spinner_Section .Icons_Group #Head"
);
const Spinner_Ico_Tail = document.querySelectorAll(
  "#Spinner_Section .Icons_Group #Tail"
);

const Spinner_Ico = [
  Spinner_Ico_Head[0],
  Spinner_Ico_Head[1],
  Spinner_Ico_Tail[2],
  Spinner_Ico_Tail[0],
  Spinner_Ico_Tail[1],
  Spinner_Ico_Head[2],
];
//

//
var Ingredients_HTTP = new XMLHttpRequest(),
  Tips_HTTP = new XMLHttpRequest(),
  Ingredients = ["", "", ""],
  Tips = ["", "", ""],
  IngredientsIntit,
  TipsInit;

Ingredients_HTTP.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    //
    var Ingredients_UnSign = JSON.parse(Ingredients_HTTP.responseText);

    IngredientsIntit = () => {
      // Get 3 Random Item From Ingredients
      let newThree = GetThreeNewRandom(Ingredients_UnSign.length);

      for (let index = 0; index < Ingredients.length; index++) {
        Ingredients[index] = Ingredients_UnSign[newThree[index]];
      }
      console.log(Ingredients);
    };
    IngredientsIntit();
    ValuePass();
  }
};
Tips_HTTP.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var Tips_Unsign = JSON.parse(Tips_HTTP.responseText);
    // Typical action to be performed when the document is ready:
    //
    TipsInit = () => {
      let newThree = GetThreeNewRandom(Tips_Unsign.length);

      for (let index = 0; index < Ingredients.length; index++) {
        Tips[index] = Tips_Unsign[newThree[index]];
      }
      console.log(Tips);
    };
    TipsInit();
    ValuePass();
  }
};
// Spinner Decor Circle
// Function OnCall
Ingredients_HTTP.open("GET", "Ingredients.json", true);
Ingredients_HTTP.send();

Tips_HTTP.open("GET", "Tips.json", true);
Tips_HTTP.send();
//
//
var RewardList;
const ValuePass = () => {
  for (let index = 0; index < Spinner_Ico_Head.length; index++) {
    Spinner_Ico_Head[
      index
    ].style.backgroundImage = `url(./Vectors/${Ingredients[index].Icon})`;
    Spinner_Ico_Tail[
      index
    ].style.backgroundImage = `url(./Vectors/${Tips[index].Icon})`;
  }

  RewardList = [
    Ingredients[0],
    Ingredients[1],
    Tips[2],
    Tips[0],
    Tips[1],
    Ingredients[2],
  ];
};
//

// Choose The "Winner"
const Spinner_Rotate = document.querySelector("#Spinner_Section .Icons_Group");
const Spinner_Rotate2 = document.querySelector("#Spinner_Section .Line_Group");
const Result_Board_h5 = document.querySelector(
  "#Spinner_Section .Spinner_Result h5"
);
const Result_Board_h2 = document.querySelector(
  "#Spinner_Section .Spinner_Result h2"
);
const Result_Board_ul = document.querySelector(
  "#Spinner_Section .Spinner_Result ul"
);
//
const RewardSelect = () => {
  let IndexResult = Math.round(Math.random() * 5),
    scaleVal = Math.floor(Math.random() * 10) + 3;

  var ContentTimer = setTimeout(() => {
    Result_Board_ul.innerHTML = ``;

    switch (IndexResult) {
      case 0:
      case 1:
      case 5:
        // code block
        Result_Board_h5.textContent = `Ấu Yềah, một công thức, thật ngon miệng nhé!`;
        Spinner_Ico[IndexResult].style.transform = `rotate(180deg)`;
        //
        break;
      case 4:
      case 3:
      case 2:
        // code block
        Spinner_Ico[IndexResult].style.transform = `rotate(0)`;

        Result_Board_h5.textContent = `Ấu Yềah, một mẹo để nấu, bí mật nhé!`;

        break;
      default:
        Result_Board_h5.textContent = ``;
    }
    Result_Board_h2.textContent = `${RewardList[IndexResult].name}`;
    for (
      let index = 0;
      index < RewardList[IndexResult].Description.length;
      index++
    ) {
      Result_Board_ul.innerHTML += `<li>${RewardList[IndexResult].Description[index]}</li>`;
    }
    clearTimeout(ContentTimer);
    console.log(RewardList[IndexResult]);
  }, 1111);

  Spinner_Rotate.style.transform = `rotate(${
    -60 * IndexResult + scaleVal * 360 + 180
  }deg)`;

  Spinner_Rotate2.style.transform = `rotate(${
    -60 * IndexResult + scaleVal * 360 + 180
  }deg)`;
  console.log(IndexResult + 1);
};
//

//
const Spinner_Section = document.querySelector("#Spinner_Section");
const Spinner_Button = document.querySelector("#Spinner_Section #Spin_But");
const Spinner_Second_Button = document.querySelector(
  "#Spinner_Section #Spin_But2"
);

const SpinnerC1 = document.querySelector("#Spinner_Section #SpinnerC1");
const SpinnerC2 = document.querySelector("#Spinner_Section #SpinnerC2");
const SpinnerC3 = document.querySelector("#Spinner_Section #SpinnerC3");

const SpinnerCircleReact = (e) => {
  let offsetX = e.pageX - window.innerWidth / 2,
    offsetY =
      e.pageY -
      window.scrollY -
      Spinner_Section.getBoundingClientRect().height / 2;

  SpinnerC1.style.transform = `translateX(${-offsetX / 8}px) translateY(${
    -offsetY / 6
  }px)`;
  SpinnerC2.style.transform = `translateX(${-offsetX / 40}px) translateY(${
    -offsetY / 40
  }px)`;
  SpinnerC3.style.transform = `translateX(${offsetX / 5}px) translateY(${
    offsetY / 4
  }px)`;
};

const SpinnerClicked = () => {
  console.log("Spinner Clicked");
  Spinner_Main.classList.add("Spinner_Spinning");
  Spinner_Main.classList.remove("Spinner_Final");
  RewardSelect();

  var Finish_Timer = setTimeout(() => {
    Spinner_Main.classList.remove("Spinner_Spinning");
    Spinner_Main.classList.add("Spinner_Final");
    clearTimeout(Finish_Timer);
  }, 8000);
};
function Spinner2Clicked() {
  TipsInit();
  IngredientsIntit();
  ValuePass();

  SpinnerClicked();
}
Spinner_Section.addEventListener("mousemove", SpinnerCircleReact);
Spinner_Button.addEventListener("click", SpinnerClicked);
Spinner_Second_Button.addEventListener("click", Spinner2Clicked);
