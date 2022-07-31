//Set the variables for the three different choices of the game.
let choices = ['rock', 'paper', 'scissor'];
//Made a function so that the computer would randomly return a choice.
function getComputerChoice(){
   let computerChoice = choices[Math.floor(Math.random() * choices.length)];
   return computerChoice;
}
// A function for 1 round of the game 
function playRound(playerSelection, computerSelection){
    if (playerSelection===computerSelection){
        return `It's a tie! You both chose ${playerSelection}.`;
    }  else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock";
    }  else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock";
    }  else if (playerSelection === "scissor" && computerSelection === "paper"){
        return "You Win! Scissor beats Rock";
    }  else if (playerSelection === "paper" && computerSelection === "scissor"){
        return "You Lose! Scissor beats rock";
    }  else if (playerSelection === "rock" && computerSelection === "scissor"){
        return "You win! Rock beats Scissor";
    }  else if (playerSelection === "scissor" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissor";
    }  else if (playerSelection === "scissor" && computerSelection === "paper"){
        return "You Win! Scissor beats Paper";
    }  else if (playerSelection === "paper" && computerSelection === "scissor"){
        return "You Lose! Scissor beats Paper";
    }  else {return "You need to choose either Rock, Paper, Scissors!";}
}
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

rock.addEventListener('click', function(){
    playRound('rock',getComputerChoice());   
});
paper.addEventListener('click',function(){
    playRound('paper',getComputerChoice());
});
scissor.addEventListener('click',function(){
    playRound('scissor',getComputerChoice());
});


