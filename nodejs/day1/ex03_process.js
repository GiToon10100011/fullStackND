/**[3] process객체 : 프로그램과 프로세스 관련 기능을 수행
 * 속성/메소드
 * 1)argv : 프로세스를 실행할 때 전달되는 매개변수 정보
 * 2)env : 환경변수 정보
 * 3) arch : 프로세서의 아키텍처 표시
 * 4) version : Node 버전
 * 5) versions : 종속된 프로그램 버전
 * 6) platform : 플랫폼 정보 표시
 * 7)exit() : 프로세스 종료시키는 메소드
 * 8) memoryUsage(): 메모리 사용정보 객체 반환
 * 9) uptime() : 현재 프로그램이 실행된 시간
 *
 */
console.log('argv속성의 파라미터 수: %d', process.argv.length); 
//node ex03_process.js hi bye
console.dir(process.argv);
console.log(process.argv[2]); //hi
process.argv.forEach((val, i) => {
    console.log(i + ': ' + val);
});
console.log('----------------');

/*process.env에는 운영 체제에 의해 설정된 환경 변수가 포함됩니다. 
이러한 변수들은 시스템의 설정이나 사용자 정보 등을 포함할 수 있습니다. */
console.log(process.env)

//console.dir(process.env);
console.log(process.env['OS']);
console.log(process.env['classpath']);
console.log(process.env.path); //시스템 path정보
console.log('**************');
/** uptime()
 * Node.js 애플리케이션이 실행된 후 경과한 시간을 초 단위로 출력합니다.
 * 재 Node.js 프로세스가 시작된 이후 얼마나 시간이 흘렀는지를 나타내는 부동소수점 값을 반환
 */
setTimeout(() => {
    console.log(`프로그램 실행 시간: ${process.uptime()} 초`);
}, 3000); // 3초 후에 실행

process.addListener('exit', () => {
    console.log('프로세스가 종료됩니다.');
});

process.addListener("myevent", () => {
    console.log('MyEvent가 발생했습니다.');
});

process.emit('myevent'); // 'myevent' 이벤트를 강제로 발생시킴

//process.exit();
/**
 * 1. node에서 event등록 방법
 * 1) addListener('이벤트', 핸들러함수)
 * 2) on('이벤트', 핸들러함수)
 * 2. 이벤트를 강제로 발생시키고자 할 때는
 *    1) emit('이벤트 종류')
 */

var handler = function () {
    console.log('Process Exit...Bye Bye~~');
};

process.addListener('exit', handler);

process.on('myevent', function () {
    console.log('Hello I am MyEvent ~~~');
});

process.emit('myevent');


