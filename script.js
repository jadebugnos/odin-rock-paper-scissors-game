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

function getHumanChoice() {
    let choice = prompt("Let's play rock paper scissors, type your choice!");
    return choice.toLowerCase();
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playGame() {
    let victory = "Congratulations! You won the game!";
    let defeat = "Game over! you lost the game!";
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, robotChoice) {
        let sum = humanChoice + "." + robotChoice;
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
            console.log(message);
            console.log(humanScore, computerScore);
        } else {
            alert("You can only pick rock, paper and scissors!");
        }
    }

    while (humanScore < 5 && computerScore < 5) {
        getComputerChoice()
        getHumanChoice()

        playRound(humanSelection, computerSelection);
    }

    if (humanScore == 5) {
        alert(victory);
    } else if (computerScore == 5) {
        alert(defeat);
    }

}

playGame();
