//Set the variables for the three different choices of the game.
let choices = ['rock', 'paper', 'scissors'];
//Made a function so that the computer would randomly return a choice.
function getComputerChoice(){
   let computerChoice = choices[Math.floor(Math.random() * choices.length)];
   return computerChoice;
}
