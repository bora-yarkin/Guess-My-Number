"use strict";

/* console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".number").textContent = secretNumber;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score >= 1) {
    if (!guess) {
      document.querySelector(".message").textContent =
        "⛔️ No Number Entered!!";
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct Number!";
    } else if (guess > secretNumber) {
      document.querySelector(".message").textContent = "Too High";
      score--;
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
    }
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "You lost the game";
  }
});