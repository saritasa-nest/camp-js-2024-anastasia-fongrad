import { PlayerTurnResult } from '../types/player-turn-result';
import { PlayerDisplayResult } from '../types/player-display-result';
import { Subscriber } from '../types/subscriber';

import { Publisher } from './publisher';
import { DiceGenerator } from './dice-generator';
import { Application } from './app';

/** Blackjack by dice player.*/
export class Player extends Publisher<PlayerDisplayResult, Application> implements Subscriber<PlayerTurnResult> {

	private readonly _name: string;

	private readonly _id: number;

	private readonly _diceResults: number[];

	private _winStatus: boolean;

	public constructor(playerId: number, name?: string) {
		super();
		this._id = playerId;
		if (name == null) {
			this._name = `Player ${playerId + 1}`;
		} else {
			this._name = name;
		}
		this._diceResults = [];
		this._winStatus = false;
		DiceGenerator.getInstance().subscribe(this);
	}

	/**
	 * Updates player information; if the player wins, eliminates them from the game.
	 * @param message Players result for this turn.
	 */
	public update(message: PlayerTurnResult): void {
		this._diceResults.push(message.diceResult);
		this._winStatus = this.score >= 21;
		const newMessage: PlayerDisplayResult = {
			playerId: this._id,
			newDiceResult: message.diceResult,
			playerScore: this.score,
			isWinner: this._winStatus,
		};
		this.notify(newMessage);
		if (this._winStatus) {
			DiceGenerator.getInstance().unsubscribe(this);
		}
	}

	/** Returns total score for the current player. */
	public get score(): number {
		return this._diceResults.reduce((sum, current) => sum + current, 0);
	}

	/** Returns the name of the current player. */
	public get name(): string {
		return this._name;
	}

	/** Returns the id of the current player. */
	public get id(): number {
		return this._id;
	}

	/** Checks if the player has won the game. */
	public get winStatus(): boolean {
		return this._winStatus;
	}
}
