// Menu Page Elements
const menuPage = document.getElementById('menuPage');
const gameMechanicsBtn = document.getElementById('gameMechanicsBtn');
const developersInfoBtn = document.getElementById('developersInfoBtn');

// Game Page Elements
const gamePage = document.getElementById('gamePage');
const backToMenuBtn = document.getElementById('backToMenuBtn');
const refreshBtn = document.getElementById('refreshBtn');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitBtn = document.getElementById('submitBtn');
const resultElement = document.getElementById('result');
const timeElement = document.getElementById('time');
const scoreElement = document.getElementById('currentScore');

// Info Page Elements
const gameMechanicsPage = document.getElementById('gameMechanicsPage');
const developersInfoPage = document.getElementById('developersInfoPage');
const backToMenuFromMechanicsBtn = document.getElementById('backToMenuFromMechanicsBtn');
const backToMenuFromDevelopersBtn = document.getElementById('backToMenuFromDevelopersBtn');

let questions = [
    { question: "GRAMMINGPOR", answer: "PROGRAMMING" },
    { question: "RIPTJAVASC", answer: "JAVASCRIPT" },
    { question: "MLHT", answer: "HTML" },
    { question: "SCS", answer: "CSS" },
    { question: "RITHMALGO", answer: "ALGORITHM" },
    { question: "VELOPERDE", answer: "DEVELOPER" },
    { question: "NOLOGYTECH", answer: "TECHNOLOGY" },
    { question: "NETINTER", answer: "INTERNET" },
    { question: "TERCOMPU", answer: "COMPUTER" },
    { question: "BOARDKEY", answer: "KEYBOARD" },
    { question: "USEMO", answer: "MOUSE" },
    { question: "REENSC", answer: "SCREEN" },
    { question: "BASEDATA", answer: "DATABASE" },
    { question: "VERSER", answer: "SERVER" },
    { question: "WORKNET", answer: "NETWORK" },
    { question: "RITYSECU", answer: "SECURITY" },
    { question: "RYPTIONENC", answer: "ENCRYPTION" },
    { question: "TOCOLPROO", answer: "PROTOCOL" },
    { question: "WIDTHBAND", answer: "BANDWIDTH" },
    { question: "WARESOFT", answer: "SOFTWARE" },
    { question: "WAREHARD", answer: "HARDWARE" },
    { question: "CATIONAPPLI", answer: "APPLICATION" },
    { question: "FACEINTER", answer: "INTERFACE" },
    { question: "GINGDEBUG", answer: "DEBUGGING" },
    { question: "ABLEVARIA", answer: "VARIABLE" },
    { question: "CTIONFUN", answer: "FUNCTION" },
    { question: "RARYLIB", answer: "LIBRARY" },
    { question: "WORKFRAME", answer: "FRAMEWORK" },
    { question: "SIONVER", answer: "VERSION" },
    { question: "DATEUP", answer: "UPDATE" },
    { question: "LOADDOWN", answer: "DOWNLOAD" },
    { question: "LOADUP", answer: "UPLOAD" },
    { question: "SITEWEB", answer: "WEBSITE" },
    { question: "MAINDO", answer: "DOMAIN" },
    { question: "TINGHOS", answer: "HOSTING" },
    { question: "SERBROW", answer: "BROWSER" },
    { question: "LAIME", answer: "EMAIL" },
    { question: "SWORDPASS", answer: "PASSWORD" },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

// Function to shuffle array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to start the game
function startGame() {
    gamePage.style.display = 'block';
    menuPage.style.display = 'none';
    questions = shuffleArray(questions); // Shuffle questions at start
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 120;
    scoreElement.textContent = score;
    timeElement.textContent = timeLeft;
    showQuestion();
    startTimer();
}

// Function to show a question
function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;
        answerInput.value = ''; // Clear the input
        answerInput.focus(); // Focus on the input
    } else {
        endGame();
    }
}

// Function to start the timer
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// Function to check the answer
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toUpperCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toUpperCase();

    if (userAnswer === correctAnswer) {
        score++;
        scoreElement.textContent = score;
        showResult("Correct", "correct");
    } else {
        showResult(`Incorrect. Correct answer: ${correctAnswer}`, "incorrect");
    }

    currentQuestionIndex++;
    setTimeout(showQuestion, 2000); // Show next question after 2 seconds
}

// Function to show the result with animation
function showResult(message, className) {
    resultElement.textContent = message;
    resultElement.className = 'result'; // Reset class
    resultElement.classList.add(className);
    resultElement.style.opacity = 1;

    setTimeout(() => {
        resultElement.style.opacity = 0;
    }, 2000); // Fade out after 2 seconds
}

// Function to end the game
function endGame() {
    clearInterval(timerInterval);
    alert(`Game Over! Your score: ${score}`); // Replace with your desired end-game behavior
    gamePage.style.display = 'none';
    menuPage.style.display = 'block';
}

// Function to load the scramble game
function loadScrambleGame() {
    menuPage.style.display = 'none';
    gamePage.style.display = 'block';
    startGame();
}

// Function for "Coming Soon" games
function comingSoon() {
    container.style.display = 'block';
    menuPage.style.display = 'none';
    
}
// Event listeners for menu buttons
gameMechanicsBtn.addEventListener('click', () => {
    menuPage.style.display = 'none';
    gameMechanicsPage.style.display = 'block';
});

developersInfoBtn.addEventListener('click', () => {
    menuPage.style.display = 'none';
    developersInfoPage.style.display = 'block';
});

// Event listeners for info page buttons
backToMenuFromMechanicsBtn.addEventListener('click', () => {
    gameMechanicsPage.style.display = 'none';
    menuPage.style.display = 'block';
});

backToMenuFromDevelopersBtn.addEventListener('click', () => {
    developersInfoPage.style.display = 'none';
    menuPage.style.display = 'block';
});

// Event listeners for game page buttons
backToMenuBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    gamePage.style.display = 'none';
    menuPage.style.display = 'block';
});

refreshBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    startGame();
});

submitBtn.addEventListener('click', checkAnswer);

// Event listener for Enter key
answerInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});