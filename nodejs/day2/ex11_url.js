const url = require('url'); //교재 챕터3장
//url주소를 구문분석하여 쉽게 조작할 수 있게 해주는 모듈

const str = `https://shopping.naver.com/luxury/cosmetic/category?optionFilters=CH_101923673#hash`;
const str2 = 'https://example.com:8080/path/name?query=string#hash';

const { URL } = url; //url모듈에 있는 URL생성자를 비구조화 할당으로 가져온다.
const myUrl = new URL(str2); //WHATWG에서 도입한 API
/*
Node.js는 최근 WHATWG(웹 하이퍼텍스트 응용 기술 워킹 그룹) URL 표준을 따르는 
새로운 URL API를 도입했습니다. 이 API는 최신 브라우저의 URL 인터페이스와 유사하며, 
새로운 프로젝트에서는 이 방식을 사용하는 것이 좋다
*/

console.log('myUrl: ', myUrl); //href속성: 전체 url, protocol:https, host:포트번호까지 포함/hostname :호스트명
//pathname:'/luxury/cosmetic/category'
//search:'?optionFilters=CH_101923673',
//searchParams: URLSearchParams { 'optionFilters' => 'CH_101923673' },
// hash: '#hash'

//1. url.parse(주소): url주소를 분해함=>이를 이용해서 내가 원하는 정보만 추출할 수 있다
//2. url.format(객체): 분해된 url객체를 다시 원래상태로 조립한 문자열을 반환

const parsedUrl = url.parse(str);
console.log('url.parse():', parsedUrl);
console.log(parsedUrl.query); //'optionFilters=CH_101923673'
console.log(parsedUrl.pathname); //luxury/cosmetic/category

console.log('url.format():', url.format(parsedUrl)); //분해된(파싱된) url을 다시 조합한다
///////////////////////////////////////////////

// URL 생성
const myUrl2 = new URL('https://example.com/product?category=books&id=123');

// 쿼리 읽기
console.log(myUrl2.searchParams.get('category')); // 👉 'books'
console.log(myUrl2.searchParams.get('id'));       // 👉 '123'

// 쿼리 추가
myUrl2.searchParams.append('sort', 'price');
console.log(myUrl2.href); // 👉 https://example.com/product?category=books&id=123&sort=price

// 쿼리 수정
myUrl2.searchParams.set('id', '999');
console.log(myUrl2.href); // 👉 https://example.com/product?category=books&id=999&sort=price

// 쿼리 삭제
myUrl2.searchParams.delete('category');
console.log(myUrl2.href); // 👉 https://example.com/product?id=999&sort=price

// 반복 (모든 key=value 출력)
for (const [key, value] of myUrl2.searchParams) {
  console.log(`${key} = ${value}`);
}
// 👉 id = 999
// 👉 sort = price