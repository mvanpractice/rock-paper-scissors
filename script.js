/* 
* param event takes an event object
*/
function handleBeforeUnload(event) {
   event.preventDefault();
   event.returnValue = '';
}

/* 
* I put the beforeunload event listener (add and remove) in functions.
* Because I will need to control when to trigger and remove this listener.
*/
function addBeforeUnload() {

   window.addEventListener('beforeunload', handleBeforeUnload);

}

function removeBeforeUnload() {

   window.removeEventListener('beforeunload', handleBeforeUnload);

}


/* 
*
*/
function getComputerPick() {
   
   const choices = ['rock', 'paper', 'scissors'];
   const randomPick = Math.floor(Math.random() * choices.length);
   return choices[randomPick];

}


const computersPick = document.getElementById('computer-pick');

function playRound(humanPick) {

   const computerPick = getComputerPick();

   computersPick.textContent = computerPick.charAt(0).toUpperCase() + computerPick.slice(1);

   let winner = '';

   if (humanPick === 'rock' && computerPick === 'paper') {

      winner = 'computer';

   } else if (humanPick === 'rock' && computerPick === 'scissors') {

      winner = 'human';
      
   } else if (humanPick === 'paper' && computerPick === 'rock') {

      winner = 'human';

   } else if (humanPick === 'paper' && computerPick === 'scissors') {

      winner = 'computer';

   } else if (humanPick === 'scissors' && computerPick === 'rock') {

      winner = 'computer';

   } else if (humanPick === 'scissors' && computerPick === 'paper') {

      winner = 'human';

   } else {

      winner = 'tie';

   }

   return winner;

}

const container = document.querySelector('.container');
const yourPick = document.getElementById('your-pick');
const roundWinner = document.getElementById('round-winner');
const roundCount = document.getElementById('round-count'); 
const currentRound = document.getElementById('current-round'); 
const yourScore = document.getElementById('your-score'); 
const computerScoreDisplay = document.getElementById('computer-score'); 

let roundCounter = 0;
let humanScore = 0;
let computerScore = 0;

container.addEventListener('click', event => {
   event.stopPropagation();

   if (event.target.id) {
      
      if (event.target.id === 'rock' && roundCounter !== 5) {
         
         const winner = playRound(event.target.id);

         if (winner !== 'tie') {

            if (winner === 'human') {
               humanScore++;
               yourScore.textContent = humanScore;
            } else if (winner === 'computer') {
               computerScore++;
               computerScoreDisplay.textContent = computerScore;
            }

         }

         roundCounter++;
         yourPick.textContent = 'Rock';
         roundWinner.textContent = winner.charAt(0).toUpperCase() + winner.slice(1);
         roundCount.textContent = roundCounter;
         currentRound.textContent = roundCounter;
      } else if (event.target.id === 'paper' && roundCounter !== 5) {
         
         const winner = playRound(event.target.id);

         if (winner !== 'tie') {

            if (winner === 'human') {
               humanScore++;
               yourScore.textContent = humanScore;
            } else if (winner === 'computer') {
               computerScore++;
               computerScoreDisplay.textContent = computerScore;
            }

         }

         roundCounter++;
         yourPick.textContent = 'Paper';
         roundWinner.textContent = winner.charAt(0).toUpperCase() + winner.slice(1);
         roundCount.textContent = roundCounter;
         currentRound.textContent = roundCounter;
      } else if (event.target.id === 'scissors' && roundCounter !== 5) {

         const winner = playRound(event.target.id);

         if (winner !== 'tie') {

            if (winner === 'human') {
               humanScore++;
               yourScore.textContent = humanScore;
            } else if (winner === 'computer') {
               computerScore++;
               computerScoreDisplay.textContent = computerScore;
            }

         }

         roundCounter++;
         yourPick.textContent = 'Scissors';
         roundWinner.textContent = winner.charAt(0).toUpperCase() + winner.slice(1);
         roundCount.textContent = roundCounter;
         currentRound.textContent = roundCounter;
      } else {
         
         alert('5 rounds completed!');

      }

   }

});