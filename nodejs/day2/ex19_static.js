const express = require('express');
//정적인 파일들을 제공하는 라우터 역할을 수행. express가 기본적으로 가지고 있음

const app = express();
app.set('port', process.env.PORT || 3333);

app.use(express.static(__dirname + '/public'));
//public폴더내에 정적인 파일들(css/js/이미지파일 등...)을 넣으면 브라우저에서 접근 가능
//요청주소를 보낼때 public은 포함되지 않음에 주의 http://localhost/images/sample.png 로 보내면 이미지 나옴
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..');
});
