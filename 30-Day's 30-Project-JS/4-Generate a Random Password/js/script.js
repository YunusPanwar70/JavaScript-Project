// Button
const button = document.getElementById("btn");

// Password & Length
const passwordBox = document.getElementById("password");
const length = 12;

// Symbol and Alphabet and Number and Character  
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

// Create Password
function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * symbol.length)];
    }
    passwordBox.value = password;
}
button.addEventListener("click", createPassword);

// Copy Password
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy")
}
document.getElementById("CopyPassword").addEventListener("click", copyPassword);