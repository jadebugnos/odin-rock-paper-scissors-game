const scores = document.querySelector('#counter');
let humanScore = 0;
let robotScore = 0;

const restartButton = document.querySelector('#restart');
const headerContent = document.querySelector('#content');
const robotChoice = document.querySelector('#robot-choices');
const buttons = document.querySelector('#button-container');
const btn = document.querySelectorAll('.btn');


restartButton.textContent = "Pick Your Choice";
scores.textContent = `Scores: ${humanScore} || ${robotScore}`



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
    let matchUp = humanChoice + " vs " + robotChoice;

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        if (matchUp === "scissors vs robot-paper") {
            return "win";
        } else if (matchUp === "paper vs robot-rock") {
            return "win";
        } else if (matchUp === "rock vs robot-scissors") {
            return "win";
        } else if (matchUp === "scissors vs robot-rock") {
            return "lose";
        } else if (matchUp === "paper vs robot-scissors") {
            return "lose";
        } else if (matchUp === "rock vs robot-paper") {
            return "lose";
        } else {
            return "draw";
        }
    }
}


const gameMessages = {
    victory: [
        "You’ve conquered this round! Ready for the next challenge?",
        "Well done! You’ve won this match! Want to keep playing?",
        "Great job! You’ve outsmarted your opponent this time! Another round?",
        "You came out on top! Feel like trying again?",
        "A fantastic win! Keep the momentum going! Up for another?",
        "You’ve mastered this round! What’s your next move?",
        "Impressive! You’ve claimed victory here! Want a rematch?",
        "Nice work! You’ve bested the competition! Care for another round?",
        "Congratulations on this win! Let’s see if you can do it again!",
        "You’re on fire! Shall we jump into another round?"
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
    ],

    win: [
        "Congratulations! You’ve won the game! Ready for a new challenge?",
        "You’re a champion! Would you like to play again?",
        "Fantastic! You’ve conquered the entire game! Want to go for another match?",
        "You did it! Victory is yours! Shall we play another game?",
        "A well-deserved win! How about one more challenge?",
        "Great job! You’ve outplayed everyone! Want to challenge yourself again?",
        "You’ve mastered this game! Are you ready for a rematch?",
        "Victory! You’ve shown your skills! Let’s see if you can do it again!",
        "Bravo! You’ve triumphed in the game! Shall we play once more?",
        "You’ve clinched the win! How about another game to test your skills?"
    ],

    lose: [
        "Game over! Don’t lose hope, try again!",
        "You were close! Better luck next time!",
        "Not this time! But you can come back stronger!",
        "Defeat stings, but you’ll bounce back!",
        "Keep your head up! Every loss is a lesson!",
        "You fought hard, but the game slipped away!",
        "Close call! You’ve got this next time!",
        "Don’t worry! You’ll get your chance again!",
        "Almost there! Just a bit more practice needed!",
        "You’ll turn this around! Stay determined!"
    ]
};


function playGame(result) {
    const randomInt = Math.floor(Math.random() * 10);

    if (humanScore < 5 || robotScore < 5) {
        switch (result) {
            case "win":
                headerContent.textContent = gameMessages.victory[randomInt];
                humanScore++;
                restart()
                break;
            case "lose":
                headerContent.textContent = gameMessages.defeat[randomInt];
                robotScore++;
                restart(result)
                break;
            case "draw":
                headerContent.textContent = gameMessages.draw[randomInt];
                restart(result)
                break;
        }
    }

    //will update scores
    scores.textContent = `Scores: ${humanScore} || ${robotScore}`;

    if (humanScore === 5) {
        endGame("win");
    } else if (robotScore === 5) {
        endGame("lose");
    }
}


let GameActive = true;

function handleButtonChoices(event) {
    if (!GameActive) return;

    let target = event.target;
    if (event.target.tagName === 'IMG') target = event.target.parentElement;

    const buttons = document.querySelectorAll(".buttons");
    const computerSelection = getComputerChoice();
    const humanSelection = target.id;

    if (target.classList.contains('buttons')) {
        toHideRobotButtons(computerSelection);
        for (let button of buttons) {
            if (button !== target) button.style.display = "none";
        }
    }
    const result = playRound(humanSelection, computerSelection);
    playGame(result);

    GameActive = false;
}

buttons.addEventListener('click', handleButtonChoices);


function toHideRobotButtons(choice) {
    const robots = document.querySelectorAll('.robot');

    for (let robot of robots) {
        if (robot.id !== choice) {
            robot.style.display = "none";
        } else {
            robot.style.display = "flex";
        }
    }
}


function restart(result) {
    restartButton.textContent = "Rematch"

    //to handle multiple stacking of eventlisteners
    const handleRestart = () => {
        GameActive = true;
        const randomInt = Math.floor(Math.random() * 10);
        headerContent.textContent = gameMessages.choose[randomInt];

        for (let items of btn) {
            items.style.display = "flex";
        }

        restartButton.removeEventListener('click', handleRestart);
    }

    restartButton.addEventListener('click', handleRestart);
};

function endGame(result) {
    const randomInt = Math.floor(Math.random() * 10);
    (result === "win") ? headerContent.textContent = gameMessages.win[randomInt] :
        headerContent.textContent = gameMessages.lose[randomInt];

    restartButton.textContent = "Play Again";
    restartButton.style.backgroundColor = "green";

    const reset = () => {
        restartButton.style.backgroundColor = "rgb(121, 183, 241)";
        restartButton.textContent = "Pick Your Choice";
        humanScore = 0;
        robotScore = 0;
        scores.textContent = `Scores: ${humanScore} || ${robotScore}`;
        for (let items of btn) {
            items.style.display = "flex";
        }
        restartButton.removeEventListener('click', reset);
    }

    restartButton.addEventListener('click', reset);
}