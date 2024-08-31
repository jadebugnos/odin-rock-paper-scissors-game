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

function playRound(humanChoice, robotChoice) {
    let sum = humanChoice + "." + robotChoice;
    let winner = "you win! ";
    let loser = "You lost! ";
    let message;
    let str1 = "scissors beats paper!";
    let str2 = "paper beats rock";
    let str3 = "rock beats scissors";
    
if (sum === scissors.paper) {
    message = winner + str1;
} else if (sum === paper.rock) {
    message = winner + str2;
} else if (sum === rock.scissors) {
    message = winner + str3;
} else if (sum === scissors.rock) {
    message = loser + str3;
} else if (sum === paper.scissors) {
    message = loser + str1;
} else if (sum === rock.paper) {
    message = loser + str2;
}
    console.log (message);
    return message;
}

playRound(getHumanChoice, getComputerChoice);
getHumanChoice()

// if (sum === scissors.paper || sum === paper.rock || sum === rock.scissors) {
