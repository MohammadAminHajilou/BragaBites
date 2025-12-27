function OpenNav() {
    const nav = document.getElementById("navbar");
    const close = document.getElementById("navCloseIcon");

    nav.style.display = "block";
    close.style.display = "block";


    nav.style.animation = "none";
    nav.offsetHeight; 

    nav.style.animation = "slideInNav 0.3s ease-in-out forwards";
    close.style.animation = "opacity0to1 0.2s ease-in-out forwards";
}

function CloseNav() {
    const nav = document.getElementById("navbar");
    const close = document.getElementById("navCloseIcon");


    nav.style.animation = "none";
    nav.offsetHeight; 

    nav.style.animation = "slideOutNav 0.3s ease-in-out forwards";
    close.style.animation = "none";
    close.offsetHeight; 

    close.style.animation = "opacity1to0 0.3s ease-in-out forwards";

    setTimeout(() => {
        nav.style.display = "none";
        close.style.display = "none";
    }, 300);


}


function OpenLang() {
    const langMenu = document.getElementById("languageMenu");
    const close = document.getElementById("closeLang");

    langMenu.style.display = "grid";
    close.style.display = "block";
    langMenu.style.animation = "none";
    langMenu.offsetHeight;

    langMenu.style.animation = "slideInLang 0.3s ease-in-out forwards";
    close.style.animation = "opacity0to1 0.2s ease-in-out forwards";
}


function CloseLang() {
    const langMenu = document.getElementById("languageMenu");
    const close = document.getElementById("closeLang");

    langMenu.style.animation = "none";
    langMenu.offsetHeight; 

    langMenu.style.animation = "slideOutLang 0.3s ease-in-out forwards";
    close.style.animation = "none";
    close.offsetHeight; 

    close.style.animation = "opacity1to0 0.3s ease-in-out forwards";

    setTimeout(() => {
        langMenu.style.display = "none";
        close.style.display = "none";
    }, 300);

}







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
    showSlide(index - 1); // index از 1 شروع شده تو HTML
}

// نمایش اولیه
showSlide(currentSlide);

// تغییر خودکار هر ۵ ثانیه