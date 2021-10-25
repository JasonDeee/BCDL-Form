// Hello There. Just A Place For Transfering Some data User request.
// Have A Good Day!
// Requests Data Storage

const Form = document.querySelector("#SForm");
const submit_button = document.querySelector("#submit_button");
const loading = document.querySelector("#loading ");
// Entries Holder

const Gender = document.querySelector("#Gender");
const studentYear = document.querySelector("#studentYear");
const locations = document.querySelector("#locations");
const locationsOther = document.querySelector(
  '#locations input[type="text"][name="locations"]'
);
const regularly = document.querySelector("#regularly");
const regularlyOther = document.querySelector(
  '#regularly input[type="text"][name="regularly"]'
);
const self_serve = document.querySelector("#self_serve");
const feedtime = document.querySelector("#feedtime");
const howlong = document.querySelector("#howlong");
const howIsFood = document.querySelector("#howIsFood");
const howIsFoodOther = document.querySelector(
  '#howIsFood input[type="text"][name="howIsFood"]'
);
const makingstyle = document.querySelector("#makingstyle");
const makingstyleOther = document.querySelector(
  '#makingstyle input[type="text"][name="makingstyle"]'
);
const schedule = document.querySelector("#schedule");
const eatOut = document.querySelector("#eatOut");
const MoneyPay = document.querySelector("#MoneyPay");
const HowSafe = document.querySelector("#HowSafe");
const Reason = document.querySelector("#Reason");
const ReasonOther = document.querySelector(
  '#Reason input[type="text"][name="Reason"]'
);

// Entries Data Block
var GenderData = "",
  studentData = "",
  locationsData = "",
  locationsDataOther = "",
  regularData = "",
  regularDataOther = "",
  self_seData = "",
  feedtimData = "",
  howlongData = "",
  howIsFoData = "",
  howIsFoDataOther = "",
  makingsData = [],
  makingsDataOther = "",
  schedulData = "",
  eatOutData = "",
  MoneyPaData = "",
  HowSafeData = "",
  ReasonData = [],
  ReasonDataOther = "";

// Event Listener
Gender.addEventListener("click", (e) => {
  GenderData = document.querySelector(
    '#Gender input[name="Gender"]:checked'
  ).value;

  console.log(GenderData);
});
// Gender
studentYear.addEventListener("click", (e) => {
  studentData = document.querySelector(
    '#studentYear input[name="studentYear"]:checked'
  ).value;

  console.log(studentData);
});

//

locations.addEventListener("click", (e) => {
  locationsData = document.querySelector(
    '#locations input[name="locations"]:checked'
  ).value;

  console.log(locationsData);
});

locationsOther.addEventListener("focusin", (e) => {
  var locationsDataA = document.querySelector(
    '#locations input[name="locations"]:checked'
  );
  locationsDataA.checked = false;

  locationsData = "";
  console.log(locationsDataOther);
});

locationsOther.addEventListener("change", (e) => {
  locationsDataOther = document.querySelector(
    '#locations input[type="text"][name="locations"]:valid'
  ).value;
  console.log(locationsDataOther);
});
//
//
regularly.addEventListener("click", (e) => {
  regularData = document.querySelector(
    '#regularly input[name="regularly"]:checked'
  ).value;

  console.log(regularData);
});

regularlyOther.addEventListener("focusin", (e) => {
  var regularDataOtherA = document.querySelector(
    '#regularly input[name="regularly"]:checked'
  );
  regularDataOtherA.checked = false;

  regularData = "";
  console.log(regularDataOther);
});

regularlyOther.addEventListener("change", (e) => {
  regularDataOther =
    " " +
    document.querySelector(
      '#regularly input[type="text"][name="regularly"]:valid'
    ).value;
  console.log(regularDataOther);
});

//  self_serve;
self_serve.addEventListener("click", (e) => {
  self_seData = document.querySelector(
    '#self_serve input[name="self_serve"]:checked'
  ).value;

  console.log(self_seData);
});
//feedtime
feedtime.addEventListener("click", (e) => {
  feedtimData = document.querySelector(
    '#feedtime input[name="feedtime"]:checked'
  ).value;

  console.log(feedtimData);
});

//howlong
howlong.addEventListener("click", (e) => {
  howlongData = document.querySelector(
    '#howlong input[name="howlong"]:checked'
  ).value;

  console.log(howlongData);
});

// howIsFood

