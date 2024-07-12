import { PlayerTurnResult } from '../types/player-turn-result';
import { PlayerDisplayResult } from '../types/player-display-result';

import { Subscriber } from '../types/subscriber';
import { Publisher } from '../types/publisher';

import { DiceGenerator } from './dice-generator';

/** Blackjack by dice player.*/
export class Player implements Subscriber<PlayerTurnResult>, Publisher<PlayerDisplayResult> {

	private readonly name: string;

	private readonly id: number;

	private readonly diceResults: number[];

	private winStatus: boolean;

	private readonly subscribers: Subscriber<PlayerDisplayResult>[];

	private readonly diceGenerator: DiceGenerator;

	public constructor(playerId: number, diceGenerator: DiceGenerator, name?: string) {
		this.id = playerId;
		if (name == null) {
			this.name = `Player ${playerId + 1}`;
		} else {
			this.name = name;
		}
		this.diceResults = [];
		this.subscribers = [];
		this.winStatus = false;
		this.diceGenerator = diceGenerator;
		this.diceGenerator.subscribe(this);
	}

	/**
	 * Subscribes a game display to receive notifications about the game.
	 * @param subject Result display object.
	 */
	public subscribe(subject: Subscriber<PlayerDisplayResult>): void {
		this.subscribers.push(subject);
	}

	/**
	 * Unsubscribes a game display from receiving notifications about the game.
	 * @param subject Result display object.
	 */
	public unsubscribe(subject: Subscriber<PlayerDisplayResult>): void {
		const index = this.subscribers.indexOf(subject);
		if (index !== -1) {
			this.subscribers.splice(index, 1);
		}
	}

	/**
	 * Notifies subscribers about new game events.
	 * @param message Ready-to-display information about the turn result.
	 */
	public notify(message: PlayerDisplayResult): void {
		this.subscribers.forEach(subscriber => {
			subscriber.update(message);
		});
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
			this.diceGenerator.unsubscribe(this);
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
