//내장 모듈 파일 시스템 모듈 사용해보기

const fs = require('fs');
//파일을 읽고 쓰기 할 때 사용
//1. 동기방식으로 파일을 읽을 경우
var data = fs.readFileSync('readme.txt', 'utf-8');
console.log(data);
console.log('Bye Bye~~');

//2. 비동기방식으로 파일을 읽는 경우
fs.readFile('readme2.txt', 'utf-8', function (err, data) {
    if (err) throw err; //console.error(err);
    console.log(data);
});
console.log('따봉 파일아 잘가~~~');
