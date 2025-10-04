let todoInput = document.querySelector(".input");
let addButton = document.querySelector(".button");
let showTodo = document.querySelector(".todo-container")
let todo = "";
let todoList = [];

//function for cfreating unique id
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (param) {
        let number = Math.random() * 16 | 0;
        let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16);
    });
}


addButton.addEventListener("click", (e) => {
    e.preventDefault(); //This prevent the submmission done by the form tag
    todo = todoInput.value;
    if (todo.length > 0){
        todoList.push({id: uuid, todo: todo, isCompleted: false})
    }
})

//Render todoList
function renderTodoList(todoList) {
    showTodo.innerHTML = '<input type="checkbox"> <label>m Sky diving </label> <button>Delete</button>'
}

renderTodoList(todoList);