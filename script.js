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
    if (newChoice == "rock" || newChoice == "paper" || newChoice == "scissors") {
        console.log(newChoice);
        return newChoice;
    } 
    else {
         alert("I'm sorry you can only choose rock, paper or scissors");
         getHumanChoice();
    }
}

function playRound(humanChoice, robotChoice) {
    let sum = humanChoice + "." + robotChoice;
    console.log(sum);
    let winner = "you win! ";
    let loser = "You lost! ";
    let message;
    let str1 = "scissors beats paper!";
    let str2 = "paper beats rock";
    let str3 = "rock beats scissors";
    
if (sum === "scissors.paper") {
    message = winner + str1;
    humanScore++
} else if (sum === "paper.rock") {
    message = winner + str2;
    humanScore++
} else if (sum === "rock.scissors") {
    message = winner + str3;
    humanScore++
} else if (sum === "scissors.rock") {
    message = loser + str3;
    computerScore++
} else if (sum === "paper.scissors") {
    message = loser + str1;
    computerScore++
} else if (sum === "rock.paper") {
    message = loser + str2;
    computerScore++
} else {
    message = "draw! try again";
}
    console.log (message);
    return message;
}


playRound(getHumanChoice(), getComputerChoice());
console.log(humanScore, computerScore);

// if (sum === scissors.paper || sum === paper.rock || sum === rock.scissors) {
