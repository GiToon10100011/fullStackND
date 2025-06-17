//path.sep: OS의 파일 경로 구분자 (seperator)
//join(): 여러 경로를 결합하여 하나의 경로로 만듭니다.
//resolve(경로): 상대 경로를 절대 경로로 변환합니다.
//dirname(경로): 현재 파일의 디렉토리 이름을 반환합니다.
//basename(경로): 파일 이름을 반환합니다. (확장자포함)
//extname(경로): 파일의 확장자를 반환합니다.

const path = require("path");

const dirs = ["D:", "ezen-source", "nodejs", "day1"];
const dirStr = dirs.join(path.sep);
// const fileName = "ex16_path.js";
console.log("현재 경로:", __dirname);
console.log(path.join(__dirname, "public", "pizzaUI.html"));
const currentPath = path.join(dirStr, "public", "pizzaUI.html");
const upDir = path.dirname(currentPath);
console.log("조합된 경로:", currentPath);
console.log("상위 디렉토리:", upDir);
console.log("파일 이름:", path.basename(currentPath));
const ext = path.extname(currentPath);
console.log("파일 확장자:", ext); //.html

const filePath = "/home/user/project/file.txt";
const str = path.join(filePath, "..", "..");
console.log(str);

