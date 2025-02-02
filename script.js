document.addEventListener("DOMContentLoaded", function () {
    // Select all images
    const images = document.querySelectorAll(".gallery img");

    images.forEach(image => {
        image.addEventListener("click", function () {
            const imageName = this.getAttribute("alt"); // Get image alt name
            window.open(`description.html?image=${imageName}`, "_blank"); // Open description page in a new tab
        });
    });
});
