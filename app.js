let images;
let image = document.getElementById("image");
let timeout = 10000;
let fadeInTime = 2000;


let fetchImages = async () => {
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzaAupbvxvxC5RLT6772_gsyFa0tfF3wFUPS1b8DbAqA7HsYjxesDGQlMa4jpIw0_1UMw/exec'; // Replace with your /exec URL
	const images = await (await fetch(SCRIPT_URL)).json();
	console.log(images)
	return images;
}

let fadeIn = () => {
	const idx = Math.floor(Math.random() * images.length)
	image.src = images[idx].url;
	setTimeout(() => {
		image.className = "in"
		setTimeout(fadeOut, timeout);
	}, 2500)
}

let fadeOut = () => {
	image.className = 'out'
	setTimeout(fadeIn, fadeInTime);
}

let main = async () => {
	try {
		images = await fetchImages();
		setInterval(async () => {images = await fetchImages()}, 2 * 60 * 1000)
		fadeIn();
	} catch (e) {
		console.log(e)
	}
}

main()
