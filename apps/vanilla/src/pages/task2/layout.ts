import { PLAYERS_COUNT, Player } from './main.js';

/** */
function createPlayers(): Player[] {
	const players: Player[] = [];
	for (let id = 0; id < PLAYERS_COUNT; id++) {
		const playerName = `Player ${id + 1}`;
		players.push(new Player(playerName));
	}
	return players;
}

/**
 * 1.
 * @param players 1.
 * @param parentElement 1.
 */
function addPlayerFields(players: Player[], parentElement: HTMLElement): void {
	players.forEach(player => {
		const playerField = document.createElement('div');
		playerField.className = 'main__player-field player-field';

		const header = document.createElement('h2');
		header.className = 'player-field__header';
		header.textContent = player.name;
		playerField.appendChild(header);

		const diceValues = document.createElement('ul');
		diceValues.className = 'player-field__dice-values';

		playerField.appendChild(diceValues);

		const score = document.createElement('div');
		score.className = 'player-field__score';
		score.textContent = `Player score: ${0}`;
		playerField.appendChild(score);

		parentElement.appendChild(playerField);
	});
}

const players: Player[] = createPlayers();
const parentElement = <HTMLElement>document.querySelector('.main__fields');

if (parentElement != null) {
	addPlayerFields(players, parentElement);
}
