"use strict";

//for selecting class - ., selecting id - #

//assigning random to qn mark.
let randomNum = Math.trunc(Math.random() * 20 + 1);
let score = 10;
let highScore = 0;

document.querySelector(".checkButton").addEventListener("click", function () {
  //we receive input from user as string so change to number
  const numberValue = Number(document.querySelector(".numberEntry").value);
  // console.log(randomNum);

  // checking user entering any number or not

  if (!numberValue) {
    document.querySelector(".status").textContent = "enter A number ";
  }
  // WINNING LOGIC
  else if (numberValue === randomNum) {
    document.querySelector(".status").textContent = "Correct";
    document.querySelector(".qmark").textContent = randomNum;
    document.querySelector(".container").style.backgroundColor = "green";

    // High score Logic

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }
  }
  // If user input High then random
  else if (numberValue > randomNum) {
    //  if score 0 then lost so this condition
    if (score > 1) {
      document.querySelector(".status").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".status").textContent = " YOU LOSE IDIOT !! ";
      document.querySelector(".score").textContent = 0;
    }
  }
  // Low guess  than random
  else if (numberValue < randomNum) {
    if (score > 1) {
      document.querySelector(".status").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".status").textContent = " YOU LOSE IDIOT !! ";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// resetting all
document.querySelector(".reset").addEventListener("click", function () {
  score = 10;
  document.querySelector(".qmark").textContent = "?";
  // assiging new random number######---MUST--####
  randomNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".status").textContent = " ENTER A NUMBER";
  document.querySelector(".score").textContent = score;
  console.log(document.querySelector(".score").textContent);
  document.querySelector(".container").style.backgroundColor = "grey";
  // we changed user input string to number above so reset that. then only logic above works.
  document.querySelector(".numberEntry").value = "";
});
