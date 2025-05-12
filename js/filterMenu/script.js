const filterBtns = document.querySelectorAll(".menu-wrap ul li button");
const list = document.querySelector(".menu-list ul");
const listItems = document.querySelectorAll(".menu-list ul li");

const filterList = (e) => {
  let items = [...listItems];
  let target = e.target;
  let data = target.dataset.filter;
  filterBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  target.classList.add("active");

  const filteredItems = Array.from(items).filter(
    (el) => el.dataset.filter === data
  );

  if (data === "all") {
    list.innerHTML = items.map((el) => el.innerHTML).join("<br>");
  } else {
    list.innerHTML = filteredItems.map((el) => el.innerHTML).join("<br>");
  }
};

filterBtns.forEach((btn) => {
  btn.addEventListener("click", filterList);
});
