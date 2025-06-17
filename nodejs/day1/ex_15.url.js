const url = require("url");

const str =
  "https://www.naver.com:443/search?query=javascript&id=100&where=nexearch#anchor";
const str2 = "https://chatgpt.com/c/6850b97c-1bf0-8009-87b2-ea75c98e1cc4";

// 1. url.parse(url 주소): url주소를 분해해서 내가 원하는 정보를 추출할 수 있다.
// 2. url.format(객체): parse로 분해된 url객체를 다시 원 상태로 조립

// const parsedUrl = url.parse(str);
// console.log(parsedUrl);

// const formattedUrl = url.format(parsedUrl);
// console.log(formattedUrl);

// const parsedUrl2 = url.parse(str2);
// console.log(parsedUrl2);

// const formattedUrl2 = url.format(parsedUrl2);
// console.log(formattedUrl2);

//최근 WHATWG URL을 따르는 새로운 URL API가 Node.js에 추가되었다.
const { URL } = require("url");
const myUrl = new URL(str);
console.log(myUrl);
const myUrl2 = new URL(str2);
console.log(myUrl2);
// 쿼리스트링 추출
console.log(myUrl.searchParams.get("query")); // javascript
console.log(myUrl.searchParams.get("id")); // 100
console.log(myUrl2.searchParams.get("c")); // 6850b97c-1bf0-8009-87b2-ea75c98e1cc4

//쿼리 수정
myUrl.searchParams.set("query", "nodejs");
console.log(myUrl.searchParams.get("query")); // nodejs

//쿼리 추가
myUrl.searchParams.append("newParam", "newValue");
console.log(myUrl);
console.log(myUrl.searchParams.get("newParam")); // newValue

//쿼리 삭제 
myUrl.searchParams.delete("newParam");
console.log(myUrl.searchParams.get("newParam")); // null