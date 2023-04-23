const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector(".write-name")
const nameWrap = document.querySelector(".name-wrap")
const nameClass= document.querySelector(".name")
const userName = localStorage.getItem("username")
const todoListWrap = document.querySelector(".todo-list-wrap")


function accessCheck(){
	
	if(userName !== null){
		handleToTitle(userName)
		todoListWrap.classList.remove("hidden")
	} else {
		loginForm.classList.remove("hidden")
	}
}
accessCheck()

function handleLoginSubmit(event) {
	event.preventDefault();
	saveLocal(loginInput.value)
	handleToTitle(loginInput.value)
}

function handleToTitle(name) {

	nameClass.innerText = `${name}`
	nameWrap.classList.remove("hidden")
	loginInput.value = ""
	loginForm.classList.add("hidden")
	todoListWrap.classList.remove("hidden")
}
function saveLocal(value){
	localStorage.setItem("username", value)
}

loginForm.addEventListener("submit", handleLoginSubmit)