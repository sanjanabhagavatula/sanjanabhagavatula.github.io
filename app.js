let images;
let image = document.getElementById("image");

let fetchImages = async () => {
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxgJQVEsxMe4Erb4UVdrNNLUlU6QBz9Q5iG5fuaZEbAH_YJ3lTyVRX-s6N7AjJ_fV-2RA/exec'; // Replace with your /exec URL
	const images = await (await fetch(SCRIPT_URL)).json();
	console.log(images)
	return images;
}

let fadeIn = () => {
	console.log("fading in image")
	const idx = Math.floor(Math.random() * images.length)
	console.log(image.style.opacity)
	image.src = images[idx].url;
	image.className = "in"
	setTimeout(fadeOut, 5000);
}

let fadeOut = () => {
	console.log("fading out image");
	image.className = 'out'
	console.log(image.style.opacity)
	fadeIn();
}

let main = async () => {
	try {
		images = await fetchImages();
		fadeIn();
	} catch (e) {
		console.log(e)
	}
}

main()
