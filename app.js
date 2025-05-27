let images;
let image = document.getElementById("image");

let fetchImages = async () => {
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzaAupbvxvxC5RLT6772_gsyFa0tfF3wFUPS1b8DbAqA7HsYjxesDGQlMa4jpIw0_1UMw/exec'; // Replace with your /exec URL
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
