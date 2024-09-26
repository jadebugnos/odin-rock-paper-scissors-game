const scores = document.querySelector('#counter');
let humanScore = 0;
let robotScore = 0;

const restartButton = document.querySelector('#restart');
const headerContent = document.querySelector('#content');


restartButton.textContent = "Play Game";
scores.textContent = `Scores: 0${humanScore} || 0${robotScore}`



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




const gameMessages = {
    victory: [
        "You’ve conquered this round! Ready for more?",
        "Victory is yours! Want to play again?",
        "Well done, champion! Another round?",
        "You came out on top! Feel like going again?",
        "A flawless win! Up for another challenge?",
        "You’ve mastered this match! Ready for the next?",
        "Impressive! You’ve claimed victory! Play again?",
        "You’ve outplayed your opponent! Care for a rematch?",
        "Congratulations, you’ve won! Let’s see if you can do it again!",
        "You’re unbeatable! Shall we go for another round?"
    ],

    defeat: [
        "Not this time, but don’t give up! Want to try again?",
        "Close call, but you’ve got this! Care to give it another go?",
        "You’ve lost this round, but the next could be yours! Try again?",
        "Tough break, but there's always another chance! Play again?",
        "Almost had it! Don’t let this stop you! One more round?",
        "Defeat is temporary! Ready to turn things around?",
        "It’s not over yet! Let's see if you can win the next one!",
        "You’ve been outmatched, but can you stage a comeback?",
        "A hard-fought battle! Want to try again and claim victory?",
        "You were close! Ready to take another shot?"
    ],

    draw: [
        "It’s a tie! Who’s going to break it? Let’s settle this!",
        "Stalemate! Let’s see who takes the next round!",
        "A draw! The suspense builds! Ready for a rematch?",
        "No winner this time! Let’s go again and find one!",
        "It’s a deadlock! Time to break it with another match!",
        "An even match! Want to settle the score with a rematch?",
        "Neither of you backed down! Ready for another round?",
        "A perfect tie! Let’s see who claims the next victory!",
        "No clear winner yet! Want to go again?",
        "A draw! Looks like the game is heating up! Rematch?"
    ],

    choose: [
        "Choose wisely! Your decision matters!",
        "Make your move! The game is in your hands!",
        "It’s your call! Take a deep breath and go for it!",
        "Time to choose! Which will you pick?",
        "This is your moment! Choose your next move carefully!",
        "The next step is yours! What will it be?",
        "Your choice can change everything! Pick wisely!",
        "The power is in your hands! Make the call!",
        "Think carefully! Your choice will shape the outcome!",
        "It’s decision time! What will you choose?"
    ]
};




function playGame(result) {
    let victory = "Congratulations! You won the game! refresh to restart.";
    let defeat = "Game over! you lost the game! refresh to restart.";
    const randomInt = Math.floor(Math.random() * 10);

    switch (result) {
        case "win":
            headerContent.textContent = gameMessages.victory[randomInt];
            humanScore++;
            restart()
            break;
        case "lose":
            headerContent.textContent = gameMessages.defeat[randomInt];
            robotScore++;
            restart()
            break;
        case "draw":
            headerContent.textContent = gameMessages.draw[randomInt];
            restart()
            break;
    }
    //will update scores
    scores.textContent = `Scores: 0${humanScore} || 0${robotScore}`;
}




const robotChoice = document.querySelector('#robot-choices');
const buttons = document.querySelector('#button-container');





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



function restart() {
    restartButton.textContent = "Rematch"

    restartButton.addEventListener('click', () => {
        const randomInt = Math.floor(Math.random() * 10);
        headerContent.textContent = gameMessages.choose[randomInt];

        const btn = document.querySelectorAll('.btn');
        for (let items of btn) {
            items.style.display = "flex";
        }

    })
}



