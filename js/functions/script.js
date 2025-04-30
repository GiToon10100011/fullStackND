// 선언적 함수

function greet() {
  console.log("object");
}

greet();

// 익명 함수

const msg = function () {
  console.log("object2");
};

msg();

// 파라미터

const params = function (a, b) {
  console.log(`${a}는 ${b}이다`);
};

params("염동훈", "할아버지");

// 기본값 파라미터

function defaultParams(a = true) {
  console.log(`염동훈 바보 = ${a}`);
}

defaultParams();

// 즉발함수

(function (name) {
  console.log(name);
})("염동훈 바보");

// 익명함수 -> 화살표 함수

let hi2 = function () {
  console.log("object");
};

const hi3 = () => {
  console.log("object");
};
