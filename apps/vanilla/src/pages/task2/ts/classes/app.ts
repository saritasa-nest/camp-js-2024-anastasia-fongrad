import { PLAYERS_COUNT } from '../constants';
import { Subscriber } from '../types/subscriber';
import { PlayerDisplayResult } from '../types/player-display-result';

import { TurnGenerator } from './turn-generator';
import { Player } from './player';

/** Displays the game on the html page. */
export class Application implements Subscriber<PlayerDisplayResult> {

	private readonly players: Player[];

	public constructor() {
		this.players = [];
	}

	/**
	 * Updates page information accordingly to the dice results.
	 * @param message Ready-for-display dice results.
	 */
	public update(message: PlayerDisplayResult): void {
		const totalScore = this.players.reduce((sum, current) => sum + current.score, 0);
		const diceCapElement = <HTMLElement>document.querySelector('.main__dice-cap');
		const totalScoreElement = <HTMLElement>diceCapElement.querySelector('.dice-cap__score');
		totalScoreElement.textContent = `Total score: ${totalScore}`;

		const newDiceValueElement = document.createElement('li');
		newDiceValueElement.className = 'dice-cap__value';
		newDiceValueElement.textContent = `${message.newDiceResult}`;
		const diceValuesList = <HTMLElement>diceCapElement.querySelector('.dice-cap__values');
		diceValuesList.appendChild(newDiceValueElement);

		const playerField = <HTMLElement>document.querySelector(`#Player${message.playerId}`);
		const playerScoreElement = <HTMLElement>playerField.querySelector('.player-field__score');
		playerScoreElement.textContent = `Player score: ${message.playerScore}`;

		const newPlayerValueElement = document.createElement('li');
		newPlayerValueElement.className = 'dice-cap__value';
		newPlayerValueElement.textContent = `${message.newDiceResult}`;
		const playerValuesList = <HTMLElement>playerField.querySelector('.player-field__dice-values');
		playerValuesList.appendChild(newPlayerValueElement);

		if (message.isWinner) {
			playerField.classList.add('player-field_winner');
		}
	}

	/** Creates HTML fields for e player. */
	public addPlayerFields(): void {
		const parentElement = <HTMLElement>document.querySelector('.main__fields');
		this.players.forEach((player, index) => {
			const playerField = document.createElement('div');
			playerField.className = 'main__player-field player-field';
			playerField.id = `Player${index}`;

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

	/** Creates players and starts the game. */
	public startGame(): void {
		for (let index = 0; index < PLAYERS_COUNT; index++) {
			const player = new Player(index);
			this.players.push(player);
			player.subscribe(this);
		}
		this.addPlayerFields();
		const rollButton = <HTMLButtonElement>document.querySelector('.main__button');
		rollButton.addEventListener('click', () => {
			TurnGenerator.getInstance().generateNextTurn();
		});
	}
}
