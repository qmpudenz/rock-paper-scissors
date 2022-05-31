// Completed - GOAL 1: Create a function that plays a single round of Rock Paper Scissors, 
// using computerSelection and playerSelection as parameters. //
// Completed - GOAL 2: Return a string that declares a winner. //

// Create an array of possible choices in the game. //

var choices = ["rock", "paper", "scissors"];

// Create a function to randomly select a choice from the array on behalf of the computer player. //

const computerSelection = computerPlay(); // I could probably avoid this line by renaming this. //


function computerPlay() {
    return (choices[Math.floor(Math.random() * 3)]);
};

// We need something that gets the input ready for the playRound function. //

const playerSelection = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error, please select type rock, paper, or scissors.')
    };
}

console.log(playerSelection('Rock')); // To test .toLowerCase. //
console.log(playerSelection('potato')); // To test error message. //
console.log(computerSelection); // Log of computer's selection to make sure next test was correct. //
console.log(playRound(playerSelection('Rock'), computerSelection)); // Test outcome based one playerSelection being rock. I still need to figure out how to input other choices. //

// Considering my options at this point, it seems like I an use if statements and || to solve my problem. It seems like switch is another way to achieve this. I'm not sure how to implement .equals, but that might help clean things up as well. //
// When considering if statements, I still have options: I can base it on playerSelection, the outcomes, or even associate each playerSelection with a losing condition. //


// For now, I'm going to group if statements starting with the player's selection, using the function playRound. //
function playRound(userInput, computerSelection) {   

            if (userInput === computerSelection) {
                console.log("Tie.");
                }

            else if (userInput === "rock") {
                if (computerSelection === "paper") {
                    console.log("You lose.");
                    }
                else if (computerSelection === "scissors") {
                    console.log("You win.");
                    }
            }

            else if (userInput === "paper") {
                if (computerSelection === "rock") {
                    console.log("You win.");
                }
                else if (computerSelection === "scissors") {
                    console.log("You lose.");
                }
            }

            else if (userInput === "scissors") {
                if (computerSelection === "rock") {
                    console.log("You lose.");
                }
                else if (computerSelection === "paper") {
                    console.log("You win.")
                }
            }
    
        }