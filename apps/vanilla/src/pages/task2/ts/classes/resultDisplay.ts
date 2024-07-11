import { PLAYERS_COUNT } from '../constants';

import { Subscriber } from '../types/subscriber';
import { PlayerDisplayResult } from '../types/playerDisplayResult';

import { TurnGenerator } from './turnGenerator';

import { Player } from './player';

/** This is a description of the foo function. */
export class ResultDisplay implements Subscriber<PlayerDisplayResult> {

	private readonly players: Player[];

	private readonly turnGenerator: TurnGenerator;

	public constructor() {
		this.players = [];
		this.turnGenerator = new TurnGenerator();
	}

	/**
	 * Updates page information accordingly to the dice results.
	 * @param message Ready-for-display dice results.
	 */
	public update(message: PlayerDisplayResult): void {
		const totalScore = this.players.reduce((sum, current) => sum + current.getScore(), 0);
		const diceCapElement = <HTMLElement>document.querySelector('.main__dice-cap');
		const header = <HTMLElement>diceCapElement.querySelector('.dice-cap__header');
		header.textContent = `Dice cap - ${totalScore}`;

		const newDiceValueElement = document.createElement('li');
		newDiceValueElement.className = 'dice-cap__value';
		newDiceValueElement.textContent = `${message.newDiceResult}`;
		const diceValuesList = <HTMLElement>diceCapElement.querySelector('.dice-cap__values');
		diceValuesList.appendChild(newDiceValueElement);

		const playerField = <HTMLElement>document.querySelector(`#Player${message.playerIndex}`);
		const score = <HTMLElement>playerField.querySelector('.player-field__score');
		score.textContent = `Player score: ${message.playerScore}`;

		const newPlayerValueElement = document.createElement('li');
		newPlayerValueElement.className = 'dice-cap__value';
		newPlayerValueElement.textContent = `${message.newDiceResult}`;
		const playerValuesList = <HTMLElement>playerField.querySelector('.player-field__dice-values');
		playerValuesList.appendChild(newPlayerValueElement);

		if (message.isWinner) {
			playerField.classList.add('_winner');
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
			header.textContent = player.getName();
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
			const player = new Player(playerName, id, this.turnGenerator);
			this.players.push(player);
			player.subscribe(this);
		}
		this.addPlayerFields();
	}

	/** This is a description of the foo function. */
	public startGame(): void {
		this.createPlayers();
		const rollButton = <HTMLButtonElement>document.querySelector('.main__button');
		rollButton.addEventListener('click', () => {
			this.turnGenerator.getNextTurn();
		});
	}
}
