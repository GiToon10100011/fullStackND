const obj = require('./sample2');
console.log(obj.calc.add(10, 20));
// obj.printStar(3); //이리하면 안된다 index.js에서 print로 받았으므로 obj.print(3)로 해야 함
obj.print(3);
console.log(obj.shape.square(9));
