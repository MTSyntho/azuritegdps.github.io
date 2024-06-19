function home() {
    var home = document.getElementById("homescrn");
    var credits = document.getElementById("creditscrn");
    home.classList.add("fadeIn");
    credits.classList.add("fadeOut");
    home.classList.remove("fadeOut");
    credits.classList.remove("fadeIn");
    home.style.pointerEvents = 'auto';
    credits.style.pointerEvents = 'none';
}

function dashboard() {
	var main = document.getElementById("main");
	var bar = document.getElementById("bottombar");
	main.classList.remove("fadeIn");
	main.classList.add("fadeOut");
	bar.classList.remove("taskUp");
	bar.classList.add("taskDown");
	window.location.href = 'https://azuritegd.ps.fhgdps.com/dashboard/';
}

function credits() {
    var home = document.getElementById("homescrn");
    var credits = document.getElementById("creditscrn");
    home.classList.add("fadeOut");
    credits.classList.add("fadeIn");
    home.classList.remove("fadeIn");
    credits.classList.remove("fadeOut");
    credits.style.pointerEvents = 'auto';
}
