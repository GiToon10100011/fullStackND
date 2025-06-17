const express = require('express'),
    fs = require('fs');
const app = express();
app.set('port', process.env.PORT || 3333);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
/**라우팅----------
 * get  '/' =>index.html 보여주기
 * get  '/users' =>모든 회원 목록
 * get  '/users/아이디' =>특정 회원정보
 * 그 외의 요청 => 해당 페이지는 존재하지 않아요
 */
app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/users', (req, res) => {
    res.send('<h1>모든 회원 목록</h1>');
});

app.get('/users/:uid', (req, res) => {
    res.send(`<h1 style='color:blue'>${req.params.uid}번 회원님의 정보</h1>`);
});
app.get('*', (req, res) => {
    res.status(404).send('<h1 style="color:red">해당 페이지는 없습니다.</h1>');
});

app.listen(app.get('port'), () => {
    console.log('http://localhost:' + app.get('port'));
});
