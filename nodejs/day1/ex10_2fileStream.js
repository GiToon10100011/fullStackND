const fs = require('fs');

const writeStream = fs.createWriteStream('out.txt', { encoding: 'utf8' });
//바이너리 데이터(이미지, 동영상 등)를 쓸 때는 encoding 없이 Buffer를 직접 다루는 게 맞다

//데이터 쓰기
writeStream.write('첫 번째 줄\n'); //데이터를 스트림에 씀
writeStream.write('두 번째 줄\n');
writeStream.write('세 번째 줄\n');
writeStream.end('마지막 줄\n'); //스트림 종료, 마지막 데이터도 쓸 수 있음 writeStream.end()를 호출하면 내부적으로 파일 디스크립터가 자동으로 닫힘

writeStream.on('finish', () => {
    //쓰기 완료 이벤트 처리
    console.log('--파일 쓰기 완료--------');
});
writeStream.on('error', (error) => {
    console.log('>>>파일 쓰기 중 Error<<<<<<<<<<<');

    //에러 발생 시 호출
    console.log(error.message);
});
