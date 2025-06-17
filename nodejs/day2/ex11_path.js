//path 내장모듈: 파일의 경로 처리 등의 기능을 제공함
//path.sep : 운영체제에 따른 파일 경로 구분자를 적용함
var path = require('path');
var dirs = ['C:', 'Study', 'MyNode', 'module2'];
var dirsStr = dirs.join(path.sep);
console.log(dirsStr); //C:\Study\MyNode\module2
console.log('__dirname: ', __dirname);
var curPath = path.join(__dirname, 'node.exe'); 
//D:\BSA\myjava\reactboot\frontend\server\node.exe
console.log(curPath);

//curPath에서 디렉토리명, 파일이름, 확장자를 추출해보자
var upDir = path.dirname(curPath); 
//주어진 파일 경로에서 파일 이름을 제거하고 디렉토리 경로만 반환

var fname = path.basename(curPath); //파일명 반환(확장자포함)
var ext = path.extname(curPath); //확장자 반환

console.log('디렉토리명: ', upDir);
console.log('파일명: ', fname);
console.log('확장자명: ', ext);

const filePath = '/home/user/project/file.txt';

// 두 단계 상위 디렉토리 직접 얻기
const twoLevelsUp = path.join(filePath, '..', '..');
// path.join() 메서드는 경로를 올바르게 결합하고, 경로의 정규화를 수행하여
// 중복된 슬래시(//)를 제거하고 상대 경로(..)를 올바르게 처리한다
console.log('twoLevelsUp: ', twoLevelsUp); //twoLevelsUp:  \home\user

console.log(path.resolve(twoLevelsUp)); // 'D:\home\user'
//path.resolve(): 주어진 경로를 절대 경로로 변환
/**path.dirname()을 두 번 호출하여 두 단계 상위 디렉토리 경로를 얻거나,
 *  path.join()과 path.resolve()를 사용하여 상위 디렉토리를 계산할 수 있습니다. */
