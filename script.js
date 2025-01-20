const choices = ["rock", "paper", "scissors"];
const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const displayResult = document.getElementById("displayResult");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playerChoice(choice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (choice === computerChoice) {
        result = "It's a tie!";
    }
    else {
        switch (choice) {
            case "rock":
                result = computerChoice === "scissors" ? "You win!" : "You lose!";
                break;
            case "paper":
                result = computerChoice === "rock" ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = computerChoice === "paper" ? "You win!" : "You lose!";
                break;
        }
    }

    playerResult.textContent = `Player chose: ${choice}`;
    computerResult.textContent = `Computer chose: ${computerChoice}`;
    displayResult.innerHTML = result;

    displayResult.classList.remove("greenText", "redText", "yellowText");

    switch (result) {
        case "You win!":
            displayResult.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose!":
            displayResult.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "It's a tie!":
            displayResult.classList.add("yellowText");
            break;
    }


}
