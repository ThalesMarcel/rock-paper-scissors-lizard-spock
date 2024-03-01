class Player {
	constructor() {
		this.name = '';
		this.hand = '';
		this.wonRound = false;
		this.score = 0;
	}

	setName(value) {
		this.name = value;
	}

	getName() {
		return this.name;
	}

	setHand(value) {
		this.hand = value;
	}

	getHand() {
		return this.hand;
	}

	roundVictory() {
		this.wonRound = true;
		this.score++;
	}

	roundDefeat() {
		this.wonRound = false;
	}
}
