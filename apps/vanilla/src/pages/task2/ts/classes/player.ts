import { PlayerTurnResult } from '../types/player-turn-result';
import { PlayerDisplayResult } from '../types/player-display-result';
import { Subscriber } from '../types/subscriber';

import { Publisher } from './publisher';

import { DiceGenerator } from './dice-generator';
import { ResultDisplay } from './result-display';

/** Blackjack by dice player.*/
export class Player extends Publisher<PlayerDisplayResult, ResultDisplay> implements Subscriber<PlayerTurnResult> {

	private readonly name: string;

	private readonly id: number;

	private readonly diceResults: number[];

	private winStatus: boolean;

	public constructor(playerId: number, name?: string) {
		super();
		this.id = playerId;
		if (name == null) {
			this.name = `Player ${playerId + 1}`;
		} else {
			this.name = name;
		}
		this.diceResults = [];
		this.winStatus = false;
		DiceGenerator.getInstance().subscribe(this);
	}

	/**
	 * Updates player information; if the player wins, eliminates them from the game.
	 * @param message Players result for this turn.
	 */
	public update(message: PlayerTurnResult): void {
		this.diceResults.push(message.diceResult);
		this.winStatus = this.getScore() >= 21;
		const newMessage: PlayerDisplayResult = {
			playerId: message.playerId,
			newDiceResult: message.diceResult,
			playerScore: this.getScore(),
			isWinner: this.winStatus,
		};
		this.notify(newMessage);
		if (this.isWinner()) {
			DiceGenerator.getInstance().unsubscribe(this);
		}
	}

	/** Returns total score for the current player. */
	public getScore(): number {
		return this.diceResults.reduce((sum, current) => sum + current, 0);
	}

	/** Returns current players name. */
	public getName(): string {
		return this.name;
	}

	/** Returns current players name. */
	public getId(): number {
		return this.id;
	}

	/** Checks if the player has won the game. */
	public isWinner(): boolean {
		return this.winStatus;
	}
}
