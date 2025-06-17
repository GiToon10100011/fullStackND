const fs = require('fs'),
    path = require('path'),
    http = require('http');

//1. 서버 생성후 가동시키세요
http.createServer(function (req, res) {
    const filename = path.join('public', 'pizzaUI.html');
    console.log(filename); //public\pizzaUI.html
    console.log(path.resolve(filename)); //D:\BSA\myjava\reactboot\frontend\server\public\pizzaUI.html 절대경로 반환

    //2. fs를 이용해 pizzaUI.html 파일을 비동기방식으로 읽어들인 후 파일 데이터를 res를 통해
    //   브라우저에 write하세요
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); //응답 헤더에 헤더정보 쓰기
        res.write(data); //응답 본문에 데이터 쓰기. 여러번 호출하여 여러 조각 데이터를 전송할 수 있다.
        res.end(); //응답을 종료하고 모든 데이터를 클에게 전송한 후 응답을 마무리한다.
        //end()가 호출되면 응답 전송이 완료되므로 더 이상 데이터 쓰기를 할 수 없다
    });
}).listen(3333, function () {
    console.log('http://localhost:3333');
});
