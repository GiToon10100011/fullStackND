// print.mjs
export function printStar(num) {
    for (let i = 0; i < num; i++) {
        console.log('★★★★★');
    }
}
/**
 * ES6 모듈 사용 방법
1. 파일 확장자 변경
Node.js에서 ES6 모듈을 사용하려면, 
- 모듈 파일의 확장자를 .mjs로 변경하거나, 
- package.json 파일에서 "type": "module" 설정을 추가해야 합니다.

확장자를 .mjs로 변경: 모듈 파일을 .mjs 확장자로 저장하면 Node.js가 이를 ES6 모듈로 인식합니다.
package.json 설정 추가: 프로젝트의 package.json 파일에 
"type": "module"을 추가하면 .js 확장자를 가진 파일들도 ES6 모듈로 인식됩니다.
 * ---package.json--------
{
  "type": "module"
}
--------------------------
 */
