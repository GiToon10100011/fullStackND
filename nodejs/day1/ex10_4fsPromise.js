// promise 활용하여 읽기. promise방식을 이용하면 콜백방식이 아닌 프로미스 방식으로 처리하므로 직관겆이고 깔끔함
const fs = require('fs').promises;
// const { promises:fs } = require("fs");

console.log('[Start]');

fs.readFile('./readme.txt')
    .then((data) => {
        //Promise 체이닝 사용 가능
        console.log(data.toString());
        return fs.readFile('./out.txt');
    })
    .then((data2) => {
        console.log(data2.toString());
        return fs.readFile('./result.txt');
    })
    .then((data3) => {
        console.log(data3.toString());
    })
    .catch(console.log);

console.log('[End]');
console.log('***Promise방식으로 카피***********');

fs.copyFile('./mysqlTest.js', './mysqlTest_copy.js')
    .then(() => {
        console.log('>>>복사 완료!!!<<<<');
    })
    .catch(console.log);

//async/await사용
async function fileCopy(src, dest) {
    try {
        await fs.copyFile(src, dest); //비동기 함수라서 즉시 완료되지 않고, 작업이 끝날 때까지 기다려야 합니다.
        console.log(src + '복사 성공');
    } catch (err) {
        console.error('카피 실패', err);
    }
}
fileCopy('req_res_메서드.txt', 'req_res_메서드_copy.txt');
