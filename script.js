const quiz = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "London",
            b: "Paris",
            c: "Berlin"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: {
            a: "Jupiter",
            b: "Saturn",
            c: "Earth"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the smallest country in the world?",
        answers: {
            a: "China",
            b: "Russia",
            c: "Vatican City"
        },
        correctAnswer: "c"
    }
];


const quizForm = document.getElementById("quiz-form");
const submitQuizButton = document.getElementById("submit-quiz");
const resultsSection = document.getElementById("results");

let currentQuestion = 0;
let userAnswers = [];

function displayQuestion() {
    // Get the current question from the quiz array
    const currentQuizQuestion = quiz[currentQuestion];

    // Display the current question and its answer choices
    const questionElement = document.createElement("h3");
    questionElement.textContent = currentQuizQuestion.question;
    quizForm.appendChild(questionElement);

    for (let answer in currentQuizQuestion.answers) {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "question-" + currentQuestion;
        radio.value = answer;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(currentQuizQuestion.answers[answer]));
        quizForm.appendChild(label);
    }
}

function displayNextQuestion() {
    // Remove the current question and answer choices from the quiz form
    while (quizForm.firstChild) {
        quizForm.removeChild(quizForm.firstChild);
    }

    // Increment the current question index
    currentQuestion++;

    // If we've displayed all the questions, show the results
    if (currentQuestion >= quiz.length) {
        displayResults();
    } else { // Otherwise, display the next question
        displayQuestion();
    }
}

function displayResults() {
    // Hide the quiz form and show the results section
    quizForm.style.display = "none";
    resultsSection.style.display = "block";

    // Calculate the user's score
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
        if (userAnswers[i] === quiz[i].correctAnswer) {
            score++;
        }
    }

    // Display the user's score
    const scoreElement = document.createElement("p");
    scoreElement.textContent = "You scored " + score + " out of " + quiz.length + "!";
    resultsSection.appendChild(scoreElement);
}

displayQuestion();

submitQuizButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Save the user's answer
    const selectedAnswer = quizForm.querySelector('input[name="question-' + currentQuestion + '"]:checked').value;
    userAnswers[currentQuestion] = selectedAnswer;

    // Display the next question
    displayNextQuestion();
});

function displayResults() {
    // Hide the quiz form and show the results section
    quizForm.style.display = "none";
    resultsSection.style.display = "block";

    // Calculate the user's score
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
        if (userAnswers[i] === quiz[i].correctAnswer) {
            score++;
        }
    }

    // Display the user's score
    const scoreElement = document.createElement("p");
    scoreElement.textContent = "You scored " + score + " out of " + quiz.length + "!";
    resultsSection.appendChild(scoreElement);
}


submitQuizButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Save the user's answer
    const selectedAnswer = quizForm.querySelector('input[name="question-' + currentQuestion + '"]:checked').value;
    userAnswers[currentQuestion] = selectedAnswer;

    // Display the next question
    displayNextQuestion();
});
