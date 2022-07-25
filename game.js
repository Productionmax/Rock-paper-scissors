//Set the variables for the three different choices of the game.
let choices = ['rock', 'paper', 'scissor'];
//Made a function so that the computer would randomly return a choice.
function getComputerChoice(){
   let computerChoice = choices[Math.floor(Math.random() * choices.length)];
   return computerChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection===computerSelection){
        return 'It\'s a tie!You both chose ${playerSelection}';
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

function game(){
    for (let i=0;i<5; i++){
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        
    }
}
console.log(game());
