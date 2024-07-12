import { Publisher } from '../types/publisher';
import { PlayerTurnResult } from '../types/player-turn-result';
import { Subscriber } from '../types/subscriber';
import { SIDES_COUNT } from '../constants';

import { TurnGenerator } from './turn-generator';

/** Generator that determines the value of a dice for a player. */
export class DiceGenerator implements Publisher<PlayerTurnResult>, Subscriber<number> {

	private readonly subscribers: Subscriber<PlayerTurnResult>[];

	private readonly sidesCount: number;

	private readonly playerIndex: number;

	private readonly turnGenerator: TurnGenerator;

	public constructor(playerIndex: number, turnGenerator: TurnGenerator) {
		this.playerIndex = playerIndex;
		this.sidesCount = SIDES_COUNT;
		this.subscribers = [];
		this.turnGenerator = turnGenerator;
		this.turnGenerator.subscribe(this);
	}

	/**
	 * Sends a player a message about their turn and the dice value.
	 * @param message Received player number in queue.
	 */
	public update(message: number): void {
		const result: PlayerTurnResult = {
			playerIndex: this.playerIndex,
			playerTurn: message,
			diceResult: this.generateDiceNumber(),
		};
		this.notify(result);
	}

	/**
	 * Subscribes a player to receive notifications.
	 * @param subject A player in blackjack by dice game.
	 */
	public subscribe(subject: Subscriber<PlayerTurnResult>): void {
		this.subscribers.push(subject);
	}

	/**
	 * Stops a game for the player.
	 * @param subject A player who wants to leave the game.
	 */
	public unsubscribe(subject: Subscriber<PlayerTurnResult>): void {
		const index = this.subscribers.indexOf(subject);
		if (index !== -1) {
			this.subscribers.splice(index, 1);
		}
		if (this.subscribers.length === 0) {
			this.turnGenerator.unsubscribe(this);
		}
	}

	/**
	 * Notifies players with player turn result.
	 * @param message Results for a player in a current round.
	 */
	public notify(message: PlayerTurnResult): void {
		this.subscribers.forEach(subscriber => {
			subscriber.update(message);
		});
	}

	/** Generates a random dice number. */
	public generateDiceNumber(): number {
		return Math.floor(Math.random() * this.sidesCount) + 1;
	}
}
