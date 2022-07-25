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
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0;i<5; i++){
        const playerSelection = prompt("What's your choice?").toLowerCase();
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection,computerSelection);
        console.log(result);
        if (result === "You Win! Paper beats Rock" || result === "You Win! Scissor beats Rock"||result === "You win! Rock beats Scissor" || result === "You Win! Scissor beats Paper" ){
            playerScore++; 
        } else {computerScore++;}
    }
    console.log(playerScore);
    console.log(computerScore);
}
console.log(game());

