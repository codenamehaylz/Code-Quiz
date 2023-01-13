
// PSEUDOCODE
// Event listener on start button triggers function startGame
// TODO: Game wrapped up in startGame function
// Timer start (timer interval function)
// Question created and appended to page
// TODO: Event listener for click on choices, if statements to check if correct answer
//     incorrect = subtract time from clock, text underneath says wrong, incorrect sound
//     correct = text underneath says correct, correct sound, add to score.
// TODO: Question replaced with new one, created and appended, repeat.
// TODO: Game end if timer = 0 or all Qs answered.
// TODO: Display score and input for initials - stored this info to local storage
// TODO: Get info from local storage and display in highscore html
//     JSON stringify and JSON parse
// TODO: code clear button to remove stored highscores



//Declare variables using HTML elements here
var startBtn = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var questionsDiv = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");
var currentQIndex;
var choice1 = document.createElement("button");
var choice2 = document.createElement("button");
var choice3 = document.createElement("button");
var choice4 = document.createElement("button");
var choiceList = [choice1, choice2, choice3, choice4];
for (var i = 0; i<4; i++) {
    questionChoices.appendChild(choiceList[i]);
}


//timer function
var secondsLeft = 60;
function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.innerHTML = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //TODO add end game function
        }
    }, 1000);
}


//function to toggle elements to hide or display
function toggleHide(element) {
    if (element.classList.contains("start")) {
    element.setAttribute("class", "hide");
    } 
    else if (element.classList.contains("hide" || "feedback hide")) {
        element.setAttribute("class", "start");
    }
}

//function for generating new question
function generateQuestion(question) {
    questionTitle.innerHTML = question.question;
    for (var i = 0; i<4; i++) {
        choiceList[i].innerHTML = question.choices[i];
    }
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
        currentQIndex++;
        generateQuestion(questionObj[currentQIndex]);
    }
})