//Declare variables using HTML elements here
var startBtn = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var questionsDiv = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");
var feedbackDiv = document.querySelector("#feedback");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var playerInput = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var currentQIndex;

//creating buttons for the 'choices' div
var choiceList = [];
for (var i = 0; i<4; i++) {
    var choiceBtn = document.createElement("button");
    choiceList.push(choiceBtn);
    questionChoices.appendChild(choiceList[i]);
}

//timer function
var secondsLeft = 60;
function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if (secondsLeft === 0 || currentQIndex === 5) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

//function to toggle elements to hide or display
function toggleHide(element) {
    if (element.classList.contains("feedback") && element.classList.contains("hide")) {
        element.setAttribute("class", "feedback");
    }
    else if (element.classList.contains("feedback")) {
        element.setAttribute("class", "feedback hide");
    }
    else if (element.classList.contains("start")) {
    element.setAttribute("class", "hide");
    } 
    else if (element.classList.contains("hide")) {
        element.setAttribute("class", "start");
    }
}

//function for generating new question
function generateQuestion(question) {
    if (currentQIndex < 5) {
        questionTitle.textContent = question.question;
        for (var i = 0; i<4; i++) {
            choiceList[i].textContent = question.choices[i];
        }
    }
}

//function for showing 'wrong' or 'correct' feedback
function showFeedback(answer) {
    toggleHide(feedbackDiv);
    setTimeout(function(){
        toggleHide(feedbackDiv);
    }, 1000);
        if (answer === true){
            feedbackDiv.textContent = "Correct!"
        } else {
            feedbackDiv.textContent = "Wrong!"
        }
}

//function for ending the game
function endGame() {
    toggleHide(questionsDiv);
    toggleHide(endScreen);
    finalScore.textContent = secondsLeft;
}

//Clicking start button starts the game
var startGame = function() {
    startTimer();
    toggleHide(startScreen);
    toggleHide(questionsDiv);
    currentQIndex = 0;
    generateQuestion(questionObj[currentQIndex]);
}

startBtn.addEventListener("click", startGame);

//Event listener for clicking on question choices
questionChoices.addEventListener("click", function(event) {
    if (event.target.matches("button")) {
        var selected = event.target.textContent;
        if (selected === questionObj[currentQIndex].correctAnswer) {
            showFeedback(true);
            var correctAudio = new Audio("assets/sfx/correct.wav");
            correctAudio.play();
        }
        else {
            secondsLeft -= 10;
            showFeedback(false);
            var incorrectAudio = new Audio("assets/sfx/incorrect.wav");
            incorrectAudio.play();
        }
        currentQIndex++;
        generateQuestion(questionObj[currentQIndex]);
    }
})

//event listener on end game submit button, saves score to local storage
submitBtn.addEventListener("click", function() {
    location.href="highscores.html";
    var pastScores = JSON.parse(localStorage.getItem("scores")) || [];
    var player = {
        initials: playerInput.value,
        score: secondsLeft,
    }
    pastScores.push(player);
    localStorage.setItem("scores", JSON.stringify(pastScores));
})
