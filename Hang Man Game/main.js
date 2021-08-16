// create an array of words
var words = ["commandment", "computer", "language", "controversy", "amazing", "government"]
// pick a random words
var word = words[Math.floor(Math.random() * words.length)]

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
// The game loop
while (remainingLetters > 0) {
    // show the player their progress
    alert(answerArray.join("."));
    // Get a guess from the Player
    var guess = prompt(
        "Guess a letter or click cancel to stop playing 🤝 "
    );
    if (guess === null) {
        // exit the game loop
        break;
        // The length of the letter should be
    } else if (guess.length !== 1) {
        alert("Please enter a single letter 🤪 ");
    } else if (guess.toLowerCase() !== guess) {
        alert("Please your letter should be lower case 😏 ");
    } else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
alert(answerArray.join(" "));
alert("Good job! The answer was " + word.toUpperCase());



