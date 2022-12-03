const clickToChanges = document.getElementById("clickChanges");
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
clickToChanges.addEventListener("click", () => {
    let quotes = {
        " ― Albert Einstein ": "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.",

        "― Pierce Brown, Red Rising": "Man cannot be freed by the same injustice that enslaved it.",

        "Deepak Chopra": "“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”"

    };

    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    quoteElement.textContent = quote;
    authorElement.textContent = author;
});