function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var winsEl = document.getElementById("wins");
var wins = 0;
var lossesEl = document.getElementById("losses");
var losses = 0;
var maxGuesses = 9;
var guessesLeftEl = document.getElementById("guesses-left");
var guessesLeft = maxGuesses;
var guessesEl = document.getElementById("guesses");
var guesses = [];
var letterToGuess = letters[getRandomNumber(0, 25)];

function reset(won) {
    guessesLeft = maxGuesses;
    guessesLeftEl.textContent = guessesLeft;
    guesses = [];
    guessesEl.textContent = "";
    letterToGuess = letters[getRandomNumber(0, 25)];

    if (won) {
        wins++;
        winsEl.textContent = wins;
    } else {
        losses++;
        lossesEl.textContent = losses;
    }
}

function guess(guess) {
    if (letters.indexOf(guess)>-1) {
        if (guess === letterToGuess) {
            reset (true);
        } else {
            guessesLeft--;
            if (guessesLeft === 0) {
                reset (false);
            } else {
                guessesLeftEl.textContent = guessesLeft;
                guesses.push(guess);
                guessesEl.textContent = guesses;
            }
        }
    }
}

window.addEventListener("keyup", function(event){
    guess(event.key);
})