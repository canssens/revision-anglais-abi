const questions = [
    { french: "pomme", english: "apple" },
    { french: "banane", english: "banana" },
    { french: "pain", english: "bread" },
    { french: "carotte", english: "carrot" },
    { french: "fromage", english: "cheese" },
    { french: "poulet", english: "chicken" },
    { french: "oeuf", english: "egg" },
    { french: "poisson", english: "fish" },
    { french: "raisins", english: "grapes" },
    { french: "lait", english: "milk" },
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
    questionText.textContent = `Quel est le mot anglais pour : ${questions[currentQuestion].french} ?`;
    answerInput.value = "";
    result.textContent = "";
}

function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = questions[currentQuestion].english;
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
