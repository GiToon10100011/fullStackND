/**모듈화해서 내보내는 방법
 * 1. exports전역객체에 함수를 등록하여 내보내는 방법
 *      exports.변수1 = 값
 *      exports.변수2 = function(){...}
 * 2. 모듈 안에서 객체를 만들어서 할당하는 경우
 *      객체를 내보낼 때는 module.exports =객체
 *      이 때 주의사항. 객체는 하나만 내보낼 수 있다.
 * 3. 프로토타입 객체를 할당하는 경우
 */
const area = {
    square: function (length) {
        return length * length;
    },
    circle: function (radius) {
        return Math.PI * radius * radius;
    },
    reactangle: function (width, height) {
        return width * height;
    },
};

module.exports = area;
