const questions = [
    { image: "images/apple.jpg", word: "apple" },
    { image: "images/banana.jpg", word: "banana" },
    { image: "images/bread.jpg", word: "bread" },
    { image: "images/carrot.jpg", word: "carrot" },
    { image: "images/cheese.jpg", word: "cheese" },
    { image: "images/chicken.jpg", word: "chicken" },
    { image: "images/egg.jpg", word: "egg" },
    { image: "images/fish.jpg", word: "fish" },
    { image: "images/grapes.jpg", word: "grapes" },
    { image: "images/milk.jpg", word: "milk" },
    // Ajoutez d'autres aliments ici
];

let currentQuestion = 0;
const foodImage = document.getElementById("food-image");
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");

function loadQuestion() {
    foodImage.src = questions[currentQuestion].image;
    questionText.textContent = "Quel est le mot anglais pour cette image ?";
    answerInput.value = "";
    result.textContent = "";
}

function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = questions[currentQuestion].word;
    if (userAnswer === correctAnswer) {
        result.textContent = "Correct !";
        result.style.color = "green";
    } else {
        result.textContent = `Incorrect. La réponse était : ${correctAnswer}`;
        result.style.color = "red";
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionText.textContent = "Quiz terminé !";
        foodImage.src = "";
        answerInput.style.display = "none";
        submitButton.style.display = "none";
    }
}

submitButton.addEventListener("click", checkAnswer);

loadQuestion();
