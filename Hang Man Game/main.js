var pickWord = function () {
    var words = ["joseph", "museum", "racoon", "dubai", "eighteen"]
    // pick a random words
    return words[Math.floor(Math.random() * words.length)]
}

var setupAnswerArray = function (word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray
}

// show the player their progress
var showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
};

var getGuess = function () {
    // Get a guess from the Player
    return prompt("Guess a letter, or click Cancel to stop playing.");
};

var updateGameState = function (guess, word, answerArray) {
    var appearances = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            appearances++;
        }
    }
    return appearances;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
    showPlayerProgress(answerArray);
    alert("Good job! The answer was " + answerArray.join(""));
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;


while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter 🤪");
    } else if (guess === guess.toUpperCase()) {
        alert("The letter should be lowercase 🤪");
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer(answerArray);




