let currentSlide = 0;
const slides = document.querySelectorAll('.slideShowImage');
const dots = document.querySelectorAll('.homeTopSlideshowDot');
const slideshow = document.querySelectorAll('.homeTopSlideshowSection');


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



let dragStartX = 0;
let isDragging = false;
const dragThreshold = 50; 

const slideshowElement = document.querySelector('.homeTopSlideshowSection');

slideshowElement.addEventListener('touchstart', e => {
    dragStartX = e.touches[0].clientX;
}, { passive: true });

slideshowElement.addEventListener('touchend', e => {
    const dragEndX = e.changedTouches[0].clientX;
    handleDrag(dragStartX, dragEndX);
});

slideshowElement.addEventListener('mousedown', e => {
    isDragging = true;
    dragStartX = e.clientX;
});

slideshowElement.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;

    handleDrag(dragStartX, e.clientX);
});

slideshowElement.addEventListener('mouseleave', () => {
    isDragging = false;
});

function handleDrag(startX, endX) {
    const diff = startX - endX;

    if (Math.abs(diff) < dragThreshold) return;

    if (diff > 0) {
        SlideShowNext();
    } else {
        SlideShowPrevious();
    }
}


document.addEventListener("DOMContentLoaded", () => {

    const itemContainer = document.querySelector(".homeMiddleSection");
    fetch("../json/home.json")
        .then(res => res.json())
        .then(data => {
            itemContainer.innerHTML = "";
            data.forEach(({ id, title, price, portion , description}) => {
                itemContainer.insertAdjacentHTML("beforeend", `
                    <div class="homeItem" loading="lazy"><div class="homeItemImageContainer"><img loading="lazy" src="../../images/home/homeMiddle${id}.webp" class="homeItemImage" alt="${title}"><div class="homeItemPortion">For${portion}</div><div class="homeItemPrice">${price}€</div></div><div class="homeItemTitle">${title}</div><div class="homeItemDescription">${description}</div></div>
                `);
            });
            })
        .catch(err => console.error("FETCH ERROR:", err));
});

