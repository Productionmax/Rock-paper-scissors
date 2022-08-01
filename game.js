const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('#Cscore');
const yourScoreSpan = document.querySelector('#Yscore')
const condition = document.querySelector('.condition');


// For each of the buttons a selectionbutton function goes through by putting the dataselection name to selectioname and inputting it to the playround function
selectionButtons.forEach(selectionButton =>{
    selectionButton.addEventListener('click',e => {
        const selectionName = selectionButton.dataset.selection
        playRound(selectionName,getComputerChoice())
    })
} )



//Set the variables for the three different choices of the game.
let choices = ['rock', 'paper', 'scissor'];
//Made a function so that the computer would randomly return a choice.
function getComputerChoice(){
   let computerChoice = choices[Math.floor(Math.random() * choices.length)];
   return computerChoice;
}
// A function for 1 round of the game 
function playRound(playerSelection, computerSelection){
    let computerWinner = '';
    let yourWinner = '';
    console.log(playerSelection);
    if (playerSelection===computerSelection){
        condition.innerText = `It's a tie! You both chose ${playerSelection}.`;
        condition.style.color = 'black';
        return `It's a tie! You both chose ${playerSelection}.`;
    }  else if (playerSelection === "rock" && computerSelection === "paper"){
         computerWinner = "You Lose! Paper beats Rock";
    }  else if (playerSelection === "paper" && computerSelection === "rock"){
         yourWinner = "You Win! Paper beats Rock";
    }  else if (playerSelection === "scissor" && computerSelection === "paper"){
         yourWinner = "You Win! Scissor beats Rock";
    }  else if (playerSelection === "paper" && computerSelection === "scissor"){
         computerWinner = "You Lose! Scissor beats rock";
    }  else if (playerSelection === "rock" && computerSelection === "scissor"){
         yourWinner = "You win! Rock beats Scissor";
    }  else if (playerSelection === "scissor" && computerSelection === "rock"){
         computerWinner = "You Lose! Rock beats Scissor";
    }  else if (playerSelection === "scissor" && computerSelection === "paper"){
         yourWinner = "You Win! Scissor beats Paper";
    }  else if (playerSelection === "paper" && computerSelection === "scissor"){
         computerWinner = "You Lose! Scissor beats Paper";
    }  else {return "You need to choose either Rock, Paper, Scissors!";}
    // addSelectionResult (computerSelection,computerWinner);
    // addSelectionResult (playerSelection,yourWinner);
     if (yourScoreSpan.innerText !== "WINNER!!!" && computerScoreSpan.innerText !=="WINNER!!!"){
          if (yourWinner !== '') {
               incrementScore(yourScoreSpan);
               condition.innerText = yourWinner;
               condition.style.color = 'green';
          }
          if (computerWinner !== ''){
               incrementScore(computerScoreSpan);
               condition.innerText = computerWinner;
               condition.style.color = 'red';
          }
     }else {yourScoreSpan.innerText=0;
          yourScoreSpan.style.color='#333';
          computerScoreSpan.innerText=0;
          computerScoreSpan.style.color='#333'}
}
// Increments the score by 1 by switching the string to a number and adding it by 1 
function incrementScore (scoreSpan){
     if (scoreSpan.innerText<5){
     scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
     } else {scoreSpan.innerText="WINNER!!!";
     scoreSpan.style.color = 'green';};
     
}