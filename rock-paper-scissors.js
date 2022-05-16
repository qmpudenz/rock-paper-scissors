// Create an array of possible choices in the game.//
var choices = ["Rock", "Paper", "Scissors"];
// Create a function to randomly select a choice from the array on behalf of the computer player.//
function computerPlay() {
    console.log(choices[Math.floor(Math.random() * 3)]);
    console.log();
}