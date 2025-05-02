let btns = document.querySelectorAll(".pager > li");
let banners = document.querySelectorAll(".main-slider > li");

btns.forEach((btn, id) =>
  btn.addEventListener("click", () => {
    btns.forEach((b, i) => {
      b.classList.remove("active");
      banners[i].classList.remove("active");
    });
    btn.classList.add("active");
    banners[id].classList.add("active");
  })
);
