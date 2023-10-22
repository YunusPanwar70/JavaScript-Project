const messageInput = document.getElementById("message-input");

document.getElementById("clickChange").addEventListener("click", () => {
    document.getElementById("message-output").innerHTML = messageInput.value;

    messageInput.value = "";
});