var highscoreList = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");

renderHighscores()

//function for retrieving stored initials and scores
function renderHighscores() {
    var pastScores = JSON.parse(localStorage.getItem("scores"));
    //sorts the scores into descending order
    if (pastScores !== null) {
        pastScores.sort(function(a,b) {
            return b.score - a.score;
        });
        //writes the list of scores onto the page
        for (var i = 0; i<pastScores.length; i++){
            var hsListItem = document.createElement("li");
            highscoreList.appendChild(hsListItem);
            hsListItem.textContent = pastScores[i].initials + " - " + pastScores[i].score;
        }
    }
}


//event listener on the 'clear highscores' button
clearBtn.addEventListener("click", function() {
    localStorage.removeItem("scores");
    highscoreList.innerHTML = "";
})