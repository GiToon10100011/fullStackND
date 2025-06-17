//url모듈 학습후 querystring을 살펴보자
const url = require('url'); //교재 챕터3장
const querystring = require('querystring');
//WHATWG방식 이전의 URL을 사용할 때 쿼리스트링을 쉽게 추출하기 위한 모듈

const str = `https://shopping.naver.com/luxury/cosmetic/category?optionFilters=CH_101923673&page=1&per_page=10#hash`;

const parsedUrl = url.parse(str);
const qStr = parsedUrl.query; //optionFilters=CH_101923673&page=1&per_page=10
console.log(qStr);
const query = querystring.parse(qStr);
console.log(query); //객체로 반환. 객체의 속성을 이용해  파라미터값을 추출할 수 있다
console.log('page번호: ', query.page);
console.log('한 페이지 목록 개수: ', query.per_page);
console.log('옵션 필터: ', query.optionFilters);

console.log('querystring.stringify():', querystring.stringify(query));
//분해된 쿼리 객체를 문자열로 직렬화
