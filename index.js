let todoInput = document.querySelector(".input");
let addButton = document.querySelector(".button");
let todo = "";
let todoList = [];

//A function for cfreating unique id
function uuid() {
    return 
}


addButton.addEventListener("click", (e) => {
    e.preventDefault(); //This prevent the submmission done by the form tag
    todo = todoInput.value;
    if (todo.length > 0){
        todoList.push({id: uuid})
    }
})