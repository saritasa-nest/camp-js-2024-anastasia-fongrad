import { Publisher } from '../types/publisher';
import { Subscriber } from '../types/subscriber';
import { PLAYERS_COUNT } from '../constants';

/** Generator that determines the player's turn order. */
export class TurnGenerator implements Publisher<number> {

	private readonly subscribers: Subscriber<number>[];

	private currentPlayerId: number;

	public constructor() {
		this.subscribers = [];
		this.currentPlayerId = PLAYERS_COUNT;
	}

	/**
	 * Subscribes a subject to receive notifications.
	 * @param subject Dice generator object.
	 */
	public subscribe(subject: Subscriber<number>): void {
		this.subscribers.push(subject);
	}

	/**
	 * Unsubscribes a subject from receiving notifications.
	 * @param subject Dice generator object.
	 */
	public unsubscribe(subject: Subscriber<number>): void {
		const index = this.subscribers.indexOf(subject);
		if (index !== -1) {
			this.subscribers.splice(index, 1);
		}
	}

	/**
	 * Sends a message to a subscriber with right id.
	 * @param message Number of the player throwing the dice.
	 */
	public notify(message: number): void {
		const subscriber = this.subscribers[this.currentPlayerId];
		subscriber.update(message);
	}

	/** Determines the next player to roll the dice. */
	public getNextTurn(): void {
		if (this.subscribers.length === 0) {
			return;
		}
		if (this.currentPlayerId >= this.subscribers.length - 1) {
			this.currentPlayerId = 0;
		} else {
			this.currentPlayerId += 1;
		}
		this.notify(this.currentPlayerId);
	}
}
