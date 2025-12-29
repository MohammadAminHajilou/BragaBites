let currentSlide = 0;
const slides = document.querySelectorAll('.slideShowImage');
const dots = document.querySelectorAll('.homeTopSlideshowDot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function SlideShowNext() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function SlideShowPrevious() {
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

function SlideShow(index) {
    showSlide(index - 1); 
}


showSlide(currentSlide);


