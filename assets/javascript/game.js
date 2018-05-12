// variables
//////////////////////////////////
var guessWord = ["frizzy", "quacky", "jockey", "zombie", "object"];
var wins = 0;
var losses = 0;
var attemptsLeft = 10;
var display = "  _  ";
var userGuesses = [];
var wrongLetter = [];

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


function resetGame(){
  var randomWord = guessWord[Math.floor(Math.random() * guessWord.length)];
  console.log(randomWord);
  
  // set up letter array
  
  var word = randomWord.split("");
  console.log(word);
  display = "";
  // displays underscores
  for (var i = 0; i < word.length; i++) {
    display = display + "_ "
  
  }
  console.log(display);
  $("#letters").text(display);
   attemptsLeft = 10;

}



document.onkeyup = function (event) {
  if (event.which >= 48 && event.which <= 90) {

    if (attemptsLeft == 0) {
      losses++;
      resetGame();
    } else {
      var letter = event.key.toLowerCase();
      console.log(letter);

      if (userGuesses.indexOf(letter) == -1 && randomWord.indexOf(letter) > -1) {
        userGuesses.push(letter)
        // console.log(userGuesses);
        evaluateGuess(letter);
      }
      else if (randomWord.indexOf(letter) == -1) {
        wrongLetter.push(letter);
        attemptsLeft--;
      }


      function evaluateGuess(letter) {
        var positions = [];
// repalace underscore with letter?
        for (var c = 0; word[currentWordIndex].length; i++) {
          if (word[currentwordIndex][c] === letter){
            positions.push(c);
          }
        }
      }

      var word = randomWord.split("");

      var flag = true;
      
      for (var i = 0; i < word.length; i++) {
        if (userGuesses.indexOf(word[i]) == -1) {
          flag = false;

        }

      }
      if(flag == true) {
        wins++;
        resetGame();
      }
    }
  }




  $("#wrong").text(wrongLetter)
  $("#left").text(attemptsLeft)
  $("#wins").text(wins)
  $("#losses").text(losses)
}

 // // checking to see if letter exist inside the word
    // if (randomWord.indexOf(userGuesses) > -1) {
    //   console.log("yes");
    // }
    // else {
    //   wrongLetter.push(userGuesses);
    //   console.log(wrongLetter);
    // }

    //console.log(userGuesses.includes(word[j]))
      // *update game with guess
      // if (word[j] === userGuesses) {
      //   display[j] = userGuesses;
      //   remainingLetters--;
      // }
