
var choices = ["rock", "paper", "scissors"];

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

var playerScore = 0;
var computerScore = 0;
var draws = 0;

document.getElementById('playerScore').innerHTML = playerScore;
document.getElementById('computerScore').innerHTML = computerScore;
document.getElementById('draws').innerHTML = draws;


const computerSelection = computerPlay();
function computerPlay() {
    return (choices[Math.floor(Math.random() * 3)]);
};


btn1.addEventListener('click', () => {
    let playerSelection = choices[0];

    for (let i = 0; i < 1; i++) {
        let computerSelection = computerPlay();
        let roundResult = (playRound(playerSelection, computerSelection));
        console.log(roundResult);
        game(roundResult);
        console.log("You selected " + playerSelection);
        console.log("The computer selected " + computerSelection);
        console.log("Your score is " + playerScore);
        console.log("The computer's score is " + computerScore);
        console.log("There have been " + draws + " draws.");
        console.log("--------------------------------------");
    };
});

btn2.addEventListener('click', () => {
    let playerSelection = choices[1];
 
    for (let i = 0; i < 1; i++) {
        let computerSelection = computerPlay();
        let roundResult = (playRound(playerSelection, computerSelection));
        console.log(roundResult);
        game(roundResult);
        console.log("You selected " + playerSelection);
        console.log("The computer selected " + computerSelection);
        console.log("Your score is " + playerScore);
        console.log("The computer's score is " + computerScore);
        console.log("There have been " + draws + " draws.");
        console.log("--------------------------------------");
    };
});

btn3.addEventListener('click', () => {
    let playerSelection = choices[2];
 
    for (let i = 0; i < 1; i++) {
        let computerSelection = computerPlay();
        let roundResult = (playRound(playerSelection, computerSelection));
        console.log(roundResult);
        game(roundResult);
        console.log("You selected " + playerSelection);
        console.log("The computer selected " + computerSelection);
        console.log("Your score is " + playerScore);
        console.log("The computer's score is " + computerScore);
        console.log("There have been " + draws + " draws.");
        console.log("--------------------------------------");
    };
});


let playerWinRound = "You won this round!";
let computerWinRound = "Computer won this round!";
let draw = "Draw!";
let playerWin = "You've won the game!";
let computerWin = "Oh no, the computer won the game!";


function playRound(playerSelection, computerSelection) {   



            if (playerSelection === computerSelection) {
                return draw;
                }

            else if (playerSelection === "rock") {
                if (computerSelection === "paper") {
                    return computerWinRound;
                    }
                else if (computerSelection === "scissors") {
                    return playerWinRound;
                    }
            }

            else if (playerSelection === "paper") {
                if (computerSelection === "rock") {
                    return playerWinRound;
                }
                else if (computerSelection === "scissors") {
                    return computerWinRound;
                }
            }

            else if (playerSelection === "scissors") {
                if (computerSelection === "rock") {
                    return computerWinRound;
                }
                else if (computerSelection === "paper") {
                    return playerWinRound;
                }
            }

        }



    


    function game(result) {
        if (result === playerWinRound) {
            playerScore++;
            document.getElementById('playerScore').innerHTML = playerScore;
        } else if (result === draw) {
            draws++;
            document.getElementById('draws').innerHTML = draws;
        } else {
            computerScore++;
            document.getElementById('computerScore').innerHTML = computerScore;
        }
    }
         

