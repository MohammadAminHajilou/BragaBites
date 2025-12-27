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
