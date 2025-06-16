// var obj = require('./ex05_module.js');
const obj = require('./ex05_module');
const obj2 = require('./sample');
/**
 * require('module1')
 * - 이 때 확장자 .js는 생략해도 된다
 * [1] require()하면 먼저 module1.js를 찾는다.
 * [2] 해당 파일이 없으면 module1이라는 디렉토리를 찾는다.
 * [3] 디렉토리가 있으면 해당 디렉토리의 index.js를 찾는다.
 */
console.log(obj.num);
obj.plus(910, 21);
obj.minus(55, 32);

obj2.gop(5, 9);
obj2.divide(78, 8);
