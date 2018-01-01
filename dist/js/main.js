var slideIndex = 1;
showSlide(slideIndex);

function jumpSlide(n) {
    showSlide(n);
}

// Named this silly name due to the cha cha slide song
function slideToTheRight() {
    var n = slideIndex+= 1;
    var slides = document.getElementsByClassName("cc-slider_item");
    if (n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length;
    }
    showSlide(n)
}

// Named this silly name due to the cha cha slide song
function slideToTheLeft() {
    var n = slideIndex-= 1;
    var slides = document.getElementsByClassName("cc-slider_item");
    if (n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length;
    }
    showSlide(n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("cc-slider_item");
    var dots = document.getElementsByClassName("cc-slider_dot");
    if (n > slides.length) {
        slideIndex = 1;
    } 
    else if (n < 1) {
        slideIndex = slides.length;
    }
    else {
        slideIndex = n;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" cc-slider_active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " cc-slider_active";
}
