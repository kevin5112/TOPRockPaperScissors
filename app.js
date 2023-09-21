


function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        return "rock";
    } else if (compChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerChoice = playerSelection.toLowerCase();
    console.log(`The computer picked ${computerSelection}`);

    if (playerChoice === "rock") {
        if (computerSelection === "rock") {
            console.log("You tie! Rock ties with Rock");
            return 0;
        } else if (computerSelection === "paper") {
            console.log("You lose! Paper beats Rock");
            return 2;
        } else {
            console.log("You win! Rock beats scissors");
            return 1;
        }
    } else if (playerChoice === "paper") {
        if (computerSelection === "rock") {
            console.log("You win! Paper beats Rock");
            return 1;
        } else if (computerSelection === "paper") {
            console.log("You tie! Paper ties with paper");
            return 0;
        } else {
            console.log("You lose! Scissors beats paper");
            return 2;
        }
    } else {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats scissors");
            return 2;
        } else if (computerSelection === "paper") {
            console.log("You win! Scissors beats with paper");
            return 1;
        } else {
            console.log("You tie! Scissors tie with scissors");
            return 0;
        }
    }
    
}

function game() {
    let playerRoundWin = 0;
    let computerRoundWin = 0;

    while (playerRoundWin < 5 && computerRoundWin < 5) {
        let playerSelection;
        do {
            playerSelection = prompt("pick rock, paper, or scissors? ").toLowerCase();
        } while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        if (winner === 1) {
            console.log("You get a point!");
            playerRoundWin++;
        } else if(winner === 2) {
            console.log("The computer gets a point!");
            computerRoundWin++;
        } else {
            console.log("No one gets a point");
        }
        console.log(`Current scoreboard: player - ${playerRoundWin} /// computer - ${computerRoundWin}`);
    }

    if (playerRoundWin === 4) {
        console.log("Game over! Player wins!!");
    } else {
        console.log("Game over! Computer wins!!");
    }

}

game();
