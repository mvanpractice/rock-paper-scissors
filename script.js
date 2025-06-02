
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const input = prompt('Enter: rock, paper, scissors');

    return input;
}


function getComputerChoice() {

    const randomChoice = Math.floor(Math.random() * 3);
    let result = '';

    if (randomChoice === 0) {

        result = 'rock';

    } else if (randomChoice === 1) {

        result = 'paper';

    } else if (randomChoice === 2) {

        result = 'scissors';

    }

    return result;

}

function playRound() {

    const humanPick = getHumanChoice();
    const computerPick = getComputerChoice();

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

    } else if (humanPick === computerPick) {

        winner = 'tie';

    }

    return winner;

}

function playGame() {

    for (let i = 0; i < 5; i++) {
        
        const roundWinner = playRound();

        if (roundWinner === 'human') {

            console.log('You win!');
            humanScore++;

        } else if (roundWinner === 'computer') {

            console.log('You lost!');
            computerScore++;

        } else if (roundWinner === 'tie') {

            console.log("It's a Tie!");

        }
        
    }

    if (humanScore > computerScore) {
        console.log(`You WON ${humanScore}x! Congratulations! You won the entire game!`)
    } else if (humanScore < computerScore) {
        console.log(`You LOST! Computer won ${computerScore}x! You lost the entire game!`)
    } else if (humanScore === computerScore) {
        console.log('It was a TIE!');
    }

}

playGame();