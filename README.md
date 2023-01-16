# Code Quiz

## Description

This is a timed multiple-choice coding quiz which runs in the browser. The user will have 60 seconds to answer all the questions, after which they can enter their initials and save their score on the highscores page. Incorrect answers will take 10 seconds off the time, and if the timer runs out the game will end. The user's final score is the number of seconds left on the clock when the game ends.

The purpose of this project was to test my Javascript skills, particularly in manipulating the DOM, saving and retrieving data in local storage, using timing events, and using event listeners.

[Click here](https://codenamehaylz.github.io/Code-Quiz/index.html) to view the deployed application.

![Screenshot of quiz homepage](/assets/images/codequizscreen1.png)
![Screenshot of quiz question](/assets/images/codequizscreen2.png)
![Screenshot of highscores page](/assets/images/codequizscreen3.png)

## Features

When the user selects an answer to a question, a different noise will play depending on if the answer was correct or incorrect. The words 'correct!' or 'wrong!' will also display on the page for a second.

User submitted scores will be stored locally and will continue to show even if the user closes the window or refreshes. The scores will also be displayed in descending order, with the highest score at the top. The user can clear all scores from the page and local storage by pressing the 'Clear Highscores' button.

## License

MIT License.