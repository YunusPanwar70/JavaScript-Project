let scrollContain = document.querySelector(".gallary");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContain.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContain.scrollLeft += evt.deltaY;
    scrollContain.style.scrollBehavior = "auto";
})
nextBtn.addEventListener("click", () => {
    scrollContain.style.scrollBehavior = "smooth";
    scrollContain.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContain.style.scrollBehavior = "smooth";
    scrollContain.scrollLeft -= 900;
});