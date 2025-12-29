const fileInputContact = document.getElementById("imageUploadContact");
const fileNameContact = document.getElementById("fileNameContact");
document.addEventListener("change", () => {
if (fileInputContact.files.length > 0) {
    fileNameContact.textContent = fileInputContact.files[0].name;
}
});





