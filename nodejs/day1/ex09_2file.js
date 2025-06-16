const fs = require('fs');
let data = 'Nice to meet you!! 반가워요~~';
fs.writeFileSync('result.txt', data);
console.log('result.txt쓰기 완료');

fs.writeFile('result2.txt', data, 'utf-8', (err) => {
    if (err) {
        console.log('파일 쓰기 중 에러: ', err.message);
        return;
    }
    console.log('result2.txt에 쓰기 완료');
});
console.log('Bye Bye~~');
