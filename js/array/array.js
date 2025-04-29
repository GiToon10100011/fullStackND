let arr1 = new Array();
console.log(arr1);

let arr2 = new Array("염동훈", 78, true);
console.log(arr2);

let fruits = ["딸기", "참외", "오렌지", "포도"];
console.log(fruits);

// 2번방
console.log(fruits[2]);

// 배열 메소드
// 배열 마지막에 데이터를 추가
fruits.push("한라봉");
console.log(fruits);

// 데이터 추출
fruits.pop();
console.log(fruits);

// 앞에 데이터 추가
fruits.unshift("석류");
console.log(fruits);

// 앞에서부터 데이터 제거
fruits.shift();
console.log(fruits);

//중간에 데이터 삽입하기
fruits.splice(2, 0, "바나나", "귤", "용과");
console.log(fruits);

//3번째 부터 2개 제거
fruits.splice(3, 2);
console.log(fruits);

//정렬하기
fruits.sort();
console.log(fruits);

//역순 정렬
fruits.reverse();
console.log(fruits);

//배열 합치기
let combined = fruits.concat(arr2);
let combined2 = [...fruits, ...arr2];
console.log(combined2);

//  배열 요소를 문자열로 합치기
let joined = combined2.join("*");
console.log(joined);
console.log(combined2.length);
