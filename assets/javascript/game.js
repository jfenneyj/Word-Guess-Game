// variables
//////////////////////////////////
var guessWord = ["frizzy", "quacky", "jockey", "zombie", "object"];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var attemptsLeft = 10;
var display = "";
var userGuesses = [];


// Function
//////////////////////////////////////


// Randomly call words from array
var randomWord = guessWord[Math.floor(Math.random() * guessWord.length)];
var word = randomWord.split("");
console.log(word);

for (var i = 0; i < word.length; i++) {
  display = display + "_ "
  // split array into separate charactors
}
console.log(display);
$("#letters").text(display);
// input from the user

document.onkeyup = function (event) {
  if (event.which >= 48 && event.which <= 90) {



    if (attemptsLeft == 0) {
      alert("You lose")
    } else {
      var letter = event.key.toLowerCase();
      console.log(letter);
      for (var i = 0; i < word.length; i++) {

        console.log(word[i]);
        if (word[i] === letter) {
          console.log("Your right")
        }

      }
      attemptsLeft--;
      userGuesses.push(letter)
      console.log(userGuesses);
      var flag = true;
      for(var j = 0; j < word.length; j++){
        if(!userGuesses.includes(word[j])){
          flag = false;
        }
        console.log(userGuesses.includes(word[j]))
      }

      if(flag){
        console.log("win")
      }
    }

    $("#wrong").text(userGuesses)
    $("#left").text(attemptsLeft)



  }



}


// Display on to screen underscore and replace with userGuess letters


// If letter matches replace with letter and remove underscore


// after 10 attempts user losses and new word is implemented/or starts over


// if losses add 1 to loss score if wins add 1 to wins score