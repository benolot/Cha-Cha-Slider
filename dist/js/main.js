var ccs_slideIndex = 1;

window.addEventListener('load', ccs_setupSlider);

function ccs_setupSlider() {
    ccs_addControls();
    ccs_addPositions();
    ccs_showSlide(ccs_slideIndex);
}

function ccs_jumpSlide(n) {
    ccs_showSlide(n);
}

// Named this silly name due to the cha cha slide song
function ccs_slideToTheRight() {
    var n = ccs_slideIndex+= 1; // Using var here for browser support, rather than using let or similar.
    var slides = document.getElementsByClassName("cc-slider_item");
    if (n > slides.length) {
        ccs_slideIndex = 1;
    } 
    if (n < 1) {
        ccs_slideIndex = slides.length;
    }
    ccs_showSlide(n)
}

// Named this silly name due to the cha cha slide song
function ccs_slideToTheLeft() {
    var n = ccs_slideIndex-= 1;
    var slides = document.getElementsByClassName("cc-slider_item");
    if (n > slides.length) {
        ccs_slideIndex = 1;
    } 
    if (n < 1) {
        ccs_slideIndex = slides.length;
    }
    ccs_showSlide(n);
}

function ccs_showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("cc-slider_item");
    var dots = document.getElementsByClassName("cc-slider_dot");
    if (n > slides.length) {
        ccs_slideIndex = 1;
    } 
    else if (n < 1) {
        ccs_slideIndex = slides.length;
    }
    else {
        ccs_slideIndex = n;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" cc-slider_active", "");
    }
    slides[ccs_slideIndex-1].style.display = "block";
    dots[ccs_slideIndex-1].className += " cc-slider_active";
}

function ccs_addPositions() {
    var slides = document.getElementsByClassName("cc-slider_item");
    var slide_count = slides.length;
    for (var i = 0; i < slide_count; i++) {
        slides[i].innerHTML += ('<div class="cc-slider_position">' + (i + 1) + '/' + slide_count  + '</div>');
    }
}

function ccs_addControls() {
    document.getElementById('cc-slider').innerHTML += '<a class="cc-slider_prev" onclick="ccs_slideToTheLeft()">&#10094;</a><a class="cc-slider_next" onclick="ccs_slideToTheRight()">&#10095;</a>';
}
