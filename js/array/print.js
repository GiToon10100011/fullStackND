let data = [7, 30, "염동훈", 78];
let str = "염동훈 바보";

// for 반복문
for (let i = 0; i <= data.length - 1; i++) {
  let char = data[i];
  console.log(char);
}

// for in

for (let i in data) {
  console.log(data[i]);
}

// for of(이터러블만 해당)

for (let char of data) {
  console.log(char);
}

// forEach

data.forEach((char) => console.log(char));

// 문자열 for of
for (let char of str) console.log(str);

// 객체 for in(이터러블만 해당)

let TV = {
  brand: "LG",
  inch: 75,
  flat: true,
  on: function () {
    alert("Power ON");
  },
};

for(let prop in TV) console.log(TV[prop])
