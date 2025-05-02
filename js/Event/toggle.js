const addBtn = document.querySelector(".addBtn");
const removeBtn = document.querySelector(".removeBtn");
const toggleBtn = document.querySelector(".toggleBtn");
const boxEl = document.querySelector(".box");

const handleClick = ({ target }) => {
  if (target === addBtn) boxEl.classList.add("bg");
  if (target === removeBtn) boxEl.classList.remove("bg");
  if (target === toggleBtn) boxEl.classList.toggle("bg");
};

addBtn.addEventListener("click", handleClick);
removeBtn.addEventListener("click", handleClick);
toggleBtn.addEventListener("click", handleClick);

