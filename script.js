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
    { french: "salé", english: "salty" },
    { french: "sucré", english: "sweet" },
    { french: "cremeux", english: "creamy" },
    { french: "juteux", english: "juicy" },
    { french: "savoureux", english: "tasty" },
    { french: "croquant", english: "crunchy" },
    { french: "croustillant", english: "crispy" },
    { french: "dur à macher", english: "chewy" },
    { french: "épicé", english: "spicy" },
    { french: "limonade", english: "lemonade" },
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
    answerInput.focus(); // Sélectionne automatiquement le champ de saisie
}

function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = questions[currentQuestion].english;
    if (userAnswer === correctAnswer) {
        result.textContent = "Correct !";
        result.style.color = "green";
        score++;
        confetti();
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

answerInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

loadQuestion();
