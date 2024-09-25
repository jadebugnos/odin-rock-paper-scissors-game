function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 3) + 1);

    if (randomNum === 1) {
        return "robot-rock";
    } else if (randomNum === 2) {
        return "robot-paper";
    } else {
        return "robot-scissors";
    }
}


function playRound(humanChoice, robotChoice) {
    let sum = humanChoice + " vs " + robotChoice;

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        if (sum === "scissors vs robot-paper") {
            return "win";
        } else if (sum === "paper vs robot-rock") {
            return "win";
        } else if (sum === "rock vs robot-scissors") {
            return "win";
        } else if (sum === "scissors vs robot-rock") {
            return "lose";
        } else if (sum === "paper vs robot-scissors") {
            return "lose";
        } else if (sum === "rock vs robot-paper") {
            return "lose";
        } else {
            return "draw";
        }
    }
}


function playGame(result) {
    let victory = "Congratulations! You won the game! refresh to restart.";
    let defeat = "Game over! you lost the game! refresh to restart.";
    console.log(result);
}


const robotChoice = document.querySelector('#robot-choices');
const buttons = document.querySelector('#button-container');
const headerContent = document.querySelector('#content');
const counter = document.querySelector('#counter');

//hides the human buttons but the selected button
buttons.addEventListener('click', event => {
    let target = event.target;
    if (event.target.tagName === 'IMG') target = event.target.parentElement;

    const buttons = document.querySelectorAll(".buttons");
    const computerSelection = getComputerChoice();
    const humanSelection = target.id;
    toHideRobotButtons(computerSelection);

    if (target.classList.contains('buttons')) {
        for (let button of buttons) {
            if (button !== target) button.style.display = "none";
        }
    }
    const result = playRound(humanSelection, computerSelection);
    playGame(result);
})

//should be passed with getComputerChoice function
function toHideRobotButtons(choice) {
    const robots = document.querySelectorAll('.robot');

    for (let robot of robots) {
        if (robot.id !== choice) {
            robot.style.display = "none";
        } else {
            robot.style.display = "block";
        }
    }
}




