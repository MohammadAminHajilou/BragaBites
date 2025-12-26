function OpenNav() {
    const nav = document.getElementById("navbar");
    const close = document.getElementById("navCloseIcon");

    nav.style.display = "block";
    close.style.display = "block";

    // reset animation
    nav.style.animation = "none";
    nav.offsetHeight; // force reflow

    nav.style.animation = "slideInNav 0.3s ease-in-out forwards";
    close.style.animation = "slideInNav 0.2s ease-in-out forwards";
}

function CloseNav() {
    const nav = document.getElementById("navbar");
    const close = document.getElementById("navCloseIcon");

    // reset animation
    nav.style.animation = "none";
    nav.offsetHeight; // force reflow

    nav.style.animation = "slideOutNav 0.3s ease-in-out forwards";
    close.style.animation = "none";
    close.offsetHeight; // force reflow

    close.style.animation = "slideOutNav 0.3s ease-in-out forwards";

    setTimeout(() => {
        nav.style.display = "none";
        close.style.display = "none";
    }, 300);


}
