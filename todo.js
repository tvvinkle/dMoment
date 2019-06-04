const todoForm = document.querySelector(".js-todoForm"),
todoInput = todoForm.querySelector("input"),
todoList = document.querySelector(".js-todoList");

const TODOS_LS = "todos"
, todos=[];

function deleteTodo(){
//delete todo 
}

function saveTodos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function setTodo(txt){
       
    const list = document.createElement("li");
    const btn = document.createElement("button");
    const span =document.createElement("span");
    const id=todos.length+1;
    span.innerText = txt;
    
    list.appendChild(span);
    list.appendChild(btn);

    todoList.appendChild(list);

    const todoObj = {
        id :id,
        txt : txt
    }
    todos.push(todoObj); 
    saveTodos();
}

function handleSubmit(event){
    event.preventDefault();
    const inputValue = todoInput.value;
    setTodo(inputValue);
    todoInput.value="";
}

function loadTodo(){
    const savedtodos = localStorage.getItem(TODOS_LS);
    if( savedtodos !== null){
      JSON.parse(savedtodos).forEach(function(toDo){
        setTodo(toDo.txt);
      })
    } 
}


function init(){
loadTodo();
todoForm.addEventListener("submit", handleSubmit);
}

init();
