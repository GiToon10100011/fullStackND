const todoForm = document.querySelector("#todo-form");
const removeAllBtn = document.querySelector(".remove-all");
const todoList = document.querySelector(".todo-list");
const TODOS_KEY = "todos";
let todos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
let id = 0;

const completeTodo = (e) => {
  // 이벤트 버블링을 방지하거나, closest를 사용하거나, currentTarget으로 이벤트핸들러가 지정된 요소 자체를 지정하여 미스가 안나게 설계해야함.
  e.stopPropagation();
  const target = e.target.closest("li");
  target.classList.toggle("line-through");
  todos = todos.map((todo) => {
    if (todo.id === Number(target.id)) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  // const localTodo = todos.find((todo) => todo.id === Number(target.id));
  // localTodo.completed = !localTodo.completed;
  saveTodos();
};

const removeTodo = (e) => {
  e.stopPropagation();
  const target = e.target.closest("li");
  todos = todos.filter((todo) => todo.id !== Number(target.id));
  saveTodos();
  showTodos();
};

const showTodos = () => {
  todoList.innerHTML = "";
  todos.map((todo) => {
    const li = document.createElement("li");
    const listItem = todoList.appendChild(li);
    listItem.id = todo.id;
    if (todo.completed) li.classList.add("line-through");
    listItem.innerHTML = `<span>${todo.text}</span>
            <div>
              <button>
                <svg
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56"
                    fill-rule="nonzero"
                  />
                </svg></button
              ><button>
                <svg
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
                  />
                </svg>
              </button>
            </div>`;
    const checkBtn = listItem.querySelector("button:first-child");
    const removeBtn = listItem.querySelector("button:last-child");
    checkBtn.addEventListener("click", completeTodo);
    removeBtn.addEventListener("click", removeTodo);
  });
};

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  showTodos();
};

const submitForm = (e) => {
  e.preventDefault();
  const inputValue = e.target.children[0].value;
  const todoObj = {
    text: inputValue,
    id: id++,
    completed: false,
  };
  todos.push(todoObj);
  saveTodos();
  e.target.children[0].value = "";
};

const clearTodos = () => {
  if (confirm("전부 지우시겠습니까?")) {
    localStorage.removeItem(TODOS_KEY);
    todos = [];
    showTodos();
  }
};

todoForm.addEventListener("submit", submitForm);
removeAllBtn.addEventListener("click", clearTodos);

showTodos();
