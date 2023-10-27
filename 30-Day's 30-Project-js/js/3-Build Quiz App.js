const question = [{
        question: " Which is larget animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: ture },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest contry in the world?",
        answer: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shir Lanka", correct: false },
        ]
    },

    {
        question: "Which is the largest desert in the world?",
        answer: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antactica", correct: true },
        ]
    },
    {

        question: "Which is the smallest continent in the world?",
        answer: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },

        ]
    },
];

const questionElement = document.getElementById("question");

const answerButton = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");

let cureentQuestionIndex = 0;

let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = question[cureentQuestionIndex];
    let questionNo = cureentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    cureentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button);
    });
};

startQuiz();