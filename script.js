let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    if (Math.floor((Math.random() * 3) + 1) === 1) {
        return "rock";
    } else if (Math.floor((Math.random() * 3) + 1) === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Let's play rock paper scissors, type your choice!");
    newChoice = choice.toLowerCase();
    if (newChoice === "rock" || newChoice === "paper" || newChoice === "scissors") {
        return console.log(newChoice);
    } 
    else {
         alert("I'm sorry you can only choose rock, paper or scissors");
    }
}


getHumanChoice()

