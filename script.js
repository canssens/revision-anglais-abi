const questions = [
    { word: "apple" },
    { word: "banana" },
    { word: "bread" },
    { word: "carrot" },
    { word: "cheese" },
    { word: "chicken" },
    { word: "egg" },
    { word: "fish" },
    { word: "grapes" },
    { word: "milk" },
    // Ajoutez d'autres aliments ici
];

let currentQuestion = 0;
let score = 0;
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
    questionText.textContent = `Quel est le mot anglais pour : ${questions[currentQuestion].word} ?`;
    answerInput.value = "";
    result.textContent = "";
}

function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = questions[currentQuestion].word;
    if (userAnswer === correctAnswer) {
        result.textContent = "Correct !";
        result.style.color = "green";
        score++;
    } else {
        result.textContent = `Incorrect. La réponse était : ${correctAnswer}`;
        result.style.color = "red";
    }
    scoreDisplay.textContent = `Score: ${score}`;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionText.textContent = "Quiz terminé !";
        answerInput.style.display = "none";
        submitButton.style.display = "none";
    }
}

submitButton.addEventListener("click", checkAnswer);

loadQuestion();
