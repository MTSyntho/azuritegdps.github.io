var delayInMilliseconds = 1000;
setTimeout(function() {
    var splash = document.getElementById("splashscrn");
    var main = document.getElementById("main");
    var home = document.getElementById("homescrn");
    var credits = document.getElementById("creditscrn");
    var bar = document.getElementById("bottombar");
//    var load = document.getElementById("loadDASH"); // gd 2.2 reference :p
    splash.classList.add("fadeOut");
    main.classList.add("fadeIn");
    home.classList.add("fadeIn");
    credits.classList.add("fadeOut");
    bar.classList.add("taskUp");
    home.style.pointerEvents = 'auto';
    }, delayInMilliseconds);