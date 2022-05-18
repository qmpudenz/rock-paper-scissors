// Create an array of possible choices in the game.//

var choices = ["rock", "paper", "scissors"];

// Create a function to randomly select a choice from the array on behalf of the computer player.//

function computerPlay() {
    return (choices[Math.floor(Math.random() * 3)]);
};

// GOAL 1: Create a function that plays a single round of Rock Paper Scissors, using computerSelection and playerSelection parameters.//
// GOAL 2: Return a string that declares a winner.//


// Considering my options at this point, it seems like I an use if statements and || to solve my problem. It seems like switch is another way to achieve this. I'm not sure how to implement .equals, but that might help clean things up as well.//
// When considering if statements, I still have options: I can base it on playerSelection, the outcomes, or even associate each playerSelection with a losing condition.//


// For now, I'm going to group if statements starting with the player's selection.//
// I'll map out the outcomes starting with rock, like the example below, to make sure my javascript logic is sound.//
function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            if (playerSelection === computerSelection) {
                console.log("Tie.");
                } 
            else if (playerSelection === "rock" && computerSelection === "paper") {
                if (computerSelection === "paper") {
                    console.log("You lose.")
                    }
            }
                else if (playerSelection === "rock" && computerSelection === "scissors") {
                    console.log("You win.")
                    }
                }
        }

// To test the current setup, I've set playSelection to output "rock". In the future, I could setup playerSelection similar to computerSelection to test different outcomes.//
let playSelection = "rock";
const computerSelection = computerPlay();
playRound(playSelection, computerSelection);