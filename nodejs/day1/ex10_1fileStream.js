const fs = require("fs");
console.log("--start----");
const fileName = "ex09_1file.js";
/**
 * 활용 예시
- 대용량 로그 파일 분석
- 대형 CSV 파일 파싱
- 스트리밍 다운로드 구현
- 동영상/오디오 처리

fs.readFile() 은 파일 전체를 한 번에 메모리에 로드하나  fs.createReadStream()의 경우 파일을 조각(chunk)단위로 스트리밍 한다.
fs.readFile() 의 경우 대용량 파일 처리시 비효율적 (메모리 부족 위험), 콜백 방식 
스트림 방식은 효율적 점진적 읽기 가능하며 이벤트 기반으로 처리함 (큰 파일에서 유리함) 큰 로그파일/동영상/오디오 등에 사용
 */

const readStream = fs.createReadStream(fileName, {
  encoding: "utf8", //encoding: 'utf8'을 설정하면 읽은 데이터는 문자열(string) 형태로 들어오고 //설정하지 않으면 chunk 는 기본적으로 Buffer 로 들어옴
  highWaterMark: 16,
}); //읽기 스트림 생성
//highWaterMark: 버퍼 크기(읽을 데이터 덩어리 크기, 기본 64KB).

//이벤트 방식(비동기)의 입력
const data = [];
readStream.on("data", function (chunk) {
  //스트림에서 데이터 조각(chunk)을 받을 때마다 호출
  console.log(chunk); //코드 조각
  console.log(chunk.length);
  data.push(chunk);
});
readStream.on('end', () => {
    //더 이상 읽을 데이터가 없을 때 호출
    console.log('***********************' + typeof data);
    if (typeof data === 'object') {
        console.log(data.toString());
    } else {
        const buffer = Buffer.concat(data);
        //Buffer는 내부적으로 바이트(byte) 배열. 즉, 파일의 내용을 그대로 바이너리(2진수) 형태로 읽음
        //내부적으로는 byte 단위로 저장되어 있지만, 출력할 때는 사람이 읽기 좋게 16진수(hex) 로 표시합니다.
        console.log(buffer.toString());
    }
});
readStream.on("error", (error) => {
  console.log(">>>Error<<<<<<<<<<<");

  //에러 발생 시 호출
  console.log(error.message);
});

console.log("----end---------");
