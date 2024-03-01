const VALID_CHOICES = ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK'];

function setPlayerChoice(player) {
	let playerChoice;

	do {
		playerChoice = prompt('Make your move').toUpperCase();
	} while (VALID_CHOICES.includes(playerChoice) === false);

	console.log(`Player choice: ${playerChoice}`);

	player.hand = playerChoice;
}

function randomArrayIndex(array) {
	let i = (Math.floor(Math.random() * 1000)) % array.length;
	console.log(`Array "VALID_CHOICES" index: ${i}`);
	return i;
}

function getComputerChoice(computer) {
	let i = randomArrayIndex(VALID_CHOICES);
	let computerChoice = VALID_CHOICES[i];

	console.log(`Computer choice: ${computerChoice}`);

	computer.hand = computerChoice;
}

function victory(winner, loser) {
	winner.roundVictory();
	loser.roundDefeat();

	console.log(`Round winner: ${winner.name}`);
}

function playRound(player, computer) {
	const HANDS = [player.hand, computer.hand];

	// if PLAYER and COMPUTER hands are equal, the round ends in a draw
	if (HANDS[0] === HANDS[1]) {
		player.roundDefeat();
		computer.roundDefeat();

		return;
	}
	else {
		// PLAYER victory conditions
		switch (HANDS[0]) {
			case 'ROCK':
				if ((HANDS[1] === 'LIZARD') || (HANDS[1] === 'SCISSORS')) {
					victory(player, computer);
					return;
				}
			break;

			case 'PAPER':
				if ((HANDS[1] === 'ROCK') || (HANDS[1] === 'SPOCK')) {
					victory(player, computer);
					return;
				}
			break;

			case 'SCISSORS':
				if ((HANDS[1] === 'PAPER') || (HANDS[1] === 'LIZARD')) {
					victory(player, computer);
					return;
				}
			break;

			case 'LIZARD':
				if ((HANDS[1] === 'SPOCK') || (HANDS[1] === 'PAPER')) {
					victory(player, computer);
					return;
				}
			break;

			case 'SPOCK':
				if ((HANDS[1] === 'SCISSORS') || (HANDS[1] === 'ROCK')) {
					victory(player, computer);
					return;
				}
			break;
		}
	}

	// if none of the conditions above are valid, COMPUTER is the winner of the round
	victory(computer, player);
}

function roundResultMessage(player, computer) {
	let	winner,
			loser,
			tied = false,
			message;

	if (player.wonRound === true) {
		winner = player;
		loser = computer;
	} else if (computer.wonRound === true) {
		winner = computer;
		loser = player;
	} else {
		tied = true;
	}

	if (tied === true) {
		message = 'Round tied!!! Nobody gets a point.';
	} else {
		message = `${winner.name} gets a point!!!\n`;

		switch (winner.hand) {
			case 'ROCK':
				switch (loser.hand) {
					case 'LIZARD':
						message += 'ROCK crushes LIZARD.';
					break;

					case 'SCISSORS':
						message += 'ROCK crushes SCISSORS.';
					break;
				}
			break;

			case 'PAPER':
				switch (loser.hand) {
					case 'ROCK':
						message += 'PAPER covers ROCK.';
					break;

					case 'SPOCK':
						message += 'PAPER disproves SPOCK.';
					break;
				}
			break;

			case 'SCISSORS':
				switch (loser.hand) {
					case 'PAPER':
						message += 'SCISSORS cuts PAPER.';
					break;

					case 'LIZARD':
						message += 'SCISSORS decapitates LIZARD.';
					break;
				}
			break;

			case 'LIZARD':
				switch (loser.hand) {
					case 'SPOCK':
						message += 'LIZARD poisons SPOCK.';
					break;

					case 'PAPER':
						message += 'LIZARD eats PAPER.';
					break;
				}
			break;

			case 'SPOCK':
				switch (loser.hand) {
					case 'SCISSORS':
						message += 'SPOCK smashes SCISSORS.';
					break;

					case 'ROCK':
						message += 'SPOCK vaporizes ROCK.';
					break;
				}
			break;
		}
	}

	console.log(message);
	return message;
}
