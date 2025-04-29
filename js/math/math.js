// 임의의 숫자 발생시키기
let rnd = Math.random();
console.log(rnd);
//0~1의 숫자가 생성돼서 기준을 설정해줘야함.
// 0~100의 숫자가 생성
console.log(rnd * 100);

let rnd2 = Math.floor(Math.random() * 10);

let menu = ["도시락", "김밥", "써브웨이", "순대"];

let randomMenu = Math.floor(Math.random() * menu.length);

console.log(`오늘의 추천 메뉴는 ${menu[randomMenu]}`);
