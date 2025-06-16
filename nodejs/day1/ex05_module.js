/**모듈화해서 내보내는 방법
 * 1. exports전역객체 이용: exports.프로퍼티
   2. module.exports이용 :module.exports=프로퍼티
   ----------------------------------
   exports	: 값 자체를 할당하는 것이 아닌 외부로 보낼 요소를
   			  exports 객체의 프로퍼티 또는 메서드로 추가한다
   module.exports : 객체에 하나의 값(기본자료형,함수,객체)만 
   			  할당할 수 있다.
    ----------------------------------
 */
exports.num = 100;
exports.plus = function (a, b) {
    console.log(`%d + %d = %d`, a, b, a + b);
};
exports.minus = (a, b) => {
    console.log(`%d - %d = %d`, a, b, a - b);
};
