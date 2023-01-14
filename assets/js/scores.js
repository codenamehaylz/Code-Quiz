var highscoreList = document.querySelector("#highscores");

renderHighscores()

//function for retrieving stored initials and scores
//TODO populate list items with player info
//TODO sort highscores into order

function renderHighscores() {
    var pastScores = JSON.parse(localStorage.getItem("scores"));
    console.log(pastScores);
    pastScores.forEach(function() {
        var hsListItem = document.createElement("li");
        highscoreList.appendChild(hsListItem);
    })
}
