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
    let playerChoice = playerSelection.toLowerCase();
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
    let result = document.querySelector(".result");
    let playersResult = document.querySelector(".playerScore");
    let computerResult = document.querySelector(".computerScore");
    let resultWinner = document.createElement("h1");
    let info = document.querySelector(".info");
    let selectionInfo = document.createElement('h2');
    info.appendChild(selectionInfo)
    let roundResult = document.createElement('h3');
    info.appendChild(roundResult);


    let playBtn = document.querySelectorAll('button');
    playBtn.forEach(btn =>  {
        btn.addEventListener('click', () => {
            let computerSelection = getComputerChoice();
            let winner = playRound(btn.id, computerSelection);

            selectionInfo.textContent = `Computer has picked ${computerSelection} against your ${btn.id}`;
            if (winner === 1) {
                
                roundResult.textContent = "You get a point!";
                console.log("You get a point!");
                playerRoundWin++;
            } else if(winner === 2) {
                roundResult.textContent = "The computer gets a point!";
                console.log("The computer gets a point!");
                computerRoundWin++;
            } else {
                roundResult.textContent = "No one gets a point!";
                console.log("No one gets a point");
            }

            if (playerRoundWin === 5) {
                console.log("Game over! Player wins!!");
                playBtn.forEach( btn => btn.disabled=true );
                resultWinner.textContent = "Game over! Player wins!!";
                result.appendChild(resultWinner);
            } else if (computerRoundWin === 5) {
                console.log("Game over! Computer wins!!");
                playBtn.forEach( btn => btn.disabled=true );
                resultWinner.textContent = "Game over! Computer wins!!";
                result.appendChild(resultWinner);
            }
            console.log(`Current scoreboard: player - ${playerRoundWin} /// computer - ${computerRoundWin}`);
            playersResult.textContent = `Player's Score: ${playerRoundWin}`;
            computerResult.textContent = `Computer's Score: ${computerRoundWin}`;
        
        }); 
    });

    

}


game();