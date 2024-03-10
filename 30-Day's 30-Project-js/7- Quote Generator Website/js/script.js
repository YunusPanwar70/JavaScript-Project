const quote = document.getElementById("quote");
const author = document.getElementById("author")
const api_url = "https://api.quotable.io/random";


async function getquote(url) {
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.content;
};
getquote(api_url);


let button = document.getElementById("btn");
button.addEventListener("click", () => {
    getquote(api_url);
});

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=600,height=300")

});