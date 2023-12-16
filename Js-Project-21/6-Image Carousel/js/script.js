let index = 0;

show_image(index);

function show_image(i) {
    index += i;

    let image = document.getElementsByClassName("image")

    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < image.length; i++) {
        image[i].style.display = "none";

        for (let j = 0; j < dots.length; j++) {
            dots[i].className = dots[i].className.replace("active", "");
            if (index > image.length - 1) {
                index = 0;
                if (index < 0) {
                    index < image.length - 1;

                    image[index].style.display = "block";
                    dots[index].className += " active";
                };
            };
        };
    };
};