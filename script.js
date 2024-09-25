function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 3) + 1);

    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


//commented out incase I'll need need later
// function getHumanChoice() {
//     let choice = prompt("Let's play rock paper scissors, type your choice!");

//     if (!choice) {
//         return choice = "unknown";
//     } else {
//         return choice.toLowerCase();
//     }
// }


function playGame() {
    let victory = "Congratulations! You won the game! refresh to restart.";
    let defeat = "Game over! you lost the game! refresh to restart.";
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, robotChoice) {
        let sum = humanChoice + " vs " + robotChoice;
        console.log(sum);
        let winner = "you win! ";
        let loser = "You lost! ";
        let message;
        let str1 = "scissors beats paper!";
        let str2 = "paper beats rock";
        let str3 = "rock beats scissors";

        if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
            if (sum === "scissors.paper") {
                message = winner + str1;
                humanScore++
            } else if (sum === "paper vs rock") {
                message = winner + str2;
                humanScore++
            } else if (sum === "rock vs scissors") {
                message = winner + str3;
                humanScore++
            } else if (sum === "scissors vs rock") {
                message = loser + str3;
                computerScore++
            } else if (sum === "paper vs scissors") {
                message = loser + str1;
                computerScore++
            } else if (sum === "rock vs paper") {
                message = loser + str2;
                computerScore++
            } else {
                message = "draw! try again";
            }
            console.log(message);
            console.log(humanScore, computerScore);
        } else {
            alert("You can only pick rock, paper and scissors!");
        }
    }

    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice(); to be transferred to eventlisterner later

    // playRound(humanSelection, computerSelection);

}

const robotChoice = document.querySelector('#robot-choices');
const buttons = document.querySelector('#button-container');
const headerContent = document.querySelector('#content');
const counter = document.querySelector('#counter');


buttons.addEventListener('click', event => {
    let target = event.target;

    if (event.target.tagName === 'IMG') target = event.target.parentElement;

    switch (target.id) {
        case 'rock':
            console.log('you clicked rock');
            break;
        case 'paper':
            console.log('you clicked paper');
            break;
        case 'scissors':
            console.log('you clicked scissors');
            break
    }
  
})