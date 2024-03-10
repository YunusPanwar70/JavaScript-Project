const speech = new SpeechSynthesisUtterance();
let voices = [];
const voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name, i));
};

function speechVoice() {
    speech.voice = voices[voiceSelect.value];
};
voiceSelect.addEventListener("change", speechVoice);

const listenBtn = document.getElementById("btn");
function textSpeech() {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
};
listenBtn.addEventListener("click", textSpeech);