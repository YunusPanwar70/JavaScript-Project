const messageInput = document.getElementById("message-input");
const clickToChange = document.getElementById("clickChange");
const mesgOutPut = document.getElementById("message-output");

function convertUpperCase() {
    mesgOutPut.innerHTML = messageInput.value;
    messageInput.value = "";
};
clickToChange.addEventListener("click", convertUpperCase);