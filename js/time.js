function getClock () {
	const date = new Date()
	const hour = String(date.getHours()).padStart(2,"0")
	const minute = String(date.getMinutes()).padStart(2,"0")

	const timeDiv = document.querySelector(".time")

	timeDiv.innerText = `${hour} : ${minute}`
}
getClock()
setInterval(getClock, 1000)