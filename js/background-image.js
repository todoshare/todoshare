function randomBackgroundImage () {
	const imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"] 
	const backgroundImage = document.querySelector(".background-image")
	const imageNumber = Math.floor(Math.random() * imageArray.length)

	backgroundImage.style.backgroundImage = `url(image/${imageArray[imageNumber]})`
	backgroundImage.style.overflow = `hidden`
}
randomBackgroundImage()