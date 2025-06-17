//express외장모듈을 설치해서 웹서버를 구축해보자.
//npm install express --save
//npm install nodemon --g  또는 -D 옵션(개발모드)
//npm install body-parser --save
//http모듈은 경량인 장점은 있지만 기본 기능만 제공하므로 웹서버를 구축하는데 다양한 기능을 구현할때는 불편하다
//외장모듈인 express를 이용하면 라우팅, 미들웨어, 에러 처리 등 다양한 기능을 가지고 있어서 웹서버 구축이 쉽다
//특히 RESTful API구축시 유용한 구성요소를 제공한다

const express = require("express"); //express함수를 exports하고 있음. 그 함수 내에서 객체를 return함
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express!</h1>");
  //res.send()는 응답 본문을 전송하고, 상태 코드와 Content-Type을 자동으로 설정하고 응답도 자동으로 종료함
  //기본 상태코드는 200이며 Content-Type은 전송할 데이터 유형에 따라 자동으로 설정된다
  //헤더와 상태코드 등을 개발자가 직접 설정하고자 할 때는
  //res.status(404).send()를 사용
  //res.set()는 헤더를 설정  res.set('Custom-Header', 'value').send('Hello, world!');
});

app.get("/file", (req, res) => {
  res.sendFile(`${__dirname}/public/pizzaUI.html`, (err) => {
    if (err) {
      console.error("파일 전송 오류:", err);
      res.status(500).send("서버 오류");
    } else {
      console.log("파일 전송 완료");
    }
  });
});

app.listen(7777, () => {
  console.log("Server is listening on port 7777");
});
