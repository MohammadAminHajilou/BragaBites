

document.addEventListener("DOMContentLoaded", () => {

    const galleryContainer = document.getElementById("galleryContainer");
    if (!galleryContainer) {
        console.error("galleryContainer NOT FOUND");
        return;
    }

    fetch("../json/gallery.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(({ id, title, date, category }) => {
                galleryContainer.insertAdjacentHTML("beforeend", `
                    <div class="galleryImageContainer" onclick="GalleryZoom(${id});">
                        <img src="../../images/gallery/galleryImage${id}.webp" alt="${title}" class="galleryImage loading="lazy"">
                        <div class="galleryImageContainerBottom">
                            <div class="galleryDate">${date}</div>
                            <div class="galleryTitle">${title}</div>
                            <div class="galleryCategory">${category}</div>
                        </div>
                    </div>
                `);
            });
        })
        .catch(err => console.error("FETCH ERROR:", err));

});







function GalleryZoom(num) {

    const zoomedImageContainer = document.getElementById("zoomedImageContainer");
    const close = document.getElementById("galleryZoomClose");


    if (zoomedImageContainer.style.display = "none") {
        zoomedImageContainer.style.display = "block";
    }
    if (zoomedImageContainer.style.animation = "none") {
        zoomedImageContainer.style.animation = "galleryzoompopin 0.3s ease-in-out forwards";
    }
    close.style.display = "block";
    close.style.animation = "opacity0to1 0.3s ease-in-out forwards";
    if(zoomedImageContainer.innerHTML = " "){
        zoomedImageContainer.innerHTML= `<img src="../../images/gallery/galleryImage${num}.webp" class="galleryZoomedImage">`
    }
}


function GalleryZoomClose(){
    const zoomedImageContainer = document.getElementById("zoomedImageContainer");
    const close = document.getElementById("galleryZoomClose");

    
    zoomedImageContainer.style.animation = "galleryzoompopout 0.3s ease-in-out forwards";
    zoomedImageContainer.offsetHeight;

    close.style.animation = "none";
    close.offsetHeight; 
    close.style.animation = "opacity1to0 0.3s ease-in-out forwards";

    setTimeout(() => {
        zoomedImageContainer.style.display = "none";
        close.style.display = "none";
        zoomedImageContainer.innerHTML = " ";
    }, 289);


}







function GalleryFilterOpen() {
    const close = document.getElementById("galleryFilterClose");
    const filter = document.getElementById("galleryFilterSection");

    filter.style.display = "flex";
    close.style.display = "block";
    filter.style.animation = "galleryfilterpopin 0.2s ease-in-out forwards";
    filter.offsetHeight;
    close.style.animation = "opacity0to1 0.2s ease-in-out forwards";

}


function GalleryFilterClose() {
    const close = document.getElementById("galleryFilterClose");
    const filter = document.getElementById("galleryFilterSection");

    filter.style.animation = "none";
    filter.offsetHeight; 

    filter.style.animation = "galleryfilterpopout 0.2s ease-in-out forwards";

    close.style.animation = "opacity1to0 0.3s ease-in-out forwards";

    setTimeout(() => {
        filter.style.display = "none";
        close.style.display = "none";
    }, 300);

}
