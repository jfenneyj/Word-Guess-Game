// variables
//////////////////////////////////
var guessWord = ["frizzy", "quacky", "jockey", "zombie", "object"];
var wins = 0;
var losses = 0;
var attemptsLeft = 10;
var display = "  _  ";
var userGuesses = [];
var wrongLetter;

// Function
//////////////////////////////////////


// Call a random word
var randomWord = guessWord[Math.floor(Math.random() * guessWord.length)];
console.log(randomWord);

// set up letter array

var word = randomWord.split("");
console.log(word);

// displays underscores
for (var i = 0; i < word.length; i++) {
  display = display + "_ "

}
console.log(display);
$("#letters").text(display);


document.onkeyup = function (event) {
  if (event.which >= 48 && event.which <= 90) {

    // checking to see if letter exist inside the word
    if (randomWord.indexOf(userGuesses) > -1) {
      console.log("yes");
    }
    else {
      wrongLetter.push(userGuesses);
      console.log(wrongLetter);
    }

    if (attemptsLeft == 0) {
      alert("You lose")
    } else {
      var letter = event.key.toLowerCase();
      console.log(letter);
      for (var i = 0; i < word.length; i++) {

        console.log(word[i]);
        if (word[i] === letter) {
          alert("Your right")
        }

      }
      attemptsLeft--;

      // addingletters to userGuess
      userGuesses.push(letter)
      console.log(userGuesses);

      // var flag = true;
      for (var j = 0; j < word.length; j++) {
        if (userGuesses.includes(word[j])) {
          // flag = false;

        }

      }
      console.log(userGuesses.includes(word[j]))
      // *update game with guess
      if (word[j] === userGuesses) {
        display[j] = userGuesses;
        remainingLetters--;
      }
    }

    if (flag) {
      console.log("win")
    }
  }
  $("#wrong").text(userGuesses)
  $("#left").text(attemptsLeft)
  // my adds
  $("#wins").text(wins)
  $("#losses").text(losses)
}



