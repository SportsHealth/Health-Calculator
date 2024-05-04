console.log("Connected");
//TODO: Grab the DOM elements
let centimeterBox = document.getElementById("centimeterBox");
let inchBox = document.getElementById("inchBox");

let heightRadios = document.querySelectorAll("input[name='heightType']");
//let inputAge = document.getElementById("inputAge");
let inputWeight = document.getElementById("inputWeight");
let inputCentimeter = document.getElementById("inputCentimeter");

//초등학교, 반, 번호
//let inputEName = document.getElementById("inputEName");
let inputSchollClass = document.getElementById("inputSchollClass");
let inputSchollClassNum = document.getElementById("inputSchollClassNum");

//오래달리기
let inputRoundRun = document.getElementById("inputRoundRun");
//오래달리기걷기
let inputlongrun = document.getElementById("inputlongrun");

//스탭검사
let inputstep1 = document.getElementById("inputstep1");
let inputstep2 = document.getElementById("inputstep2");
let inputstep3 = document.getElementById("inputstep3");

//앞으로 굽히기
let inputRbending = document.getElementById("inputRbending");
let inputLbending = document.getElementById("inputLbending");

//팔굽혀펴기
let inputpushup = document.getElementById("inputpushup");
//윗몸 말아올리기
let inputUpperbody = document.getElementById("inputUpperbody");

//악력
let R_grip_1 = document.getElementById("R_grip_1");
let R_grip_2 = document.getElementById("R_grip_2");
let L_grip_1 = document.getElementById("L_grip_1");
let L_grip_2 = document.getElementById("L_grip_2");

//50M달리기
let input50mrun = document.getElementById("input50mrun");
//제자리 멀리뛰기
let jumpmeter = document.getElementById("inputjumpmeter");

let InputInch = document.getElementById("InputInch");
let inputFoot = document.getElementById("inputFoot");

let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

//todo: 실제 진행한 측정종목들 선택하기
// 심폐지구력 종목
let Check_Endurance = document.getElementById("Check_Endurance");
function Change_Endurance() {
  if (Check_Endurance.value == 1) {
    enduranceSection1.style.display = "block";
    enduranceSection2.style.display = "none";
    enduranceSection3.style.display = "none";
  } else if (Check_Endurance.value == 2) {
    enduranceSection1.style.display = "none";
    enduranceSection2.style.display = "block";
    enduranceSection3.style.display = "none";
  } else {
    enduranceSection1.style.display = "none";
    enduranceSection2.style.display = "none";
    enduranceSection3.style.display = "block";
  }
}
// 유연성 종목
let Check_Flexibility = document.getElementById("Check_Flexibility");
function Change_Flexibility() {
  if (Check_Flexibility.value == 1) {
    RbendingSection1.style.display = "block";
    RbendingSection2.style.display = "none";
    LbendingSection1.style.display = "block";
    LbendingSection2.style.display = "none";
  } else {
    RbendingSection1.style.display = "none";
    RbendingSection2.style.display = "block";
    LbendingSection1.style.display = "none";
    LbendingSection2.style.display = "block";
  }
}

// 근력근지구력 종목
let Check_Muscular = document.getElementById("Check_Muscular");
function Change_Muscular() {
  if (Check_Muscular.value == 1) {
    pushupSection.style.display = "block";
    UpperBodySection.style.display = "none";
    GripSection.style.display = "none";
  } else if (Check_Muscular.value == 3) {
    pushupSection.style.display = "none";
    UpperBodySection.style.display = "none";
    GripSection.style.display = "block";
  } else {
    pushupSection.style.display = "none";
    UpperBodySection.style.display = "block";
    GripSection.style.display = "none";
  }
}

// 근력근지구력 종목
let Check_Alacrity = document.getElementById("Check_Alacrity");
function Change_Alacrity() {
  if (Check_Alacrity.value == 2) {
    RunSection.style.display = "none";
    jumpmeterSection.style.display = "block";
  } else {
    RunSection.style.display = "block";
    jumpmeterSection.style.display = "none";
  }
}

//todo: 학년을 기준으로 추가 항목 생성하기
let inputSchollYear = document.getElementById("inputSchollYear");

function changeSchollYear() {
  if (inputSchollYear.value >= 4) {
    //Check_Endurance.style.display = "block";
    //RbendingSection.style.display = "block";
    document.getElementById("Check_Endurance_1").style.display = "block";
    document.getElementById("Check_Flexibility_1").style.display = "block";
    document.getElementById("Check_Muscular_1").style.display = "block";
  }
}

//TODO: Make a ifelse statement for the + Settings button to give the user more controlls
/*
let settingsBtn = document.getElementById("settingsBtn");
let settingSection = document.getElementById("settingSection");
settingsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (settingSection.style.display === "none") {
    settingSection.style.display = "block";
    settingsBtn.innerHTML = "<i class='fa fa-minus'></i> Settings";
  } else {
    settingSection.style.display = "none";
    settingsBtn.innerHTML = "<i class='fa fa-plus'></i> Settings";
  }
});
*/
//TODO: Hide the intro alert after several minutes
let introAlert = document.getElementById("introAlert");
setTimeout(() => {
  introAlert.classList.add("hide");
  introAlert.classList.remove("show");
  introAlert.classList.add("d-none");
}, 5000);
//TODO: When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
  scrollFunction();
};

//TODO: Scroll top button
let topBtn = document.getElementById("topBtn");

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
topBtn.addEventListener("click", () => {
  goTop();
});

let click = 0;
//TODO: Dark mode
function darkMode() {
  if (click === 0) {
    click = 1;
  } else {
    click = 0;
  }
  var element = document.body;
  var element2 = document.querySelectorAll(".card");
  var element3 = document.querySelectorAll(".card-body");
  var h6s = document.querySelectorAll("h6");
  var h5s = document.querySelectorAll("h5");
  var h4s = document.querySelectorAll("h4");
  var inputs = document.querySelectorAll(".form-control");
  var anchors = document.querySelectorAll("a");
  var labels = document.querySelectorAll("label");
  var selects = document.querySelectorAll("select");
  var spans = document.querySelectorAll("span");
  var uls = document.querySelectorAll("ul");
  var lis = document.querySelectorAll(".list-group-item");
  var navs = document.querySelectorAll("nav");
  var textMuted = document.querySelectorAll(".text-muted");
  //최종보고서 id
  let resultBox = document.getElementById("resultBox");
  //var table = document.querySelector("table");
  //table.classList.toggle("text-white");
  if (
    element.classList.toggle("bg-dark") &&
    element.classList.toggle("text-white")
  ) {
    for (const text of textMuted) {
      text.classList.remove("text-muted");
    }
  }
  for (const card of element2) {
    card.classList.toggle("bg-dark");
    card.classList.toggle("text-white");
  }
  for (const h5 of h5s) {
    h5.classList.toggle("text-white");
    h5.classList.toggle("bg-dark");
  }
  for (const cardBody of element3) {
    cardBody.classList.toggle("bg-dark");
    cardBody.classList.toggle("text-white");
  }
  for (const nav of navs) {
    nav.classList.toggle("bg-dark");
    nav.classList.toggle("navbar-dark");
  }
  for (const li of lis) {
    li.classList.toggle("bg-dark");
    li.classList.toggle("text-white");
  }
  for (const h4 of h4s) {
    h4.classList.toggle("bg-dark");
    h4.classList.toggle("text-white");
  }
  for (const anchor of anchors) {
    anchor.classList.toggle("text-primary");
  }
  for (const input of inputs) {
    input.classList.toggle("text-white");
    input.classList.toggle("bg-dark");
  }
  for (const select of selects) {
    select.classList.toggle("text-white");
    select.classList.toggle("bg-dark");
  }
  for (const span of spans) {
    span.classList.toggle("text-white");
    span.classList.toggle("bg-dark");
  }
  for (const label of labels) {
    label.classList.toggle("text-white");
    label.classList.toggle("bg-dark");
  }
  for (const ul of uls) {
    ul.classList.toggle("text-white");
    ul.classList.toggle("bg-dark");
  }
  if (click === 1) {
    document.body.classList.add("text-black");
  }
}

//TODO: Copy Calorie Result
function copyCalorie() {
  /* Get the text field */
  var copyText = document.getElementById("calorieResult");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

//TODO: show to height input box according to height measuring type
for (const item of heightRadios) {
  item.addEventListener("click", (e) => {
    if (e.target.value === "centimeter") {
      //inchBox.style.display = "none";
      centimeterBox.style.display = "block";
    } else if (e.target.value === "inches&foot") {
      //inchBox.style.display = "block";
      centimeterBox.style.display = "none";
    }
  });
}

//TODO: Add a event listener to every button to prevent the page load
// let buttons = document.getElementsByTagName('button');
// for (const button of buttons) {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//     })
// }

//TODO: Add event listener to calculate button. when user click the calculate button this calculate funtion will run.
calculate.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "#result";
  calculateHealth();
});

