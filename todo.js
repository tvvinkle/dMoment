const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODOS_LS = "todos";
let todos = [];

function deleteTodo(event) {

    const btn = event.target;
    const li = btn.parentNode;

    todoList.removeChild(li);

    const deletetodosLS = todos.filter(function(td) {
        return td.id !== parseInt(li.id);
    });

    todos = deletetodosLS;
    saveTodos();

}

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function setTodo(txt) {

    const list = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener("click", deleteTodo);
    const span = document.createElement("span");
    const id = todos.length + 1;
    span.innerText = txt;

    list.appendChild(span);
    list.appendChild(btn);
    list.id = id;

    todoList.appendChild(list);

    const todoObj = {
        id: id,
        txt: txt
    }
    todos.push(todoObj);
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    const inputValue = todoInput.value;
    setTodo(inputValue);
    todoInput.value = "";
}

function loadTodo() {
    const savedtodos = localStorage.getItem(TODOS_LS);
    if (savedtodos !== null) {
        JSON.parse(savedtodos).forEach(function(toDo) {
            setTodo(toDo.txt);
        })
    }
}


function init() {
    loadTodo();
    todoForm.addEventListener("submit", handleSubmit);
}

init();