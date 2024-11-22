const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorButton = document.querySelector("#scissors")
const result = document.querySelector(".result")
const playerScore = document.querySelector(".player")
const computerScore = document.querySelector(".computer")
const playerRounds = document.querySelector(".player-rounds-wins")
const computerRounds = document.querySelector(".computer-rounds-wins")

let playerPoints = 0
let computerPoints = 0
let playerRoundsWins = 0
let computerRoundsWins = 0
let roundGame = 0

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
        computerPoints++
        computerScore.innerHTML = computerPoints
    } else {
        result.innerHTML = "Você ganhou !!😎"
        playerPoints++
        playerScore.innerHTML = playerPoints
    }

    roundGame++

    endGame(roundGame)
}

function endGame(round) {
    if (round === 10) {
        rockButton.disabled = true
        paperButton.disabled = true
        scissorButton.disabled = true
        setTimeout(() => {
            rockButton.disabled = false
            paperButton.disabled = false
            scissorButton.disabled = false
        }, 5000);
        if (playerPoints > computerPoints) {
            result.innerHTML = "Rodada encerrada. Parabéns, você ganhou a rodada !!"
            playerRoundsWins++
            playerRounds.innerHTML = playerRoundsWins
        } else if (playerPoints < computerPoints) {
            result.innerHTML = "Rodada encerrada. Infelizmente, você perdeu a rodada !!"
            computerRoundsWins++
            computerRounds.innerHTML = computerRoundsWins
        } else {
            result.innerHTML = "Rodada encerrada. Foi uma disputa acirrada, a rodada terminou em empate !!"
        }
        computerScore.innerHTML = 0
        playerScore.innerHTML = 0
        computerPoints = 0
        playerPoints = 0
        roundGame = 0
    }
}

rockButton.addEventListener("click", () => startGame("rock"))
paperButton.addEventListener("click", () => startGame("paper"))
scissorButton.addEventListener("click", () => startGame("scissors"))