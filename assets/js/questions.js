/*
PSEUDOCODE
- Event listener on start button triggers function startGame
- Game wrapped up in startGame function
- Timer start (timer interval function)
- Question created and appended to page
- Event listener for click on choices, if statements to check if correct answer
    - incorrect = subtract time from clock, text underneath says wrong, incorrect sound
    - correct = text underneath says correct, correct sound, add to score.
- Question replaced with new one, created and appended, repeat.
- Game end if timer = 0 or all Qs answered.
- Display score and input for initials - stored this info to local storage
- Get info from local storage and display in highscore html
    - JSON stringify and JSON parse
*/


//Declare variables using HTML elements here
var startBtn = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");


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
    else if (element.classList.contains("hide")) {
        element.setAttribute("class", "start");
    }
}


//Clicking start button starts the game
var startGame = function() {
    startTimer();
    toggleHide(startScreen);
}

startBtn.addEventListener("click", startGame);


