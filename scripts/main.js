const	player = new Player(),
			computer = new Player();
let		playerName = '';

computer.setName('COMPUTER');

do {
	playerName = prompt("What's your name?").toUpperCase();
} while (playerName === '');

player.setName(playerName);
console.log(`Player name: ${player.name}`);

for (let i = 1; i <= 5; i++) {
	console.log(`Round ${i}`);
	setPlayerChoice(player);
	getComputerChoice(computer);
	playRound(player, computer);
	roundResultMessage(player, computer);
	console.log(`Partial score: ${player.name} ${player.score} x ${computer.score} ${computer.name}`);
}

if (player.score > computer.score)
	console.log(`The ${player.name} won the game, by the score of ${player.score} x ${computer.score}`);
else if (player.score === computer.score)
	console.log(`The game ended in a draw, by the score of ${player.score} x ${computer.score}`);
else
	console.log(`The ${computer.name} won the game, by the score of ${computer.score} x ${player.score}`);
