document.addEventListener("DOMContentLoaded", () => {

    const galleryContainer = document.getElementById("galleryContainer");
    const searchInput = document.getElementById("gallerySearchInput");
    const sortRadios = document.querySelectorAll('input[name="sortOrder"]');
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]');

    if (!galleryContainer) {
        console.error("galleryContainer NOT FOUND");
        return;
    }

    
    let galleryData = [];
    let currentSearch = "";
    let currentSort = "latest";
    let activeCategories = new Set();


    categoryCheckboxes.forEach(cb => {
        if (cb.checked) {
            const category = cb.parentElement.textContent.trim();
            activeCategories.add(category);
        }
    });

    
    fetch("../json/gallery.json")
        .then(res => res.json())
        .then(data => {
            galleryData = data;
            applyFilters();
        })
        .catch(err => console.error("FETCH ERROR:", err));

    
    function renderGallery(items) {
        galleryContainer.innerHTML = "";

        if (items.length === 0) {
            galleryContainer.innerHTML = `<p style="font-size:3rem; padding:10px;">❌</p>`;
            return;
        }

        items.forEach(({ id, title, date, category }) => {
            galleryContainer.insertAdjacentHTML("beforeend", `
                <div class="galleryImageContainer" onclick="GalleryZoom(${id});">
                    <img
                        src="../../images/gallery/galleryImage${id}.webp"
                        alt="${title}"
                        class="galleryImage"
                        loading="lazy"
                    >
                    <div class="galleryImageContainerBottom">
                        <div class="galleryDate">${date}</div>
                        <div class="galleryTitle">${title}</div>
                        <div class="galleryCategory">${category}</div>
                    </div>
                </div>
            `);
        });
    }

    
    function applyFilters() {
        let result = [...galleryData];

        
        if (currentSearch !== "") {
            result = result.filter(item =>
                item.title.toLowerCase().includes(currentSearch)
            );
        }

        
        result = result.filter(item =>
            activeCategories.has(item.category)
        );

        
        result.sort((a, b) => {
            const da = new Date(a.date);
            const db = new Date(b.date);
            return currentSort === "latest" ? db - da : da - db;
        });

        renderGallery(result);
    }

    


    searchInput.addEventListener("input", e => {
        currentSearch = e.target.value.trim().toLowerCase();
        applyFilters();
    });

    
    sortRadios.forEach((radio, index) => {
        radio.addEventListener("change", () => {
            currentSort = index === 0 ? "latest" : "oldest";
            applyFilters();
        });
    });

    
    categoryCheckboxes.forEach(cb => {
        cb.addEventListener("change", e => {
            const category = e.target.parentElement.textContent.trim();

            if (e.target.checked) {
                activeCategories.add(category);
            } else {
                activeCategories.delete(category);
            }

            applyFilters();
        });
    });

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
