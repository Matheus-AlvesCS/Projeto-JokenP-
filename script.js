const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorButton = document.querySelector("#scissors")
const result = document.querySelector(".result")
const playerScore = document.querySelector(".player")
const computerScore = document.querySelector(".computer")

function computerChoice() {
    const comChoice = Math.floor(Math.random() * 3)
    if (comChoice === 0) {
        return "rock"
    } else if (comChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function startGame(choice) {
    const comChoice = computerChoice()
    if (choice === comChoice) {
        result.innerHTML = "Vocês empataram !!😐"
    } else if (
        (choice === "rock" && comChoice === "paper") || 
        (choice === "paper" && comChoice === "scissors") || 
        (choice === "scissors" && comChoice === "rock")
    ) {
        result.innerHTML = "Você perdeu !!😢"
        computerScore.innerHTML++
    } else {
        result.innerHTML = "Você ganhou !!😎"
        playerScore.innerHTML++
    }
}

rockButton.addEventListener("click", () => startGame("rock"))
paperButton.addEventListener("click", () => startGame("paper"))
scissorButton.addEventListener("click", () => startGame("scissors"))