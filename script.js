let slideIndex = 1;

showNow(slideIndex);

function nextSlide(next1) {
    showNow(slideIndex += next1);
}

function showingNow(next1) {
    showNow(slideIndex + next1);
}

function showNow(next1){
    let i;
    let slide = document.getElementsByClassName("slider");
    let radio = document.getElementsByClassName("slider-radio");

    if (next1 > 1){
        slideIndex = 1
    }

    if (next1 < 1){
        slideIndex = next1.length
    }

    for(i=0; i<slide.length; i++){
        slide[i].style.display = "none";
    }

     for(i=0; i<radio.length; i++){
        radio[i].className = radio[i].className.replace("active", "");
    }

    slide[slideIndex-1].style.display = "block";
    radio[slideIndex-1].className += "active";
}