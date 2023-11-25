const VALID_CHOICES = ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK'];

function randomArrayIndex(array) {
	let i = (Math.floor(Math.random() * 1000)) % array.length;
	console.log('Array "VALID_CHOICES" index: ' + i);
	return i;
}

function getComputerChoice() {
	let i = randomArrayIndex(VALID_CHOICES);
	let computerChoice = VALID_CHOICES[i];

	console.log('Computer choice: ' + computerChoice);
	return computerChoice;
}

function setPlayerChoice() {
	let playerChoice;

	do {
		playerChoice = prompt('Make your move').toUpperCase();
	} while (VALID_CHOICES.includes(playerChoice) === false);

	console.log('Player choice: ' + playerChoice);
	return playerChoice;
}

function playRound(playerChoice, computerChoice) {
	const round = playerChoice.concat(' ', computerChoice);
	let result;
	let winner;

	switch (round) {
		case 'SCISSORS PAPER':
			result = 'You get a point!!!\nScissors cuts Paper';
			winner = 'PLAYER';
			break;

		case 'PAPER SCISSORS':
			result = 'Computer gets a point!!!\nScissors cuts Paper.';
			winner = 'COMPUTER';
			break;

		case 'PAPER ROCK':
			result = 'You get a point!!!\nPaper covers Rock.';
			winner = 'PLAYER';
			break;

		case 'ROCK PAPER':
			result = 'Computer gets a point!!!\nPaper covers Rock.';
			winner = 'COMPUTER';
			break;

		case 'ROCK LIZARD':
			result = 'You get a point!!!\nRock crushes Lizard.';
			winner = 'PLAYER';
			break;

		case 'LIZARD ROCK':
			result = 'Computer gets a point!!!\nRock crushes Lizard.';
			winner = 'COMPUTER';
			break;

		case 'LIZARD SPOCK':
			result = 'You get a point!!!\nLizard poisons Spock.';
			winner = 'PLAYER';
			break;

		case 'SPOCK LIZARD':
			result = 'Computer gets a point!!!\nLizard poisons Spock.';
			winner = 'COMPUTER';
			break;

		case 'SPOCK SCISSORS':
			result = 'You get a point!!!\nSpock smashes Scissors.';
			winner = 'PLAYER';
			break;

		case 'SCISSORS SPOCK':
			result = 'Computer gets a point!!!\nSpock smashes Scissors.';
			winner = 'COMPUTER';
			break;

		case 'SCISSORS LIZARD':
			result = 'You get a point!!!\nScissors decapitates Lizard.';
			winner = 'PLAYER';
			break;

		case 'LIZARD SCISSORS':
			result = 'Computer gets a point!!!\nScissors decapitates Lizard.';
			winner = 'COMPUTER';
			break;

		case 'LIZARD PAPER':
			result = 'You get a point!!!\nLizard eats Paper.';
			winner = 'PLAYER';
			break;

		case 'PAPER LIZARD':
			result = 'Computer gets a point!!!\nLizard eats Paper.';
			winner = 'COMPUTER';
			break;

		case 'PAPER SPOCK':
			result = 'You get a point!!!\nPaper disproves Spock.';
			winner = 'PLAYER';
			break;

		case 'SPOCK PAPER':
			result = 'Computer gets a point!!!\nPaper disproves Spock.';
			winner = 'COMPUTER';
			break;

		case 'SPOCK ROCK':
			result = 'You get a point!!!\nSpock vaporizes Rock.';
			winner = 'PLAYER';
			break;

		case 'ROCK SPOCK':
			result = 'Computer gets a point!!!\nSpock vaporizes Rock.';
			winner = 'COMPUTER';
			break;

		case 'ROCK SCISSORS':
			result = 'You get a point!!!\nRock crushes Scissors.';
			winner = 'PLAYER';
			break;

		case 'SCISSORS ROCK':
			result = 'Computer gets a point!!!\nRock crushes Scissors.';
			winner = 'COMPUTER';
			break;

		default:
      result = 'Round tied!!! Nobody gets a point.';
			winner = null;
			break;
	}

	console.log('Round result: ' + result);
	console.log('Round winner: ' + winner);
	return winner;
}

function game() {
	let roundWinner;
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 1; i <= 5; i++) {
		console.log('Round ' + i);
		roundWinner = playRound(setPlayerChoice(), getComputerChoice());

		if (roundWinner === 'PLAYER')	playerScore++;
		else if (roundWinner === 'COMPUTER')	computerScore++;
	}

	if (playerScore > computerScore)
		console.log('The PLAYER won the game, by the score of ' + playerScore + ' x ' + computerScore);
	else if (playerScore === computerScore)
	console.log('The game ended in a draw, by the score of ' + playerScore + ' x ' + computerScore);
	else
	console.log('The COMPUTER won the game, by the score of ' + computerScore + ' x ' + playerScore);
}

game();
