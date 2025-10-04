// Select elements
let todoInput = document.querySelector(".input");
let addButton = document.querySelector(".button");
let showTodo = document.querySelector(".todo-container");
let todo = "";

// Load todos from localStorage
let todoList = JSON.parse(localStorage.getItem("todo")) || [];

// Generate unique IDs
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (param) {
    let number = Math.random() * 16 | 0;
    let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
    return randomNumber.toString(16);
  });
}

// Add new todo
addButton.addEventListener("click", (e) => {
  e.preventDefault();

  const todo = todoInput.value.trim();
  if (todo.length > 0) {
    todoList.push({ id: uuid(), todo: todo, isCompleted: false });
    renderTodoList(todoList);
    localStorage.setItem("todo", JSON.stringify(todoList));
    todoInput.value = "";
    todoInput.focus();
  }
});

// Handle check + delete
showTodo.addEventListener("click", (e) => {
  const key = e.target.dataset.key;
  const delTodoKey = e.target.dataset.todokey;

  // Toggle complete
  if (key) {
    todoList = todoList.map(item =>
      item.id === key ? { ...item, isCompleted: !item.isCompleted } : item
    );
  }

  // Delete item
  if (delTodoKey) {
    todoList = todoList.filter(item => item.id !== delTodoKey);
  }

  localStorage.setItem("todo", JSON.stringify(todoList));
  renderTodoList(todoList);
});

// Render todos
function renderTodoList(list) {
  if (list.length === 0) {
    showTodo.innerHTML = `<p style="color:white;text-align:center;">No wishlist items yet.</p>`;
    return;
  }

  showTodo.innerHTML = list.map(({ id, todo, isCompleted }) => `
    <div class="todo-item">
      <input class="t-checkbox" id="item-${id}" type="checkbox" data-key="${id}" ${isCompleted ? "checked" : ""}>
      <label for="item-${id}" class="todo-text ${isCompleted ? "checked-todo" : ""}" data-key="${id}">${todo}</label>
      <button class="del-btn" data-todokey="${id}">🗑</button>
    </div>
  `).join("");
}

// Initial render
renderTodoList(todoList);
