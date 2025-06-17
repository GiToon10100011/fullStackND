const http = require('http');

const server = http.createServer((req, res) => {
    // 요청 정보 확인
    console.log(req.method, req.url);

    // 응답 작성
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1 style="text-align:center;color:red">Hello, Node.js HTTP Server!</h1>');
});

server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다');
});
