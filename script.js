
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

function playRound(humanPick, computerPick) {

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

    if (winner === 'human') {

        humanScore++;
        return winner;

    } else if (winner === 'computer') {

        computerScore++;
        return winner;

    } else if (winner === 'tie') {

        return winner;

    }

}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(playRound(humanChoice, computerChoice));
