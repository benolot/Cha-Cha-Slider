var slideIndex = 1;
addPositions();
showSlide(slideIndex);
// Should really move all of the above into an intilisation function that is called on load

function jumpSlide(n) {
    showSlide(n);
}

// Named this silly name due to the cha cha slide song
function slideToTheRight() {
    var n = slideIndex+= 1; // Using var here for browser support, rather than using let or similar.
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

function addPositions() {
    var slides = document.getElementsByClassName("cc-slider_item");
    var slide_count = slides.length;
    for (var i = 0; i < slide_count; i++) {
        slides[i].innerHTML += ('<div class="cc-slider_position">' + (i + 1) + '/' + slide_count  + '</div>');
    }
}