// !Calculate function
//TODO: Add a calculte function for calculate the health states and needs.
function calculateHealth() {
  let heightType = document.querySelector(
    "input[name='heightType']:checked"
  ).value;
  let calculateItemChecked = document.querySelector(
    "input[name='calculate']:checked"
  ).value;
  //let age = Number(inputAge.value); //나이측정 삭제로 인한 주석처리
  let weight = Number(inputWeight.value);
  let gender = document.querySelector("input[name='gender']:checked").value;

  //학교, 학년, 반, 번호
  //let EName = String(inputEName.value);
  let SchollYear = Number(inputSchollYear.value);
  let SchollClass = Number(inputSchollClass.value);
  let age = SchollClass + 7;
  let SchollClassNum = Number(inputSchollClassNum.value);

  //종합유연성
  let Rbending = Number(inputRbending.value).toFixed(1);
  let Lbending = Number(inputLbending.value).toFixed(1);

  let R_Shoulder = document.querySelector(
    "input[name='RShoulder']:checked"
  ).value;
  let R_body = document.querySelector("input[name='Rbody']:checked").value;
  let R_Side = document.querySelector("input[name='RSide']:checked").value;
  let R_Lower = document.querySelector("input[name='RLower']:checked").value;

  let L_Shoulder = document.querySelector(
    "input[name='LShoulder']:checked"
  ).value;
  let L_body = document.querySelector("input[name='Lbody']:checked").value;
  let L_Side = document.querySelector("input[name='LSide']:checked").value;
  let L_Lower = document.querySelector("input[name='LLower']:checked").value;

  //평가종목
  let longrun = Number(inputlongrun.value);
  let step1 = Number(inputstep1.value);
  let step2 = Number(inputstep2.value);
  let step3 = Number(inputstep3.value);

  let RoundRun = Number(inputRoundRun.value);
  let pushup = Number(inputpushup.value);
  let Upperbody = Number(inputUpperbody.value);

  let RR_grip_1 = Number(R_grip_1.value);
  let RR_grip_2 = Number(R_grip_2.value);
  let LL_grip_1 = Number(L_grip_1.value);
  let LL_grip_2 = Number(L_grip_2.value);

  let run50m = Number(input50mrun.value).toFixed(2);
  let jumpingmeter = Number(jumpmeter.value).toFixed(1);

  //let physicalState = document.getElementById("physicalState").value;
  let height;
  //Convert Inches to centimeter for get the height in cm scale
  if (heightType === "centimeter") {
    let centimeter = Number(inputCentimeter.value);
    height = centimeter;
  } else {
    console.log("You used inch section");
    let foot = Number(inputFoot.value);
    let inches = Number(inputInch.value);
    let totalInches = Number(foot * 12 + inches);
    let convertToCentimeter = Number(totalInches * 2.54);
    console.log(foot, inches, totalInches, convertToCentimeter);
    height = convertToCentimeter;
  }

  console.log(
    `Height ${height}, Weight ${weight}, Age ${age}, gender ${gender},
    SchollYear ${SchollYear},SchollClass ${SchollClass},SchollClassNum ${SchollClassNum},
    inputlongrun ${longrun},
    step1 ${step1},step2 ${step2},step3 ${step3},
    R_Shoulder ${R_Shoulder},R_body ${R_body},R_Side ${R_Side},R_Lower ${R_Lower},
    L_Shoulder ${L_Shoulder},L_body ${L_body},L_Side ${L_Side},L_Lower ${L_Lower},
    inputRbending ${Rbending},inputLbending ${Lbending},
    inputpushup ${pushup},inputUpperbody ${Upperbody},inputRoundRun ${RoundRun},
    R_grip_1 ${RR_grip_1},R_grip_2 ${RR_grip_2},L_grip_1 ${LL_grip_1},L_grip_2 ${LL_grip_2},
    run50m ${run50m},jumpmeter ${jumpingmeter},
    `
  );
  //TODO: Add a verification for calculation

  if (
    age == 0 ||
    height == null ||
    height === undefined ||
    weight == 0 ||
    SchollYear == 0 ||
    SchollClass == 0 ||
    SchollClassNum == 0
  ) {
    errorAlert.style.display = "block";
    successAlert.style.display = "none";
    result.innerHTML = `
        <div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>`;
    setTimeout(() => {
      result.innerHTML = `
            <h5 class="alert alert-danger d-block  font-weight-semi bolder text-center">404 Error <i class="fa fa-exclamation-circle"></i> <br> No values has been given</h5>`;
    }, 5000);
  }
  //! When all values is correct
  else {
    // !Calculate BMR (Heris BeneDict law)
    //According to gender
    let BMR;
    let calories;
    let kilojoules;
    let icon;
    if (gender === "male") {
      BMR = `${66 + 13.7 * weight + 5 * height - 6.8 * age}`;
      icon = "male";
    } else {
      BMR = `${655 + 9.6 * weight + 1.8 * height - 4.7 * age}`;
      icon = "female";
    }
    console.log(`Your BMR ${BMR}`);

    //왕복오래 달리기 기준표

    var score_roundrun = [
      20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ];

    var s_m_roundrun_4 = [
      150, 102, 100, 99, 97, 95, 88, 82, 75, 68, 62, 56, 50, 44, 39, 35, 30, 25,
      23, 21, 19,
    ];
    var s_m_roundrun_5 = [
      150, 106, 104, 103, 101, 99, 92, 86, 79, 72, 66, 61, 55, 49, 44, 39, 33,
      28, 26, 24, 22,
    ];
    var s_m_roundrun_6 = [
      150, 111, 109, 107, 105, 103, 97, 90, 84, 77, 71, 65, 59, 53, 48, 42, 37,
      31, 28, 25, 22,
    ];

    var s_w_roundrun_4 = [
      150, 99, 93, 88, 82, 76, 71, 66, 61, 56, 52, 48, 43, 39, 34, 30, 25, 20,
      19, 17, 16,
    ];
    var s_w_roundrun_5 = [
      150, 103, 98, 94, 89, 84, 79, 73, 68, 62, 58, 53, 49, 44, 39, 33, 28, 22,
      21, 19, 18,
    ];
    var s_w_roundrun_6 = [
      150, 111, 106, 102, 97, 92, 86, 80, 74, 68, 63, 59, 54, 49, 43, 37, 30,
      24, 23, 21, 20,
    ];

    let final_score_roundrun;
    let rank_roundrun;
    if (gender === "male") {
      if (SchollYear == 1) {
        if (RoundRun <= 16) {
          rank_roundrun = 5;
        } else if (RoundRun <= 29) {
          rank_roundrun = 4;
        } else if (RoundRun <= 45) {
          rank_roundrun = 3;
        } else if (RoundRun <= 61) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 2) {
        if (RoundRun <= 19) {
          rank_roundrun = 5;
        } else if (RoundRun <= 34) {
          rank_roundrun = 4;
        } else if (RoundRun <= 56) {
          rank_roundrun = 3;
        } else if (RoundRun <= 79) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 3) {
        if (RoundRun <= 22) {
          rank_roundrun = 5;
        } else if (RoundRun <= 39) {
          rank_roundrun = 4;
        } else if (RoundRun <= 64) {
          rank_roundrun = 3;
        } else if (RoundRun <= 87) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 4) {
        if (RoundRun <= 25) {
          rank_roundrun = 5;
        } else if (RoundRun <= 44) {
          rank_roundrun = 4;
        } else if (RoundRun <= 68) {
          rank_roundrun = 3;
        } else if (RoundRun <= 95) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
        // 왕복오래달리기 점수계산
        for (i = 0; i < 21; i++) {
          if (RoundRun < s_m_roundrun_4[i]) {
            final_score_roundrun = score_roundrun[i];
          }
        }
      } else if (SchollYear == 5) {
        if (RoundRun <= 28) {
          rank_roundrun = 5;
        } else if (RoundRun <= 49) {
          rank_roundrun = 4;
        } else if (RoundRun <= 72) {
          rank_roundrun = 3;
        } else if (RoundRun <= 99) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
        // 왕복오래달리기 점수계산
        for (i = 0; i < 21; i++) {
          if (RoundRun < s_m_roundrun_5[i]) {
            final_score_roundrun = score_roundrun[i];
          }
        }
      } else if (SchollYear == 6) {
        if (RoundRun <= 31) {
          rank_roundrun = 5;
        } else if (RoundRun <= 53) {
          rank_roundrun = 4;
        } else if (RoundRun <= 77) {
          rank_roundrun = 3;
        } else if (RoundRun <= 103) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
        // 왕복오래달리기 점수계산
        for (i = 0; i < 21; i++) {
          if (RoundRun < s_m_roundrun_6[i]) {
            final_score_roundrun = score_roundrun[i];
          }
        }
      }
    } else {
      if (SchollYear == 1) {
        if (RoundRun <= 14) {
          rank_roundrun = 5;
        } else if (RoundRun <= 24) {
          rank_roundrun = 4;
        } else if (RoundRun <= 38) {
          rank_roundrun = 3;
        } else if (RoundRun <= 52) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 2) {
        if (RoundRun <= 16) {
          rank_roundrun = 5;
        } else if (RoundRun <= 29) {
          rank_roundrun = 4;
        } else if (RoundRun <= 44) {
          rank_roundrun = 3;
        } else if (RoundRun <= 60) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 3) {
        if (RoundRun <= 18) {
          rank_roundrun = 5;
        } else if (RoundRun <= 34) {
          rank_roundrun = 4;
        } else if (RoundRun <= 50) {
          rank_roundrun = 3;
        } else if (RoundRun <= 68) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 4) {
        if (RoundRun <= 20) {
          rank_roundrun = 5;
        } else if (RoundRun <= 39) {
          rank_roundrun = 4;
        } else if (RoundRun <= 56) {
          rank_roundrun = 3;
        } else if (RoundRun <= 76) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
        // 왕복오래달리기 점수계산
        for (i = 0; i < 21; i++) {
          if (RoundRun < s_w_roundrun_4[i]) {
            final_score_roundrun = score_roundrun[i];
          }
        }
      } else if (SchollYear == 5) {
        if (RoundRun <= 22) {
          rank_roundrun = 5;
        } else if (RoundRun <= 44) {
          rank_roundrun = 4;
        } else if (RoundRun <= 62) {
          rank_roundrun = 3;
        } else if (RoundRun <= 84) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
        // 왕복오래달리기 점수계산
        for (i = 0; i < 21; i++) {
          if (RoundRun < s_w_roundrun_5[i]) {
            final_score_roundrun = score_roundrun[i];
          }
        }
      } else if (SchollYear == 6) {
        if (RoundRun <= 24) {
          rank_roundrun = 5;
        } else if (RoundRun <= 49) {
          rank_roundrun = 4;
        } else if (RoundRun <= 68) {
          rank_roundrun = 3;
        } else if (RoundRun <= 92) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
        // 왕복오래달리기 점수계산
        for (i = 0; i < 21; i++) {
          if (RoundRun < s_w_roundrun_6[i]) {
            final_score_roundrun = score_roundrun[i];
          }
        }
      }
    }

    //오래달리기걷기
    var score_longrun = [
      20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ];

    var s_m_longrun_5 = [
      120, 269, 272, 276, 279, 282, 293, 304, 314, 325, 346, 368, 389, 410, 428,
      445, 463, 480, 533, 587, 640,
    ];
    var s_m_longrun_6 = [
      120, 244, 246, 248, 249, 251, 267, 283, 299, 315, 331, 348, 364, 380, 398,
      415, 433, 450, 496, 541, 587,
    ];

    var s_w_longrun_5 = [
      120, 269, 277, 285, 292, 300, 315, 330, 345, 360, 381, 401, 422, 442, 457,
      472, 487, 502, 548, 594, 640,
    ];
    var s_w_longrun_6 = [
      120, 244, 258, 272, 286, 300, 314, 327, 341, 354, 373, 392, 411, 430, 443,
      455, 468, 480, 516, 551, 587,
    ];

    let final_score_longrun;
    let rank_longrun;

    if (gender === "male") {
      if (SchollYear <= 4) {
        rank_longrun = "대상이 아닙니다.(5학년 ~ 6학년)";
      } else if (SchollYear == 5) {
        if (longrun <= 281) {
          rank_longrun = 1;
        } else if (longrun <= 324) {
          rank_longrun = 2;
        } else if (longrun <= 409) {
          rank_longrun = 3;
        } else if (longrun <= 479) {
          rank_longrun = 4;
        } else {
          rank_longrun = 5;
        }
        // 오래달리기걷기 점수계산
        for (i = 0; i < 21; i++) {
          if (longrun > s_m_longrun_5[i]) {
            final_score_longrun = score_longrun[i];
          }
        }
      } else if (SchollYear == 6) {
        if (longrun <= 241) {
          rank_longrun = 1;
        } else if (longrun <= 314) {
          rank_longrun = 2;
        } else if (longrun <= 379) {
          rank_longrun = 3;
        } else if (longrun <= 449) {
          rank_longrun = 4;
        } else {
          rank_longrun = 5;
        }
        // 오래달리기걷기 점수계산
        for (i = 0; i < 21; i++) {
          if (longrun > s_m_longrun_6[i]) {
            final_score_longrun = score_longrun[i];
          }
        }
      }
    } else {
      if (SchollYear <= 4) {
        rank_longrun = "대상이 아닙니다.(5학년 ~ 6학년)";
      } else if (SchollYear == 5) {
        if (longrun <= 299) {
          rank_longrun = 1;
        } else if (longrun <= 359) {
          rank_longrun = 2;
        } else if (longrun <= 441) {
          rank_longrun = 3;
        } else if (longrun <= 501) {
          rank_longrun = 4;
        } else {
          rank_longrun = 5;
        }
        // 오래달리기걷기 점수계산
        for (i = 0; i < 21; i++) {
          if (longrun > s_w_longrun_5[i]) {
            final_score_longrun = score_longrun[i];
          }
        }
      } else if (SchollYear == 6) {
        if (longrun <= 299) {
          rank_longrun = 1;
        } else if (longrun <= 353) {
          rank_longrun = 2;
        } else if (longrun <= 429) {
          rank_longrun = 3;
        } else if (longrun <= 479) {
          rank_longrun = 4;
        } else {
          rank_longrun = 5;
        }
        // 오래달리기걷기 점수계산
        for (i = 0; i < 21; i++) {
          if (longrun > s_w_longrun_6[i]) {
            final_score_longrun = score_longrun[i];
          }
        }
      }
    }
    //앉아윗몸앞으로 굽히기

    var score_Rbending = [
      20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ];

    var s_m_Rbending_5 = [
      50, 17.9, 15.4, 12.9, 10.4, 7.9, 7.2, 6.4, 5.7, 4.9, 3.9, 2.9, 1.9, 0.9,
      -0.4, -1.6, -2.9, -4.1, -4.4, -4.8, -5.1,
    ];
    var s_m_Rbending_6 = [
      50, 17.9, 15.4, 12.9, 10.4, 7.9, 7.2, 6.4, 5.7, 4.9, 3.9, 2.9, 1.9, 0.9,
      -0.4, -1.6, -2.9, -4.1, -4.4, -4.8, -5.1,
    ];

    var s_w_Rbending_5 = [
      50, 21.9, 18.9, 15.9, 12.9, 9.9, 9.2, 8.4, 7.7, 6.9, 6.4, 5.9, 5.4, 4.9,
      3.9, 2.9, 1.9, 0.9, 0.6, 0.2, -0.1,
    ];
    var s_w_Rbending_6 = [
      50, 25.9, 22.9, 19.9, 16.9, 13.9, 12.9, 11.9, 10.9, 9.9, 8.7, 7.4, 6.2,
      4.9, 4.2, 3.4, 2.7, 1.9, 1.2, 0.6, -0.1,
    ];

    let final_score_Rbending;
    let final_score_Lbending;

    let rank_Rbending;
    if (gender === "male") {
      if (SchollYear <= 4) {
        rank_Rbending = "대상이 아닙니다.(5학년 ~ 6학년)";
      } else if (SchollYear == 5) {
        if (Rbending <= -4.1) {
          rank_Rbending = 5;
        } else if (Rbending <= 0.9) {
          rank_Rbending = 4;
        } else if (Rbending <= 4.9) {
          rank_Rbending = 3;
        } else if (Rbending <= 7.9) {
          rank_Rbending = 2;
        } else {
          rank_Rbending = 1;
        }
        // 앉아윗몸앞으로굽히기 점수계산
        for (i = 0; i < 21; i++) {
          if (Rbending < s_m_Rbending_5[i]) {
            final_score_Rbending = score_Rbending[i];
          }
        }
      } else if (SchollYear == 6) {
        if (Rbending <= -4.1) {
          rank_Rbending = 5;
        } else if (Rbending <= 0.9) {
          rank_Rbending = 4;
        } else if (Rbending <= 4.9) {
          rank_Rbending = 3;
        } else if (Rbending <= 7.9) {
          rank_Rbending = 2;
        } else {
          rank_Rbending = 1;
        }
        // 앉아윗몸앞으로굽히기 점수계산
        for (i = 0; i < 21; i++) {
          if (Rbending < s_m_Rbending_6[i]) {
            final_score_Rbending = score_Rbending[i];
          }
        }
      }
    } else {
      if (SchollYear <= 4) {
        rank_Rbending = "대상이 아닙니다.(5학년 ~ 6학년)";
      } else if (SchollYear == 5) {
        if (Rbending <= -0) {
          rank_Rbending = 5;
        } else if (Rbending <= 4.9) {
          rank_Rbending = 4;
        } else if (Rbending <= 6.9) {
          rank_Rbending = 3;
        } else if (Rbending <= 9.9) {
          rank_Rbending = 2;
        } else {
          rank_Rbending = 1;
        }

        // 앉아윗몸앞으로굽히기 점수계산
        for (i = 0; i < 21; i++) {
          if (Rbending < s_w_Rbending_5[i]) {
            final_score_Rbending = score_Rbending[i];
          }
        }
      } else if (SchollYear == 6) {
        if (Rbending <= 1.9) {
          rank_Rbending = 5;
        } else if (Rbending <= 4.9) {
          rank_Rbending = 4;
        } else if (Rbending <= 9.9) {
          rank_Rbending = 3;
        } else if (Rbending <= 13.9) {
          rank_Rbending = 2;
        } else {
          rank_Rbending = 1;
        }
        // 앉아윗몸앞으로굽히기 점수계산
        for (i = 0; i < 21; i++) {
          if (Rbending < s_w_Rbending_6[i]) {
            final_score_Rbending = score_Rbending[i];
          }
        }
      }
    }

    let rank_Lbending;
    if (gender === "male") {
      if (SchollYear <= 4) {
        rank_Lbending = "대상이 아닙니다.(5학년 ~ 6학년)";
      } else if (SchollYear == 5) {
        if (Rbending <= -4.1) {
          rank_Lbending = 5;
        } else if (Rbending <= 0.9) {
          rank_Lbending = 4;
        } else if (Rbending <= 4.9) {
          rank_Lbending = 3;
        } else if (Rbending <= 7.9) {
          rank_Lbending = 2;
        } else {
          rank_Lbending = 1;
        }
        // 앉아윗몸앞으로굽히기 점수계산
        for (i = 0; i < 21; i++) {
          if (Lbending < s_m_Rbending_5[i]) {
            final_score_Lbending = score_Rbending[i];
          }
        }
      } else if (SchollYear == 6) {
        if (Rbending <= -4.1) {
          rank_Lbending = 5;
        } else if (Rbending <= 0.9) {
          rank_Lbending = 4;
        } else if (Rbending <= 4.9) {
          rank_Lbending = 3;
        } else if (Rbending <= 7.9) {
          rank_Lbending = 2;
        } else {
          rank_Lbending = 1;
        }
        // 앉아윗몸앞으로굽히기 점수계산
        for (i = 0; i < 21; i++) {
          if (Lbending < s_m_Rbending_6[i]) {
            final_score_Lbending = score_Rbending[i];
          }
        }
      }
    } else {
      if (SchollYear <= 4) {
        rank_Lbending = "대상이 아닙니다.(5학년 ~ 6학년)";
      } else if (SchollYear == 5) {
        if (Rbending <= -0) {
          rank_Lbending = 5;
        } else if (Rbending <= 4.9) {
          rank_Lbending = 4;
        } else if (Rbending <= 6.9) {
          rank_Lbending = 3;
        } else if (Rbending <= 9.9) {
          rank_Lbending = 2;
        } else {
          rank_Lbending = 1;
        }
        // 앉아윗몸앞으로굽히기 점수계산
        for (i = 0; i < 21; i++) {
          if (Lbending < s_w_Rbending_5[i]) {
            final_score_Lbending = score_Rbending[i];
          }
        }
      } else if (SchollYear == 6) {
        if (Rbending <= 1.9) {
          rank_Lbending = 5;
        } else if (Rbending <= 4.9) {
          rank_Lbending = 4;
        } else if (Rbending <= 9.9) {
          rank_Lbending = 3;
        } else if (Rbending <= 13.9) {
          rank_Lbending = 2;
        } else {
          rank_Lbending = 1;
        }
        // 앉아윗몸앞으로굽히기 점수계산
        for (i = 0; i < 21; i++) {
          if (Lbending < s_w_Rbending_6[i]) {
            final_score_Lbending = score_Rbending[i];
          }
        }
      }
    }

    //종합유연성 기준표
    let rank_flexibiliy = 0;
    if (R_Shoulder == "Shoulder_Success") {
      rank_flexibiliy += 1;
    }
    if (R_body == "body_Success") {
      rank_flexibiliy += 1;
    }
    if (R_Side == "Side_Success") {
      rank_flexibiliy += 1;
    }
    if (R_Lower == "Lower_Success") {
      rank_flexibiliy += 1;
    }
    if (L_Shoulder == "Shoulder_Success") {
      rank_flexibiliy += 1;
    }
    if (L_body == "body_Success") {
      rank_flexibiliy += 1;
    }
    if (L_Side == "Side_Success") {
      rank_flexibiliy += 1;
    }
    if (L_Lower == "Lower_Success") {
      rank_flexibiliy += 1;
    }

    let final_rank_flexibiliyty;
    if (rank_flexibiliy <= 4) {
      final_rank_flexibiliyty = 5;
    } else if (rank_flexibiliy <= 5) {
      final_rank_flexibiliyty = 4;
    } else if (rank_flexibiliy <= 6) {
      final_rank_flexibiliyty = 3;
    } else if (rank_flexibiliy <= 7) {
      final_rank_flexibiliyty = 2;
    } else {
      final_rank_flexibiliyty = 1;
    }

    let final_score_flexibility;
    if (rank_flexibiliy <= 1) {
      final_score_flexibility = 0;
    } else if (rank_flexibiliy <= 2) {
      final_score_flexibility = 1;
    } else if (rank_flexibiliy <= 3) {
      final_score_flexibility = 2;
    } else if (rank_flexibiliy <= 4) {
      final_score_flexibility = 3;
    } else if (rank_flexibiliy <= 5) {
      final_score_flexibility = 7;
    } else if (rank_flexibiliy <= 6) {
      final_score_flexibility = 11;
    } else if (rank_flexibiliy <= 7) {
      final_score_flexibility = 15;
    } else {
      final_score_flexibility = 20;
    }

    //윗몸 말아올리기

    var score_upperbody = [
      20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ];

    var s_m_upperbody_4 = [
      200, 118, 108, 99, 89, 79, 69, 59, 49, 39, 35, 30, 26, 21, 17, 14, 10, 6,
      4, 2, 0,
    ];
    var s_m_upperbody_5 = [
      200, 119, 109, 99, 89, 79, 69, 59, 49, 39, 35, 30, 26, 21, 18, 15, 12, 9,
      6, 3, 0,
    ];
    var s_m_upperbody_6 = [
      200, 119, 109, 99, 89, 79, 69, 59, 49, 39, 35, 30, 26, 21, 18, 15, 12, 9,
      6, 3, 0,
    ];

    var s_w_upperbody_4 = [
      200, 89, 82, 74, 67, 59, 51, 44, 36, 28, 25, 23, 20, 17, 14, 11, 8, 5, 3,
      2, 0,
    ];
    var s_w_upperbody_5 = [
      200, 89, 82, 74, 67, 59, 53, 47, 41, 35, 32, 29, 25, 22, 18, 14, 10, 6, 4,
      2, 0,
    ];
    var s_w_upperbody_6 = [
      200, 89, 82, 74, 67, 59, 55, 51, 46, 42, 37, 32, 27, 22, 18, 14, 10, 6, 4,
      2, 0,
    ];

    let final_score_upperbody;

    let rank_Upperbody;
    if (gender === "male") {
      if (SchollYear == 1) {
        if (Upperbody <= 1) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 9) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 20) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 40) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 2) {
        if (Upperbody <= 2) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 13) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 25) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 60) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 3) {
        if (Upperbody <= 3) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 13) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 29) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 65) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 4) {
        if (Upperbody <= 6) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 21) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 39) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 79) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }

        //  윗몸 말아올리기 점수계산
        for (i = 0; i < 21; i++) {
          if (Upperbody < s_m_upperbody_4[i]) {
            final_score_upperbody = score_upperbody[i];
          }
        }
      } else if (SchollYear == 5) {
        if (Upperbody <= 9) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 21) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 39) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 79) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
        //  윗몸 말아올리기 점수계산
        for (i = 0; i < 21; i++) {
          if (Upperbody < s_m_upperbody_5[i]) {
            final_score_upperbody = score_upperbody[i];
          }
        }
      } else if (SchollYear == 6) {
        if (Upperbody <= 9) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 21) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 39) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 79) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
        //  윗몸 말아올리기 점수계산
        for (i = 0; i < 21; i++) {
          if (Upperbody < s_m_upperbody_6[i]) {
            final_score_upperbody = score_upperbody[i];
          }
        }
      }
    } else {
      if (SchollYear == 1) {
        if (Upperbody <= 3) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 7) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 19) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 40) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 2) {
        if (Upperbody <= 3) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 11) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 28) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 52) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 3) {
        if (Upperbody <= 5) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 12) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 28) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 52) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 4) {
        if (Upperbody <= 5) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 17) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 28) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 52) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
        //  윗몸 말아올리기 점수계산
        for (i = 0; i < 21; i++) {
          if (Upperbody < s_w_upperbody_4[i]) {
            final_score_upperbody = score_upperbody[i];
          }
        }
      } else if (SchollYear == 5) {
        if (Upperbody <= 6) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 22) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 35) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 59) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
        //  윗몸 말아올리기 점수계산
        for (i = 0; i < 21; i++) {
          if (Upperbody < s_w_upperbody_5[i]) {
            final_score_upperbody = score_upperbody[i];
          }
        }
      } else if (SchollYear == 6) {
        if (Upperbody <= 6) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 22) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 42) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 59) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
        //  윗몸 말아올리기 점수계산
        for (i = 0; i < 21; i++) {
          if (Upperbody < s_w_upperbody_6[i]) {
            final_score_upperbody = score_upperbody[i];
          }
        }
      }
    }

    let rgrip;
    let lgrip;
    let rank_rgrip;
    let rank_lgrip;

    if (RR_grip_1 >= RR_grip_2) {
      rgrip = RR_grip_1;
    } else {
      rgrip = RR_grip_2;
    }
    if (LL_grip_1 >= LL_grip_2) {
      lgrip = LL_grip_1;
    } else {
      lgrip = LL_grip_2;
    }

    console.log(`rgrip ${rgrip}lgrip ${lgrip}`);
    var m_grip_1 = [7.4, 10.4, 13.9, 24.9];
    var m_grip_2 = [8.4, 10.9, 15.9, 29.9];
    var m_grip_3 = [8.9, 11.9, 17.9, 30.9];
    var m_grip_4 = [11.4, 14.9, 18.4, 30.9];
    var m_grip_5 = [12.4, 16.9, 22.9, 30.9];
    var m_grip_6 = [14.9, 18.9, 26.4, 34.9];

    var w_grip_1 = [6.4, 8.9, 11.9, 24.9];
    var w_grip_2 = [7.9, 9.9, 12.9, 24.9];
    var w_grip_3 = [6.9, 10.9, 15.9, 28.9];
    var w_grip_4 = [10.4, 13.4, 17.4, 28.9];

    var w_grip_5 = [11.9, 15.4, 18.9, 28.9];
    var w_grip_6 = [13.9, 18.9, 26.4, 32.9];

    var score_grip = [
      20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ];

    var s_m_grip_4 = [
      200, 35.9, 34.7, 33.4, 32.2, 30.9, 27.8, 24.7, 21.5, 18.4, 17.5, 16.7,
      15.8, 14.9, 14, 13.2, 12.3, 11.4, 10.6, 9.7, 8.9,
    ];
    var s_m_grip_5 = [
      200, 36.9, 35.4, 33.9, 32.4, 30.9, 28.9, 26.9, 24.9, 22.9, 21.4, 19.9,
      18.4, 16.9, 15.8, 14.7, 13.5, 12.4, 11.6, 10.7, 9.9,
    ];
    var s_m_grip_6 = [
      200, 39.3, 38.2, 37.1, 36, 34.9, 32.8, 30.7, 28.5, 26.4, 24.5, 22.7, 20.8,
      18.9, 17.9, 16.9, 15.9, 14.9, 13.7, 12.4, 11.2,
    ];

    var s_w_grip_4 = [
      200, 33.5, 32.4, 31.2, 30.1, 28.9, 26.2, 23.4, 20.7, 17.9, 16.8, 15.7,
      14.5, 13.4, 12.7, 11.9, 11.2, 10.4, 9.8, 9.1, 8.5,
    ];
    var s_w_grip_5 = [
      200, 34.9, 33.4, 31.9, 30.4, 28.9, 26.4, 23.9, 21.4, 18.9, 18, 17.2, 16.3,
      15.4, 14.5, 13.7, 12.8, 11.9, 11.5, 11, 10.6,
    ];
    var s_w_grip_6 = [
      200, 38.9, 37.4, 35.9, 34.4, 32.9, 30.2, 27.4, 24.7, 21.9, 21.2, 20.4,
      19.7, 18.9, 17.7, 16.4, 15.2, 13.9, 12.6, 11.3, 10,
    ];

    let final_score_rgrip;
    let final_score_lgrip;

    console.log(`Your m_grip_1 m_grip_1 ${Math.min.apply(null, m_grip_1)}`);
    //오른손
    if (gender === "male") {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (rgrip > m_grip_1[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, m_grip_1)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (rgrip > m_grip_2[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, m_grip_2)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (rgrip > m_grip_3[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, m_grip_3)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (rgrip > m_grip_4[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, m_grip_4)) {
            rank_rgrip = 5;
          }
        }
        // 악력 점수계산
        for (i = 0; i < 21; i++) {
          if (rgrip < s_m_grip_4[i]) {
            final_score_rgrip = score_grip[i];
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (rgrip > m_grip_5[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, m_grip_5)) {
            rank_rgrip = 5;
          }
        }
        // 악력 점수계산
        for (i = 0; i < 21; i++) {
          if (rgrip < s_m_grip_5[i]) {
            final_score_rgrip = score_grip[i];
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (rgrip > m_grip_6[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, m_grip_6)) {
            rank_rgrip = 5;
          }
        }
        // 악력 점수계산
        for (i = 0; i < 21; i++) {
          if (rgrip < s_m_grip_6[i]) {
            final_score_rgrip = score_grip[i];
          }
        }
      }
    } else {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (rgrip > w_grip_1[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, w_grip_1)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (rgrip > w_grip_2[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, w_grip_w)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (rgrip > w_grip_3[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, w_grip_3)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (rgrip > w_grip_4[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, w_grip_4)) {
            rank_rgrip = 5;
          }
        }
        // 악력 점수계산
        for (i = 0; i < 21; i++) {
          if (rgrip < s_w_grip_4[i]) {
            final_score_rgrip = score_grip[i];
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (rgrip > w_grip_5[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, w_grip_5)) {
            rank_rgrip = 5;
          }
        }
        // 악력 점수계산
        for (i = 0; i < 21; i++) {
          if (rgrip < s_w_grip_5[i]) {
            final_score_rgrip = score_grip[i];
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (rgrip > w_grip_6[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, w_grip_6)) {
            rank_rgrip = 5;
          }
        }
        // 악력 점수계산
        for (i = 0; i < 21; i++) {
          if (rgrip < s_w_grip_6[i]) {
            final_score_rgrip = score_grip[i];
          }
        }
      }
    }

    //왼손
    if (gender === "male") {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (lgrip > m_grip_1[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, m_grip_1)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (lgrip > m_grip_2[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, m_grip_2)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (lgrip > m_grip_3[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, m_grip_3)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (lgrip > m_grip_4[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, m_grip_4)) {
            rank_lgrip = 5;
          }
        }
        // 악력 점수계산
        for (i = 0; i < 21; i++) {
          if (lgrip < s_m_grip_4[i]) {
            final_score_lgrip = score_grip[i];
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (lgrip > m_grip_5[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, m_grip_5)) {
            rank_lgrip = 5;
          }
        }
        // 악력 점수계산
        for (i = 0; i < 21; i++) {
          if (lgrip < s_m_grip_5[i]) {
            final_score_lgrip = score_grip[i];
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (lgrip > m_grip_6[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, m_grip_6)) {
            rank_lgrip = 5;
          }
        }
        // 악력 점수계산
        for (i = 0; i < 21; i++) {
          if (lgrip < s_m_grip_6[i]) {
            final_score_lgrip = score_grip[i];
          }
        }
      }
    } else {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (lgrip > w_grip_1[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, w_grip_1)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (lgrip > w_grip_2[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, w_grip_2)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (lgrip > w_grip_3[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, w_grip_3)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (lgrip > w_grip_4[i]) {
            rank_rgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, w_grip_4)) {
            rank_lgrip = 5;
          }
        }
        // 악력 점수계산
        for (i = 0; i < 21; i++) {
          if (lgrip < s_w_grip_4[i]) {
            final_score_lgrip = score_grip[i];
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (lgrip > w_grip_5[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, w_grip_5)) {
            rank_lgrip = 5;
          }
        }
        // 악력 점수계산
        for (i = 0; i < 21; i++) {
          if (lgrip < s_w_grip_5[i]) {
            final_score_lgrip = score_grip[i];
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (lgrip > w_grip_6[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, w_grip_6)) {
            rank_lgrip = 5;
          }
        }
        // 악력 점수계산
        for (i = 0; i < 21; i++) {
          if (lgrip < s_w_grip_6[i]) {
            final_score_lgrip = score_grip[i];
          }
        }
      }
    }

    //run50m ${run50m},jumpmeter ${jumpingmeter}

    var m_run50m_1 = [10.2, 11.3, 12.1, 15.0];
    var m_run50m_2 = [9.5, 10.5, 11.5, 14.4];
    var m_run50m_3 = [9.0, 9.8, 11.0, 14.4];
    var m_run50m_4 = [8.8, 9.7, 10.5, 13.2];
    var m_run50m_5 = [8.5, 9.4, 10.2, 13.2];
    var m_run50m_6 = [8.1, 9.1, 10.0, 12.5];

    var w_run50m_1 = [10.7, 11.7, 12.5, 13.8];
    var w_run50m_2 = [10.1, 11, 12, 13.8];
    var w_run50m_3 = [9.8, 10.5, 11.6, 13.8];
    var w_run50m_4 = [9.4, 10.4, 11, 13.3];
    var w_run50m_5 = [8.9, 9.9, 10.7, 13];
    var w_run50m_6 = [8.9, 9.8, 10.7, 12.9];

    var score_run50m = [
      20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ];

    var s_m_run50m_4 = [
      5, 8.71, 8.74, 8.76, 8.79, 8.81, 9.04, 9.26, 9.49, 9.71, 9.91, 10.11,
      10.31, 10.51, 11.19, 11.86, 12.54, 13.21, 14.14, 15.08, 16.01,
    ];
    var s_m_run50m_5 = [
      5, 8.31, 8.36, 8.41, 8.46, 8.51, 8.74, 8.96, 9.19, 9.41, 9.61, 9.81,
      10.01, 10.21, 10.96, 11.71, 12.46, 13.21, 13.99, 14.78, 15.56,
    ];
    var s_m_run50m_6 = [
      5, 7.78, 7.86, 7.95, 8.03, 8.11, 8.36, 8.61, 8.86, 9.11, 9.34, 9.56, 9.79,
      10.01, 10.64, 11.26, 11.89, 12.51, 13.51, 14.51, 15.51,
    ];

    var s_w_run50m_4 = [
      5, 9.31, 9.34, 9.36, 9.39, 9.41, 9.66, 9.91, 10.16, 10.41, 10.56, 10.71,
      10.86, 11.01, 11.59, 12.16, 12.74, 13.31, 15.01, 16.72, 18.42,
    ];
    var s_w_run50m_5 = [
      5, 8.74, 8.78, 8.83, 8.87, 8.91, 9.16, 9.41, 9.66, 9.91, 10.11, 10.31,
      10.51, 10.71, 11.29, 11.86, 12.44, 13.01, 13.98, 14.94, 15.91,
    ];
    var s_w_run50m_6 = [
      5, 8.67, 8.73, 8.79, 8.85, 8.91, 9.14, 9.36, 9.59, 9.81, 10.04, 10.26,
      10.49, 10.71, 11.26, 11.81, 12.36, 12.91, 13.61, 14.31, 15.01,
    ];

    let final_score_run50m;
    let rank_run50m;

    //50m 달리기
    if (gender === "male") {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (run50m > m_run50m_1[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, m_run50m_1)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (run50m > m_run50m_2[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, m_run50m_2)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (run50m > m_run50m_3[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, m_run50m_3)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (run50m > m_run50m_4[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, m_run50m_4)) {
            rank_run50m = 1;
          }
        }
        // 50달리기 점수계산
        for (i = 0; i < 21; i++) {
          if (run50m >= s_m_run50m_4[i]) {
            final_score_run50m = score_run50m[i];
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (run50m > m_run50m_5[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, m_run50m_5)) {
            rank_run50m = 1;
          }
        }
        // 50달리기 점수계산
        for (i = 0; i < 21; i++) {
          if (run50m >= s_m_run50m_5[i]) {
            final_score_run50m = score_run50m[i];
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (run50m > m_run50m_6[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, m_run50m_6)) {
            rank_run50m = 1;
          }
        }
        // 50달리기 점수계산
        for (i = 0; i < 21; i++) {
          if (run50m >= s_m_run50m_6[i]) {
            final_score_run50m = score_run50m[i];
          }
        }
      }
    } else {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (run50m > w_run50m_1[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, w_run50m_1)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (run50m > w_run50m_2[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, w_run50m_2)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (run50m > w_run50m_3[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, w_run50m_3)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (run50m > w_run50m_4[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, w_run50m_4)) {
            rank_run50m = 1;
          }
        }
        // 50달리기 점수계산
        for (i = 0; i < 21; i++) {
          if (run50m >= s_w_run50m_4[i]) {
            final_score_run50m = score_run50m[i];
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (run50m > w_run50m_5[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, w_run50m_5)) {
            rank_run50m = 1;
          }
        }
        // 50달리기 점수계산
        for (i = 0; i < 21; i++) {
          if (run50m >= s_w_run50m_5[i]) {
            final_score_run50m = score_run50m[i];
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (run50m > w_run50m_6[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, w_run50m_6)) {
            rank_run50m = 1;
          }
        }
        // 50달리기 점수계산
        for (i = 0; i < 21; i++) {
          if (run50m >= s_w_run50m_6[i]) {
            final_score_run50m = score_run50m[i];
          }
        }
      }
    }

    //제자리 멀리뛰기

    var m_jumpingmeter_1 = [90, 112, 123, 145];
    var m_jumpingmeter_2 = [92, 119, 134, 154];
    var m_jumpingmeter_3 = [100, 127, 141, 166];
    var m_jumpingmeter_4 = [100, 130, 149, 170];
    var m_jumpingmeter_5 = [111, 141, 159, 180];
    var m_jumpingmeter_6 = [122, 148, 167, 200];

    var w_jumpingmeter_1 = [85, 99, 110, 131];
    var w_jumpingmeter_2 = [87, 109, 121, 140];
    var w_jumpingmeter_3 = [92, 118, 129, 154];
    var w_jumpingmeter_4 = [97, 119, 135, 161];
    var w_jumpingmeter_5 = [100, 123, 145, 183];
    var w_jumpingmeter_6 = [100, 127, 145, 183];

    var score_jumpingmeter = [
      20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ];

    var s_m_jumpingmeter_4 = [
      300, 179.3, 177, 174.7, 172.3, 170, 164.8, 159.5, 154.3, 149, 144.3,
      139.5, 134.8, 130, 122.5, 115, 107.5, 100, 99.4, 98.8, 98.2,
    ];
    var s_m_jumpingmeter_5 = [
      300, 187.3, 185.5, 183.7, 181.8, 180, 174.8, 169.5, 164.3, 159, 154.5,
      150, 145.5, 141, 133.5, 126, 118.5, 111, 109.2, 107.4, 105.6,
    ];
    var s_m_jumpingmeter_6 = [
      300, 204.6, 203.5, 202.3, 201.2, 200, 191.8, 183.5, 175.3, 167, 162.3,
      157.5, 152.8, 148, 141.5, 135, 128.5, 122, 118.7, 115.3, 112,
    ];

    var s_w_jumpingmeter_4 = [
      300, 165.4, 164.3, 163.2, 162.1, 161, 154.5, 148, 141.5, 135, 131, 127,
      123, 119, 113.5, 108, 102.5, 97, 93.8, 90.6, 87.4,
    ];
    var s_w_jumpingmeter_5 = [
      300, 174.9, 173.7, 172.5, 171.2, 170, 162.3, 154.5, 146.8, 139, 135, 131,
      127, 123, 117.3, 111.5, 105.8, 100, 96.4, 92.9, 89.3,
    ];
    var s_w_jumpingmeter_6 = [
      300, 177.7, 177, 176.4, 175.7, 175, 167.3, 159.5, 151.8, 144, 139.8,
      135.5, 131.3, 127, 120.3, 113.5, 106.8, 100, 96.6, 93.3, 89.9,
    ];

    let final_score_jumpingmeter;
    let rank_jumpingmeter;

    if (gender === "male") {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > m_jumpingmeter_1[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, m_jumpingmeter_1)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > m_jumpingmeter_2[i]) {
            rank_jumpingmeter = 4 - i;
          }

          if (jumpingmeter < Math.min.apply(null, m_jumpingmeter_2)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > m_jumpingmeter_3[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, m_jumpingmeter_3)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > m_jumpingmeter_4[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, m_jumpingmeter_4)) {
            rank_jumpingmeter = 5;
          }
        }
        // 제자리멀리뛰기 점수계산
        for (i = 0; i < 21; i++) {
          if (jumpingmeter < s_m_jumpingmeter_4[i]) {
            final_score_jumpingmeter = score_jumpingmeter[i];
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > m_jumpingmeter_5[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, m_jumpingmeter_5)) {
            rank_jumpingmeter = 5;
          }
        }
        // 제자리멀리뛰기 점수계산
        for (i = 0; i < 21; i++) {
          if (jumpingmeter < s_m_jumpingmeter_5[i]) {
            final_score_jumpingmeter = score_jumpingmeter[i];
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > m_jumpingmeter_6[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, m_jumpingmeter_6)) {
            rank_jumpingmeter = 5;
          }
        }
        // 제자리멀리뛰기 점수계산
        for (i = 0; i < 21; i++) {
          if (jumpingmeter < s_m_jumpingmeter_6[i]) {
            final_score_jumpingmeter = score_jumpingmeter[i];
          }
        }
      }
    } else {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > w_jumpingmeter_1[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, w_jumpingmeter_1)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > w_jumpingmeter_2[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, w_jumpingmeter_2)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > w_jumpingmeter_3[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, w_jumpingmeter_3)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > w_jumpingmeter_4[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, w_jumpingmeter_4)) {
            rank_jumpingmeter = 5;
          }
        }
        // 제자리멀리뛰기 점수계산
        for (i = 0; i < 21; i++) {
          if (jumpingmeter < s_w_jumpingmeter_4[i]) {
            final_score_jumpingmeter = score_jumpingmeter[i];
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > w_jumpingmeter_5[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, w_jumpingmeter_5)) {
            rank_jumpingmeter = 5;
          }
        }
        // 제자리멀리뛰기 점수계산
        for (i = 0; i < 21; i++) {
          if (jumpingmeter < s_w_jumpingmeter_5[i]) {
            final_score_jumpingmeter = score_jumpingmeter[i];
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > w_jumpingmeter_6[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, w_jumpingmeter_6)) {
            rank_jumpingmeter = 5;
          }
        }
        // 제자리멀리뛰기 점수계산
        for (i = 0; i < 21; i++) {
          if (jumpingmeter < s_w_jumpingmeter_6[i]) {
            final_score_jumpingmeter = score_jumpingmeter[i];
          }
        }
      }
    }

    console.log(`final_score_jumpingmeter ${final_score_jumpingmeter}`);
    calories = BMR;

    // TODO: Calculate KiloJoules from calories
    kilojoules = calories * 4.184;
    calories = Number(calories).toFixed(2);
    kilojoules = Number(kilojoules).toFixed(1);
    BMR = Number(BMR).toFixed(2);
    console.log(`Your calorie need ${calories}`);

    //TODO: Show the bodyBurnsValue let
    let bodyBurning;
    let bodyBurningText;
    let multipicationValue2;
    let resultTypeChecked = document.querySelector(
      "input[name='resultIn']:checked"
    ).value;
    if (resultTypeChecked === "kiloJoules") {
      bodyBurning = kilojoules;
      bodyBurningText = "kiloJoules";
      multipicationValue2 = "X 4.184";
    } else {
      bodyBurning = calories;
      bodyBurningText = "calories";
      multipicationValue2 = "";
    }

    // !Calculate BMI according to height and weight
    heightInMeter = `${height / 100}`;
    let BMI = `${weight / heightInMeter ** 2}`;
    BMI = Number(BMI).toFixed(1);
    console.log(BMI, heightInMeter);

    //TODO: Justify the BMI index value
    let textColor;
    let state;
    let explainState;
    let tips;
    let weightText;
    if (BMI < 18.5) {
      state = "Underweight";
      explainState = "저체중";
      tips = "제한된 음식 섭취로 체중을 늘려야 함";
      textColor = "black-50";
      weightText = "Low weight";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      state = "Normal";
      explainState = "건강의 이상적인 기준";
      tips =
        "이상태를 유지해야 합니다. 건강에 안좋은 음식을 과도하게 섭취하지 말고, 현재 상태를 유지하세요.";
      textColor = "success";
      weightText = "OverWeight / Underweight";
    } else if (BMI > 24.9 && BMI <= 29.9) {
      state = "Overweight";
      explainState = "초과 체중";
      tips = "걱정할 정도는 아니지만, 운동을해서 살을 빼야합니다.";
      textColor = "warning";
      weightText = "OverWeight";
    } else if (BMI > 29.9 && BMI <= 34.9) {
      state = "obese";
      explainState = "과체중";
      tips = "선택적으로 식사하고 운동하는 것이 필요합니다.";
      textColor = "warning";
      weightText = "High OverWeight";
    } else if (BMI > 34.9 && BMI <= 39.9) {
      state = "obese (High)";
      explainState = "심한 과체중";
      tips =
        "제한된 음식을 섭취하고, 운동을 많이하는 것이 중요합니다. 특히나 필요한경우 의사와의 상담을 추천드립니다.";
      textColor = "danger";
      weightText = "OverWeight (very high)";
    } else {
      state = "Extremly obese";
      explainState = "심각한 과체중";
      tips = "의사와의 상담이 필수적입니다. 어서 빨리 체중을 조절하세요.";
      textColor = "danger";
      weightText = "OverWeight (extreme)";
    }
    // TODO: According to good BMI and given Height calculate the perfect weight for this height
    //from
    let healthyBMI1 = 18.5;
    //to
    let healthyBMI2 = 24.9;
    //from
    let healthyWeight1 = `${healthyBMI1 * heightInMeter ** 2}`;
    healthyWeight1 = Math.round(healthyWeight1);
    //to
    let healthyWeight2 = `${healthyBMI2 * heightInMeter ** 2}`;
    healthyWeight2 = Math.round(healthyWeight2);
    //a sequence resulth
    let healthyWeight = `${healthyWeight1} to ${healthyWeight2}`;
    let healthyBMI = `${healthyBMI1} to ${healthyBMI2}`;
    //Average Result
    let averageHealthyWeight = `${(healthyWeight1 + healthyWeight2) / 2}`;
    let averageHealthyBMI = `${(healthyBMI1 + healthyBMI2) / 2}`;

    //TODO: Calculate the difference between healty weight and Given Weight;
    let defferenceWeight;
    if (state === "Underweight") {
      defferenceWeight = `${healthyWeight1 - weight}kg To ${
        healthyWeight2 - weight
      }kg`;
    } else if (state === "Normal") {
      defferenceWeight = "(N/A) Perfect Weight";
    } else {
      defferenceWeight = `${weight - healthyWeight1}kg To ${
        weight - healthyWeight2
      }kg`;
    }

    //TODO; Make the HTML for show the results for each sections
    let htmlForBMI;
    let htmlForCalories;
    let htmlForButtons;

    //체지방률
    var m_bmi_4 = [14, 20.1, 22.3, 32.3];
    var m_bmi_5 = [14.3, 20.9, 23.3, 33.3];
    var m_bmi_6 = [14.9, 24, 34, 34.1, 167, 200];

    var w_bmi_4 = [14.3, 21.1, 23.7, 33.9];
    var w_bmi_5 = [14.6, 21.7, 24.4, 34.6];
    var w_bmi_6 = [22.3, 22.3, 25.1, 35.2];

    var score_bmi = [
      0, 1, 2, 3, 3, 4, 4, 5, 6, 8, 12, 16, 20, 18, 14, 10, 8, 6, 4, 2, 0,
    ];

    var s_m_bmi_4 = [
      300, 31.5, 29.9, 27.8, 25.5, 23.2, 22.6, 22, 21.4, 20.7, 19.9, 19.1, 18.3,
      17.4, 16.6, 15.8, 15, 14.2, 13.4, 12.6, 4.9,
    ];
    var s_m_bmi_5 = [
      300, 31.5, 29.9, 28, 26.3, 24.4, 23.7, 23, 22.3, 21.6, 20.8, 19.9, 19,
      18.1, 17.2, 16.3, 15.4, 14.5, 13.6, 12.7, 4.9,
    ];
    var s_m_bmi_6 = [
      300, 31.5, 29.9, 28.3, 26.6, 24.9, 24.3, 23.7, 23.1, 22.5, 21.6, 20.6,
      19.6, 18.6, 17.6, 16.6, 15.7, 14.8, 13.9, 13, 4.9,
    ];

    var s_w_bmi_4 = [
      300, 31.5, 29.9, 27.4, 24.7, 22, 21.5, 21, 20.4, 19.8, 19.1, 18.4, 17.6,
      16.8, 16, 15.3, 14.6, 13.9, 13.2, 12.5, 4.9,
    ];
    var s_w_bmi_5 = [
      300, 31.5, 29.9, 27.6, 25.3, 23, 22.4, 21.8, 21.2, 20.6, 19.8, 19, 18.2,
      17.4, 16.6, 15.8, 15, 14.2, 13.4, 12.6, 4.9,
    ];
    var s_w_bmi_6 = [
      300, 31.5, 29.9, 27.9, 25.9, 23.9, 23.3, 22.7, 22.1, 21.4, 20.6, 19.8,
      18.9, 18, 17.1, 16.2, 15.4, 14.6, 13.8, 13, 4.9,
    ];

    let rank_bmi;
    let final_score_bmi;

    if (gender === "male") {
      if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (BMI > m_bmi_4[i]) {
            rank_bmi = 4 - i;
          }
          if (BMI < Math.min.apply(null, m_bmi_4)) {
            rank_bmi = 5;
          }
        }
        for (i = 0; i < 21; i++) {
          if (BMI < s_m_bmi_4[i]) {
            final_score_bmi = score_bmi[i];
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (BMI > m_bmi_5[i]) {
            rank_bmi = 4 - i;
          }

          if (BMI < Math.min.apply(null, m_bmi_5)) {
            rank_bmi = 5;
          }
        }
        for (i = 0; i < 21; i++) {
          if (BMI < s_m_bmi_5[i]) {
            final_score_bmi = score_bmi[i];
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (BMI > m_bmi_6[i]) {
            rank_bmi = 4 - i;
          }

          if (BMI < Math.min.apply(null, m_bmi_6)) {
            rank_bmi = 5;
          }
        }
        for (i = 0; i < 21; i++) {
          if (BMI < s_m_bmi_6[i]) {
            final_score_bmi = score_bmi[i];
          }
        }
      }
    } else {
      if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (BMI > w_bmi_4[i]) {
            rank_bmi = 4 - i;
          }
          if (BMI < Math.min.apply(null, w_bmi_4)) {
            rank_bmi = 5;
          }
        }
        for (i = 0; i < 21; i++) {
          if (BMI < s_w_bmi_4[i]) {
            final_score_bmi = score_bmi[i];
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (BMI > w_bmi_5[i]) {
            rank_bmi = 4 - i;
          }

          if (BMI < Math.min.apply(null, w_bmi_5)) {
            rank_bmi = 5;
          }
        }
        for (i = 0; i < 21; i++) {
          if (BMI < s_w_bmi_5[i]) {
            final_score_bmi = score_bmi[i];
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (BMI > w_bmi_6[i]) {
            rank_bmi = 4 - i;
          }

          if (BMI < Math.min.apply(null, w_bmi_6)) {
            rank_bmi = 5;
          }
        }
        for (i = 0; i < 21; i++) {
          if (BMI < s_w_bmi_6[i]) {
            final_score_bmi = score_bmi[i];
          }
        }
      }
    }

    console.log(`final_score_bmi ${final_score_bmi}`);
    let BMI_detail;

    if (rank_bmi == 5) {
      BMI_detail = "마름";
    } else if (rank_bmi == 4) {
      BMI_detail = "정상";
    } else if (rank_bmi == 3) {
      BMI_detail = "과체중";
    } else if (rank_bmi == 2) {
      BMI_detail = "경도비만";
    } else if (rank_bmi == 1) {
      BMI_detail = "고도비만";
    }

    if (rank_bmi == 5) {
      rank_bmi -= 1;
    } else if (rank_bmi == 4) {
      rank_bmi += 1;
    } else if (rank_bmi == 3) {
      rank_bmi += 1;
    } else if (rank_bmi == 2) {
      rank_bmi += 1;
    }

    //신체의 능력점수
    let score = 0;

    if (Check_Alacrity.value == 1) {
      score += final_score_run50m;

      console.log(`final_score_run50m ${final_score_run50m}`);
    } else if (Check_Alacrity.value == 2) {
      score += final_score_jumpingmeter;

      console.log(`final_score_jumpingmeter ${final_score_jumpingmeter}`);
    }

    console.log(`Check_Alacrity ${score}`);

    if (Check_Endurance.value == 1) {
      score += final_score_roundrun;
    } else if (Check_Endurance.value == 2) {
      score += final_score_longrun;
    } else if (Check_Endurance.value == 3) {
      score += 20;
    }
    console.log(`Check_Endurance ${score}`);

    if (Check_Flexibility.value == 1) {
      score += final_score_Rbending * 0.5;
      score += final_score_Lbending * 0.5;

      console.log(`final_score_Rbending ${final_score_Rbending}`);
      console.log(`final_score_Lbending ${final_score_Lbending}`);
    } else if (Check_Flexibility.value == 2) {
      score += final_score_flexibility;
    }

    console.log(`Check_Flexibility ${score}`);

    if (Check_Muscular.value == 1) {
      score += 20;
    } else if (Check_Muscular.value == 2) {
      score += final_score_upperbody;

      console.log(`final_score_upperbody ${final_score_upperbody}`);
    } else if (Check_Muscular.value == 3) {
      score += final_score_lgrip * 0.5;
      score += final_score_rgrip * 0.5;
      console.log(`final_score_lgrip ${final_score_lgrip}`);
      console.log(`final_score_rgrip ${final_score_rgrip}`);
    }
    console.log(`Check_Muscular ${score}`);

    score += final_score_bmi;
    console.log(`final_score_bmi ${final_score_bmi}`);
    console.log(`final_score ${score}`);
    /*
    score =
      (6 - rank_bmi) * 4 +
      (6 - rank_longrun) * 4 +
      (6 - rank_Rbending) * 2 +
      (6 - rank_Lbending) * 2 +
      (6 - rank_rgrip) * 2 +
      (6 - rank_lgrip) * 2 +
      (6 - rank_run50m) * 4;
*/
    // 신체의 능력등급
    let rank;

    if (score < 20) {
      rank = 5;
    } else if (score < 40) {
      rank = 4;
    } else if (score < 60) {
      rank = 3;
    } else if (score < 80) {
      rank = 2;
    } else if (score <= 100) {
      rank = 1;
    }

    let final_longrun;
    let final_rbend;
    let final_lbend;
    let final_bmi;
    let final_score;
    let final_rank;
    let final_step;
    let final_pushup;

    if (SchollYear < 4) {
      final_longrun = ``;
      final_rbend = ``;
      final_lbend = ``;
      final_bmi = ``;
      final_pushup = ``;
      final_score = ``;
      final_rank = ``;
      final_step = ``;
    } else {
      final_bmi = `
      <h5 class="d-inline-block">체지방률 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
          style="font-size: 1.5rem;" id="bmi">${BMI} kg/m^2 / ${BMI_detail} 등급</h5>
      <hr>`;

      final_score = `
      <h5 class="d-inline-block">신체의 능력점수 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
          style="font-size: 1.5rem;" id="bmi">${score} 점</h5>
      <hr>`;
      final_rank = `
      <h5 class="d-inline-block">신체의 능력등급 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
          style="font-size: 1.5rem;" id="bmi">${rank} 등급</h5>
      <hr>`;
    }

    // 심폐지구력 측정 종목에 따른 평가 안내
    let final_round_run;

    if (Check_Endurance.value == 1) {
      final_round_run = `
      <h5 class="d-inline-block">왕복오래달리기 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
          style="font-size: 1.5rem;" id="RoundRun">${RoundRun} 회 / ${rank_roundrun} 등급</h5> <hr>`;
      final_longrun = ``;
      final_step = ``;
    } else if (Check_Endurance.value == 2) {
      final_round_run = ``;
      final_step = ``;

      final_longrun = `
      <h5 class="d-inline-block">오래달리기걷기 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
          style="font-size: 1.5rem;" id="longRun">${longrun} 초 / ${rank_longrun} 등급</h5> <hr>`;
    } else if (Check_Endurance.value == 3) {
      final_round_run = ``;
      final_longrun = ``;

      final_step = `
      <h5 class="d-inline-block">스탭검사 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
        style="font-size: 1.5rem;" id="stepcheck">검사 계산을 어떻게 하는건가요.. ㅠㅠ</h5>
      <hr>`;
    } else {
      final_round_run = ``;
      final_longrun = ``;
      final_step = ``;
    }

    // 유연성 측정 종목에 따른 평가 안내
    let final_rank_flexibiliy;

    if (Check_Flexibility.value == 2) {
      final_rank_flexibiliy = `
      <h5 class="d-inline-block">종합유연성 기준표 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
        style="font-size: 1.5rem;" id="flexibility">${rank_flexibiliy} 점 / ${final_rank_flexibiliyty} 등급</h5>
    <hr>
      `;
      final_rbend = ``;
      final_lbend = ``;
    } else if (Check_Flexibility.value == 1) {
      final_rbend = `       
      <h5 class="d-inline-block">오른쪽 앉아 윗몸앞으로 굽히기 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
          style="font-size: 1.5rem;" id="r_bending">${Rbending} cm / ${rank_Rbending} 등급</h5> <hr>`;

      final_lbend = `
      <h5 class="d-inline-block">왼쪽 앉아윗몸앞으로 굽히기 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
          style="font-size: 1.5rem;" id="l_bending">${Lbending} cm / ${rank_Lbending} 등급</h5>
      <hr>`;
      final_rank_flexibiliy = ``;
    } else {
      final_rank_flexibiliy = ``;
      final_rbend = ``;
      final_lbend = ``;
    }

    // 근력근지구력 측정 종목에 따른 평가 안내
    let final_Upperbody;
    let final_grip;

    if (Check_Muscular.value == 1) {
      final_pushup = `
      <h5 class="d-inline-block">팔굽혀펴기 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
          style="font-size: 1.5rem;" id="pushup">${pushup} 회</h5>
      <hr>`;
      final_grip = ``;
      final_Upperbody = ``;
    } else if (Check_Muscular.value == 2) {
      final_pushup = ``;
      final_Upperbody = `<h5 class="d-inline-block">윗몸말아올리기 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
          style="font-size: 1.5rem;" id="Upperbody">${Upperbody} 점 / ${rank_Upperbody} 등급</h5>
      <hr>
      `;
      final_grip = ``;
    } else if (Check_Muscular.value == 3) {
      final_grip = `<h5 class="d-inline-block">오른손 악력 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
          style="font-size: 1.5rem;" id="rgrip">${rgrip} kg / ${rank_rgrip} 등급</h5>
      <hr>
      <h5 class="d-inline-block">왼손 악력 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
          style="font-size: 1.5rem;" id="lgrip">${lgrip} kg / ${rank_lgrip} 등급</h5>
      <hr>`;
      final_pushup = ``;
      final_Upperbody = ``;
    } else {
      final_grip = ``;
      final_pushup = ``;
      final_Upperbody = ``;
    }

    // 순발력 측정 종목에 따른 평가 안내
    let final_run50m;
    let final_jumpingmeter;

    if (Check_Alacrity.value == 1) {
      final_run50m = `<h5 class="d-inline-block">50m 달리기 : </h5>
      <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
          style="font-size: 1.5rem;" id="run50m">${run50m} 초 / ${rank_run50m} 등급</h5>
      <hr>`;
      final_jumpingmeter = ``;
    } else if (Check_Alacrity.value == 2) {
      final_jumpingmeter = `<h5 class="d-inline-block">제자리 멀리뛰기 : </h5>
    <h5 class="d-inline-block font-weight-semi bold position-relative float-right"
        style="font-size: 1.5rem;" id="jumpingmeter">${jumpingmeter} cm / ${rank_jumpingmeter} 등급</h5>
        <hr>`;
      final_run50m = ``;
    } else {
      final_jumpingmeter = ``;
      final_run50m = ``;
    }

    htmlForCalories = `<div class="my-3 d-flex justify-content-center align-content-center flex-column">
    <h5 class="card-header text-center my-3">건강검사 실시 현황</h5>
    </div>
    <hr>
    ${final_longrun}
    ${final_round_run}
    ${final_step}

    ${final_rbend}
    ${final_lbend}
    ${final_rank_flexibiliy}

    ${final_pushup}
    ${final_Upperbody}
    ${final_grip}

    ${final_jumpingmeter}
    ${final_run50m}
        
    ${final_bmi}
    ${final_score}
    ${final_rank}
</h5>
<hr>`;
    //TODO: BMI HTML
    htmlForBMI = ``;

    //TODO: Button HTML
    htmlForButtons = `
    <button class="btn btn-outline-warning" type="submit" onclick="location.reload();">Reload</button>
    <button class="btn btn-outline-success position-relative float-right" type="submit"
    onclick="document.title='${SchollYear}학년_${SchollClass}반_${SchollClassNum}번_검사결과지'; startPrint('resultBox')">Print/Save</button>`;
    result.classList.add("d-none");

    //TODO: Add alert with success message when calculate will be finished
    errorAlert.style.display = "none";
    successAlert.style.display = "block";
    setTimeout(() => {
      successAlert.classList.add("hide");
      successAlert.style.display = "none";
    }, 4000);

    //TODO: Show the results according to user need
    if (calculateItemChecked === "bmr") {
      calorieSection.innerHTML = htmlForCalories;
      healthSection.innerHTML = "";
    } else if (calculateItemChecked === "bmi") {
      healthSection.innerHTML = htmlForBMI;
      calorieSection.innerHTML = "";
    } else if (calculateItemChecked === "all") {
      healthSection.innerHTML = htmlForBMI;
      calorieSection.innerHTML = htmlForCalories;
    }
    buttons.innerHTML = htmlForButtons;
    /*
    //! Show the navigator
    let navigator = document.getElementById("navigator");
    if (calculateItemChecked === "all") {
      navigator.style.display = "block";
    } else {
      navigator.style.display = "none";
    }*/
  } //End of the else statement
}
//todo: 원하는 부분 print
var prtContent; // 프린트 하고 싶은 영역
var initBody; // body 내용 원본

// 프린트하고 싶은 영역의 id 값을 통해 출력 시작
function startPrint(div_id) {
  prtContent = document.getElementById(div_id);
  window.onbeforeprint = beforePrint;
  window.onafterprint = afterPrint;
  window.print();
}
// 웹페이지 body 내용을 프린트하고 싶은 내용으로 교체
function beforePrint() {
  initBody = document.body.innerHTML;
  document.body.innerHTML = prtContent.innerHTML;
}
// 프린트 후, 웹페이지 body 복구
function afterPrint() {
  document.body.innerHTML = initBody;
}

//TODO: A function for showing BMI chart
function showChart() {
  BMIChart.style.display = "block";
}

//TODO: A function to showing the BMI state Table
function showBMIStateTable() {
  if (BMIStateTable.style.display === "none") {
    BMIStateTable.style.display = "block";
    BMITableBtn.innerHTML = "Hide BMI Table";
  } else {
    BMIStateTable.style.display = "none";
    BMITableBtn.innerHTML = "Show BMI Table";
  }
}
/* 현재는 사용하지 않음
//!Add Event Listener For article Sections
let readSectionBtn = document.getElementById("readSectionBtn");
readSectionBtn.addEventListener("click", () => {
  let readSectionArticle = document.getElementById("readSectionArticle");
  if (readSectionArticle.style.display === "none") {
    readSectionArticle.style.display = "block";
    readSectionBtn.innerHTML = `<i class="fa fa-minus float-right"></i>`;
  } else {
    readSectionArticle.style.display = "none";
    readSectionBtn.innerHTML = `<i class="fa fa-plus float-right"></i>`;
  }
});

let BMIMore = document.getElementById("BMIMore");
BMIMore.addEventListener("click", () => {
  let BMIArticle = document.getElementById("BMIArticle");
  if (BMIArticle.style.display === "none") {
    BMIArticle.style.display = "block";
  } else {
    BMIArticle.style.display = "none";
  }
});

let BMRMore = document.getElementById("BMRMore");
BMRMore.addEventListener("click", () => {
  let BMRArticle = document.getElementById("BMRArticle");
  if (BMRArticle.style.display === "none") {
    BMRArticle.style.display = "block";
  } else {
    BMRArticle.style.display = "none";
  }
});

let overweightRiskContent = document.getElementById("overweightRiskContent");
overweightRiskContent.addEventListener("click", () => {
  let overweightRiskArticle = document.getElementById("overweightRiskArticle");
  if (overweightRiskArticle.style.display === "none") {
    overweightRiskArticle.style.display = "block";
  } else {
    overweightRiskArticle.style.display = "none";
  }
});
let underweightRiskContent = document.getElementById("underweightRiskContent");
underweightRiskContent.addEventListener("click", () => {
  let underweightRiskArticle = document.getElementById(
    "underweightRiskArticle"
  );
  if (underweightRiskArticle.style.display === "none") {
    underweightRiskArticle.style.display = "block";
  } else {
    underweightRiskArticle.style.display = "none";
  }
});
let BMILimitContent = document.getElementById("BMILimitContent");
BMILimitContent.addEventListener("click", () => {
  let BMILimitArticle = document.getElementById("BMILimitArticle");
  if (BMILimitArticle.style.display === "none") {
    BMILimitArticle.style.display = "block";
  } else {
    BMILimitArticle.style.display = "none";
  }
});
let BMITableContent = document.getElementById("BMITableContent");
BMITableContent.addEventListener("click", () => {
  let BMIStateTable2 = document.getElementById("BMIStateTable2");
  if (BMIStateTable2.style.display === "none") {
    BMIStateTable2.style.display = "block";
  } else {
    BMIStateTable2.style.display = "none";
  }
});

//!For help and support section
let helpSectionBtn = document.getElementById("helpSectionBtn");
helpSectionBtn.addEventListener("click", () => {
  let helpArea = document.getElementById("helpArea");
  if (helpArea.style.display === "none") {
    helpArea.style.display = "block";
    helpSectionBtn.innerHTML = `<i class="fa fa-minus float-right"></i>`;
  } else {
    helpArea.style.display = "none";
    helpSectionBtn.innerHTML = `<i class="fa fa-plus float-right"></i>`;
  }
});

let issue = document.getElementById("issue");
let improve = document.getElementById("improve");
let surveyAlert = document.getElementById("surveyAlert");
ensureBtn.addEventListener("click", (e) => {
  let helpIssue = document.querySelector("input[name='isIssue']:checked").value;
  let helpImprove = document.querySelector(
    "input[name='isImprove']:checked"
  ).value;
  if (helpIssue === "noIssue" && helpImprove === "noImprove") {
    surveyAlert2.style.display = "block";
  } else {
    surveyAlert.style.display = "block";
  }
});
*/
