// 버블링: 자식에서 부모로 이벤트가 전파됨

document.querySelector(".parent1").addEventListener("click", (e) => {
  console.log("parent1");
});
document.querySelector(".child1").addEventListener("click", (e) => {
  console.log("child1");
});

// 캡처링: 부모에서 자식으로 이벤트가 전파됨

document.querySelector(".parent2").addEventListener(
  "click",
  (e) => {
    console.log("parent2");
  },
  { capture: true }
);
document.querySelector(".child2").addEventListener(
  "click",
  (e) => {
    console.log("child2");
  },
  { capture: true }
);
