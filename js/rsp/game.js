// 가위바위보 게임 구현

// 선택지 객체
const choice = {
  rock: { name: "바위", img: "images/math_img_2.png" },
  scissors: { name: "가위", img: "images/math_img_1.png" },
  paper: { name: "보", img: "images/math_img_3.png" },
};

// DOM 요소 가져오기
const userBox = document.getElementById("user-box");
const computerBox = document.getElementById("computer-box");
const resultDisplay = document.getElementById("result");
const scissorsBtn = document.getElementById("scissors-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");

// 사용자와 컴퓨터의 선택, 게임 결과를 저장할 변수
let userChoice = null;
let comChoice = null;
let gameResult = "";

// 컴퓨터의 선택을 무작위로 생성하는 함수
function getComputerChoice() {
  let itemArray = Object.keys(choice);
  let randomItem = Math.floor(Math.random() * itemArray.length);
  let resultItem = itemArray[randomItem];

  return choice[resultItem];
}

// 승패를 판정하는 함수
function judge(user, computer) {
  if (user.name === computer.name) {
    return "무승부";
  } else if (user.name === "바위") {
    return computer.name === "가위" ? "승리" : "패배";
  } else if (user.name === "가위") {
    return computer.name === "보" ? "승리" : "패배";
  } else if (user.name === "보") {
    return computer.name === "바위" ? "승리" : "패배";
  }
}

// 화면에 결과 표시하는 함수
function updateDisplay() {
  if (userChoice) {
    userBox.innerHTML = `
      <h2>사용자</h2>
      <img src="${userChoice.img}" alt="${userChoice.name}">
      <p>${userChoice.name}</p>
    `;
  }

  if (comChoice) {
    computerBox.innerHTML = `
      <h2>컴퓨터</h2>
      <img src="${comChoice.img}" alt="${comChoice.name}">
      <p>${comChoice.name}</p>
    `;
  }

  resultDisplay.textContent = gameResult;
}

// 게임 플레이 함수
function play(select) {
  userChoice = choice[select];
  comChoice = getComputerChoice();
  gameResult = judge(userChoice, comChoice);
  updateDisplay();
}

// 버튼에 이벤트 리스너 추가
scissorsBtn.addEventListener("click", () => play("scissors"));
rockBtn.addEventListener("click", () => play("rock"));
paperBtn.addEventListener("click", () => play("paper"));

// 초기 화면 설정
window.onload = function () {
  userBox.innerHTML = "<h2>사용자</h2><p>선택해주세요</p>";
  computerBox.innerHTML = "<h2>컴퓨터</h2><p>대기중...</p>";
  resultDisplay.textContent = "게임을 시작하세요!";
};

// 컴퓨터와 하는 가위바위보 대결
// 컴퓨터는 컴퓨터대로의 선택, 나의 선택도 필요(가위바위보의 선택지를 선택할 버튼 필요)
// 출력공간 필요
// 이벤트와 콜백을 사용
