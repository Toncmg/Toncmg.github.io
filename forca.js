
let word = "Jairton";

let correctLetters = [];
for (let i = 0; i < word.length; i++) {
  correctLetters[i] = "_";
}

let remainingAttempts = 6;
let message = "";

document.getElementById("word").innerHTML = correctLetters.join(" ");
document.getElementById("remainingAttempts").innerHTML = "Remaining Attempts: " + remainingAttempts;

const alphabet = "abcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < alphabet.length; i++) {
  let button = document.createElement("button");
  button.innerHTML = alphabet[i];
  button.onclick = function() {
    guess(alphabet[i]);
  };
  document.getElementById("buttons").appendChild(button);
}
function guess(letter) {
    if (correctLetters.indexOf(letter) !== -1 ||
        document.getElementById("buttons").innerHTML.indexOf(letter) === -1) {
      message = "You already tried this letter.";
    } else {
      let found = false;
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          correctLetters[i] = letter;
          found = true;
        }
      }
  
      document.getElementById("word").innerHTML = correctLetters.join(" ");
      document.getElementById("remainingAttempts").innerHTML = "Remaining Attempts: "
      if (!found) {
        remainingAttempts--;
        message = "Wrong Letter!";
      }
  
      if (correctLetters.join("") === word) {
        message = "Congratulations! You Guessed my name!";
        disableButtons();
      } else if (remainingAttempts === 0) {
        message = "You Lose! Press F5 to try again";
        disableButtons();
      }
    }
  
    document.getElementById("message").innerHTML = message;
    document.getElementById("remainingAttempts").innerHTML =
 "Remaining Attempts: " + remainingAttempts;
  }
  
  function disableButtons() {
    let buttons = document.querySelectorAll("#buttons button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
