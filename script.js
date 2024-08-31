function getComputerChoice() {
    if (Math.floor((Math.random() * 3) + 1) === 1) {
        return "rock";
    } else if (Math.floor((Math.random() * 3) + 1) === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());