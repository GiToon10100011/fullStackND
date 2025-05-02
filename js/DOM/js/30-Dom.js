//태그 생성하기
let hTitle = document.createElement("h1");
//태그 속에 내용물 넣기 .innerHtml
hTitle.innerHTML = "제목생성";

//생성된 태그 body 붙이기
// 자식요소 붙이기
document.body.append(hTitle);
