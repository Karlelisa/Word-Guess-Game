
/* 

let wordGuess = {
    "_" "_" "_" "_" "_" "_" : "Hawaii";
    "_" "_" "_" "_" : "Fiji";
    "_" "_" "_" "_" "_" : "Aruba" ;
    "_" "_" "_" "_" "_" "_" "_" : "Bahamas";
    "_" "_" "_" "_" "_" "_" "_" : "Jamaica";
 }
 */




let randomWords = ["thriller", "beat it", "pretty young thing", "billie jean", "the way you make me feel", "remember the time", "smooth criminal",
    "dirty diana", "you rock my world", "the girl is mine", "rock with you"];

let computerChoice = randomWords[Math.floor(Math.random() * randomWords.length)];

/* 
document.onkeyup = function () {
    let userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();

    console.log(userGuess);


    let computerChoice = randomWords[Math.floor(Math.random() * randomWords.length)];

    console.log(computerChoice);

} */

// Cited: https://youtu.be/tbLCMFp9QK4
//Simple hangman game

let m;
let count = 0;
let answerArray = [];
let guessesLeft = 10;
document.getElementById("guesses-left").innerHTML = guessesLeft;

// This code automatically sets the random word with its corresponding "_".
function startUp() {

    for (let i = 0; i < computerChoice.length; i++) {
        answerArray[i] = "_";
    }

    m = answerArray.join(" ");
    document.getElementById("answer").innerHTML = m;

}

startUp();

function letter() {
    let letter = document.getElementById("letter").value;

    if (letter.length > 0) {
        for (let i = 0; 1 < computerChoice.length; i++) {
            if (computerChoice[i] === letter) {

                answerArray[i] = letter;
            }
        }
        count++;
        document.getElementById("counter").innerHTML = "No of clicks: " + count;
        ("#game").click(function () {
            alert("I've been clicked!");
        }
        document.getElementById("answer").innerHTML = answerArray.join(" ");

    }
    if (count > 5) {
        document.getElementById("stat").innerHTML = "Come on - you should've guessed it by now";
    }
}

letter();








