"use strict";
let playerOne = document.querySelector(".player--0");
let playerTwo = document.querySelector(".player--1");

let playerOneScore = document.querySelector("#score--0");
let playerTwoScore = document.querySelector("#score--1");
let playerOneCurrent = document.querySelector("#current--0");
let playerTwoCurrent = document.querySelector("#current--1");
let rollNumber = document.querySelector(".btn--roll");
let holdBtn = document.querySelector(".btn--hold");
let NewBtn = document.querySelector(".btn--new");

let dice = document.querySelector(".dice");

// Intialization
playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
let activePlayer = 0;
let current = 0;
let currentPlayer = 0;
dice.style.display = "none";
let scores = [0, 0];

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  current = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = current;

  playerOne.classList.toggle("player--active");
  playerTwo.classList.toggle("player--active");
};

rollNumber.addEventListener("click", () => {
  let diceNumber = Math.trunc(Math.random() * 6 + 1);
  console.log(diceNumber);
  dice.style.display = "";
  dice.src = `dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
    current += diceNumber;
    document.querySelector(`#current--${activePlayer}`).textContent = current;
  } else {
    switchPlayer();
  }
});

holdBtn.addEventListener("click", () => {
  scores[activePlayer] += current;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 50) {
    rollNumber.style.display = "none";
    holdBtn.style.display = "none";
    dice.style.display = "none";
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  } else {
    switchPlayer();
  }
});

NewBtn.addEventListener("click", () => {
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  activePlayer = 0;
  current = 0;
  currentPlayer = 0;
  dice.style.display = "none";
  scores = [0, 0];
  rollNumber.style.display = "";
  holdBtn.style.display = "";

  playerOne.classList.remove("player--winner");
  playerTwo.classList.remove("player--winner");

  playerOne.classList.add("player--active");
  playerTwo.classList.remove("player--active");
});
