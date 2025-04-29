let dueDate = new Date(2025, 6, 1);
console.log(dueDate);

let today = new Date();
console.log(today);

let diff = dueDate - today;
console.log(Math.floor(diff / (24 * 60 * 60 * 1000))); //1000은 밀리초
