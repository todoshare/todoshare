
const todoForm = document.getElementById("todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list")
const todoContainer = document.querySelector(".todo-list-container")
const TODOKEY = "todos"
let toDos = []
function saveTodos() {
	localStorage.setItem(TODOKEY, JSON.stringify(toDos))
}
function deleteTodo(e) {
	e.preventDefault();
	const li =  e.target.parentElement
	toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
	li.remove()
	saveTodos()
}

function printTodo(newTodo) {
	const li = document.createElement("li")
	li.id = newTodo.id
	li.classList.add("todo-list-li")
	const span = document.createElement("span")
	span.classList.add("ellipsis")
	const div = document.createElement("div")
	div.innerText = "❌"
	div.addEventListener("click", deleteTodo)
	li.appendChild(span)
	li.appendChild(div)
	span.innerText = newTodo.text
	todoList.appendChild(li)
}

function handleToDoSubmit(e) {
	e.preventDefault();
	const newTodo = todoInput.value;
	const newTodoObj = {
		text: newTodo,
		id : Date.now(),
	}
	todoInput.value = ""
	toDos.push(newTodoObj)
	printTodo(newTodoObj)
	saveTodos()
}
todoForm.addEventListener("submit", handleToDoSubmit)

const savedTodos = localStorage.getItem(TODOKEY)

if(savedTodos !== null) {
	const parseTodos = JSON.parse(savedTodos)
	toDos = parseTodos
	parseTodos.forEach((item) =>  printTodo(item))
}