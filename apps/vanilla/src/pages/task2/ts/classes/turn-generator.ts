import { PLAYERS_COUNT } from '../constants';

import { DiceGenerator } from './dice-generator';

import { Publisher } from './publisher';

/** Generator that determines the player's turn order. */
export class TurnGenerator extends Publisher<number, DiceGenerator> {

	private currentPlayerId: number;

	public constructor() {
		super();
		this.currentPlayerId = PLAYERS_COUNT;
	}

	/** Determines the next player to roll the dice. */
	public getNextTurn(): void {
		const subscribersCount = this.subscribers[0].getPlayersNumber();
		if (subscribersCount === 0) {
			return;
		}
		if (this.currentPlayerId >= subscribersCount - 1) {
			this.currentPlayerId = 0;
		} else {
			this.currentPlayerId += 1;
		}
		this.notify(this.currentPlayerId);
	}
}
