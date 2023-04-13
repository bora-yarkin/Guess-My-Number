"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//for testing log the random number to the console
console.log(secretNumber);

let score = 20;
//when the player wins store the score
let scores = [];

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (score > 1) {
    //if there is no number or the number is not between 1 and 20
    if (!guess || guess < 1 || guess > 20) {
      document.querySelector(".message").textContent =
        "Please Enter a number between 1 and 20!!";
      //if the player wins
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct Number!";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      //store the score in the scores array and calculate the highest value
      scores.push(score);
      let highScore = Math.max(...scores);
      document.querySelector(".highscore").textContent = highScore;

      //if the number is higher than the secret number
    } else if (guess > secretNumber) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      //if the number is lower than the secret number
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
    }
    //display the updated score
    document.querySelector(".score").textContent = score;
    //if the player loses
  } else {
    document.querySelector(".score").textContent = 0;
    document.querySelector(".message").textContent = "You lost the game";
    document.querySelector("body").style.backgroundColor = "#ff0000";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //for testing purposes log the updated secret number to the console
  console.log(secretNumber);
});
