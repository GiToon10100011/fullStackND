const http = require('http');
const fs = require('fs').promises; //Promise기반 fs모듈 불러오기.
//fs.promises를 사용하면, 파일 작업을 Promise를 사용해 비동기적으로 처리할 수 있으며,
//이는 콜백 함수 대신 Promise를 반환한다. (가독성이 좋고 오류처리, 콜백지옥 방지차원)
// const path = require('path');

http.createServer(async (req, res) => {
    try {
        const fileName = 'public/pizzaUI.html'; //path.join('public', 'pizzaUI.html');
        console.log('fileName: ', fileName);

        const data = await fs.readFile(fileName);
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(err.message);
    }
}).listen(5555, () => {
    console.log('5555번 포트에서 서버 대기 중입니다!');
});
