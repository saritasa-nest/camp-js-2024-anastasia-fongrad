import { PLAYERS_COUNT } from '../constants';

import { Subscriber } from '../types/subscriber';
import { PlayerDisplayResult } from '../types/playerDisplayResult';

import { TurnGenerator } from './turnGenerator';
import { DiceGenerator } from './diceGenerator';

import { Player } from './player';

/** This is a description of the foo function. */
export class ResultDisplay implements Subscriber<PlayerDisplayResult> {

	private readonly players: Player[];

	private readonly turnGenerator: TurnGenerator;

	public constructor() {
		this.players = [];
		this.turnGenerator = new TurnGenerator();
		this.createPlayers();
		this.startGame();
	}

	/**
	 * 1.
	 * @param message 1.
	 */
	public update(message: PlayerDisplayResult): void {
		const diceCapElement = <HTMLElement>document.querySelector('.main__dice-cap');

		// Update the header with the total score
		const header = <HTMLElement>diceCapElement.querySelector('.dice-cap__header');
		header.textContent = `Dice cap - ${message.playerScore}`;

		// Create a new list item for the new dice result
		const newDiceValueElement = document.createElement('li');
		newDiceValueElement.className = 'dice-cap__value';
		newDiceValueElement.textContent = `${message.newDiceResult}`;

		// Add the new dice result to the list of dice values
		const diceValuesList = <HTMLElement>diceCapElement.querySelector('.dice-cap__values');
		diceValuesList.appendChild(newDiceValueElement);
	}

	/**
	 * 1.
	 */
	public addPlayerFields(): void {
		const parentElement = <HTMLElement>document.querySelector('.main__fields');
		this.players.forEach(player => {
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

	/** This is a description of the foo function. */
	public createPlayers(): void {
		for (let id = 0; id < PLAYERS_COUNT; id++) {
			const playerName = `Player ${id + 1}`;
			const player = new Player(playerName);
			this.players.push(player);
			const diceGenerator = new DiceGenerator(id);
			diceGenerator.subscribe(player);
			this.turnGenerator.subscribe(diceGenerator);
		}
		this.addPlayerFields();
	}

	/** This is a description of the foo function. */
	public startGame(): void {
		const rollButton = <HTMLButtonElement>document.querySelector('.main__button');
		rollButton.addEventListener('click', () => {
			this.turnGenerator.getNextTurn();
		});
	}
}
