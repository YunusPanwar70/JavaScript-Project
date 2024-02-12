let index = 0;

show_image(index);

function show_image(i) {
    let images = document.querySelectorAll(".container img");
    let dots = document.querySelectorAll(".dots .dot");

    index += i;

    if (index >= images.length) {
        index = 0;
    } else if (index < 0) {
        index = images.length - 1;
    }

    images.forEach((image, idx) => {
        image.style.display = idx === index ? "block" : "none";
    });

    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === index);
    });
}