howIsFood.addEventListener("click", (e) => {
  howIsFoData = document.querySelector(
    '#howIsFood input[name="howIsFood"]:checked'
  ).value;

  console.log(howIsFoData);
});

howIsFoodOther.addEventListener("focusin", (e) => {
  var howIsFoDataOtherA = document.querySelector(
    '#howIsFood input[name="howIsFood"]:checked'
  );
  howIsFoDataOtherA.checked = false;

  howIsFoData = "";
  console.log(howIsFoDataOther);
});

howIsFoodOther.addEventListener("change", (e) => {
  howIsFoDataOther =
    " " +
    document.querySelector(
      '#howIsFood input[type="text"][name="howIsFood"]:valid'
    ).value;
  console.log(howIsFoDataOther);
});

// makingstyle

makingstyle.addEventListener("click", (e) => {
  let makingsDataAr = document.querySelectorAll(
    '#makingstyle input[name="makingstyle"]:checked'
  );
  for (let index = 0; index < makingsDataAr.length; index++) {
    makingsData[index] = makingsDataAr[index].value;
  }
  console.log(makingsData.join(", "));
});

makingstyleOther.addEventListener("change", (e) => {
  makingsDataOther = document.querySelector(
    '#makingstyle input[type="text"][name="makingstyle"]:valid'
  ).value;
  console.log(makingsDataOther);
});

//schedule

schedule.addEventListener("click", (e) => {
  schedulData = document.querySelector(
    '#schedule input[name="schedule"]:checked'
  ).value;

  console.log(schedulData);
});
//eatOut

eatOut.addEventListener("click", (e) => {
  eatOutData = document.querySelector(
    '#eatOut input[name="eatOut"]:checked'
  ).value;

  console.log(eatOutData);
});

// MoneyPay
MoneyPay.addEventListener("click", (e) => {
  MoneyPaData = document.querySelector(
    '#MoneyPay input[name="MoneyPay"]:checked'
  ).value;

  console.log(MoneyPaData);
});
// HowSafe

HowSafe.addEventListener("click", (e) => {
  HowSafeData = document.querySelector(
    '#HowSafe input[name="HowSafe"]:checked'
  ).value;

  console.log(HowSafeData);
});

// Reason

Reason.addEventListener("click", (e) => {
  let ReasonDataArr = document.querySelectorAll(
    '#Reason input[name="Reason"]:checked'
  );
  for (let index = 0; index < ReasonDataArr.length; index++) {
    ReasonData[index] = ReasonDataArr[index].value;
  }
  console.log(ReasonData.join(", "));
});

ReasonOther.addEventListener("change", (e) => {
  ReasonDataOther = document.querySelector(
    '#Reason input[type="text"][name="Reason"]:valid'
  ).value;
  console.log(ReasonDataOther);
});

//

submit_button.addEventListener(
  "click",
  (e) => {
    e.preventDefault();

    // Init Data Values
    let dataEntry = {
      "entry.789328724": studentData,
      "entry.1421145170": locationsData + locationsDataOther,
      "entry.2023848338": regularData + regularDataOther,
      "entry.1544109005": self_seData,
      "entry.1574580861": feedtimData,
      "entry.2118881343": howlongData,
      "entry.661236967": howIsFoData + howIsFoDataOther,
      "entry.1769248607": makingsData.join(", ") + makingsDataOther,
      "entry.1261103475": schedulData,
      "entry.2142570847": eatOutData,
      "entry.851285011": MoneyPaData,
      "entry.830879642": HowSafeData,
      "entry.857702557": ReasonData.join(", ") + ReasonDataOther,
      "entry.599384502": GenderData,
    };

    let dataEntryParams = new URLSearchParams(dataEntry);
    let DataEntryString = dataEntryParams.toString();

    // Push Data Values
    var dataPush = new XMLHttpRequest();
    dataPush.open(
      "POST",
      "https://docs.google.com/forms/u/2/d/e/1FAIpQLSe_sGqnv1cR7xzHfpe7o6bu2mSJI93PWXs6J9siIOKQF0JnZg/formResponse",
      true
    );

    dataPush.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );

    console.log(DataEntryString);
    dataPush.send(DataEntryString);
    console.log("pushed");

    loading.style.display = `block`;
    submit_button.style.color = `transparent`;
    var redirect = setTimeout(() => {
      (window.location.href = "./ThankYou"), console.log(isMobile);
      clearTimeout(redirect);
    }, 3500);
  },
  { once: true }
);
