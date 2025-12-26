function OpenNav() {
    const nav = document.getElementById("navbar");

    nav.style.display = "block";

    // reset animation
    nav.style.animation = "none";
    nav.offsetHeight; // force reflow

    nav.style.animation = "slideInNav 0.3s ease-in-out forwards";
}

function CloseNav() {
    const nav = document.getElementById("navbar");

    // reset animation
    nav.style.animation = "none";
    nav.offsetHeight; // force reflow

    nav.style.animation = "slideOutNav 0.3s ease-in-out forwards";

    setTimeout(() => {
        nav.style.display = "none";
    }, 300);


}
