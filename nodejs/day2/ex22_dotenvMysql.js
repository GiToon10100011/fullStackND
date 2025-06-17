// npm install mysql2 --s

// dotenv를 사용하여 .env 파일에서 환경 변수를 로드합니다.
require('dotenv').config();

// MySQL 연결 설정
const mysql = require('mysql2');

// .env 파일에서 환경 변수 가져오기
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT || 3306; // 기본 포트는 3306

// MySQL 연결 생성
const connection = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName,
    port: dbPort,
});

// MySQL 연결
connection.connect((err) => {
    if (err) {
        console.error('MySQL 연결 오류:', err);
        return;
    }
    console.log('MySQL에 성공적으로 연결되었습니다!');
});

// 데이터베이스 쿼리 예제
connection.query('SELECT * FROM member', (err, results) => {
    if (err) {
        console.error('쿼리 실행 오류:', err);
        return;
    }
    console.log('쿼리 결과:', results);
});

// 연결 종료
connection.end();
