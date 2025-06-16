/* 전역객체
1. console : 콘솔창에 출력할 때 사용
2. process : 프로세스 실행 정보를 다루는 객체
3. exports : 모듈을 다루는 객체
*/
console.log('Hello World');
console.log('정수 출력하기: %d', 555);
console.log('실수: %d', 123.456);
console.log('실수: %s', (123.456).toFixed(2)); //toFixed()가 문자열을 반환
console.log('문자열 출력하기: %s', 'Hi NodeJS~~');
console.log('%d%% 할인~', 80); //%문자를 출력하고자 할 때 %%

let obj = {
    num: 1,
    name: '홍길동',
    age: 22,
};
console.log('JSON객체 출력하기: %j', obj);
console.dir(obj);
console.table([obj, { num: 2, name: '이화영', age: 20 }]); //배열에 객체를 담아 넣으면 객체 속성들이 테이블 형식으로 표현됨

let result = 0;
console.time('sum'); //시간 측정 시작
for (var i = 1; i <= 10000; i++) {
    result += i;
}
console.timeEnd('sum'); //시간 측정 종료
console.log('1~10000까지의 누적합 result: %d', result);

console.error('에러를 출력 (x)를 표시함');
console.warn('경고를 출력 (!) 표시');
console.debug('디버깅 관련 정보');
console.info('정보 출력');
console.log('로그 출력');

console.assert(1 == 2); //검증할 때 사용(Assertion)
console.assert(obj.name == '홍길동');
/* console.assert() 메서드는 조건이 false일 때만 메시지를 출력. 검증이 잘 되면 아무것도 출력하지 않습니다. */

console.assert(1 + 1 === 2, '1 + 1 should be 2'); // 아무것도 출력되지 않음
console.assert(1 + 1 === 3, '1 + 1 should be 3'); // 'Assertion failed: 1 + 1 should be 3' 출력
