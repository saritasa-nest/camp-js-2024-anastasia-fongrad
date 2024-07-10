import { Publisher } from '../types/publisher';
import { Subscriber } from '../types/subscriber';
import { PLAYERS_COUNT } from '../constants';

/** This is a description of the foo function. */
export class TurnGenerator implements Publisher<number> {

	private readonly subscribers: Subscriber<number>[];

	private readonly playersCount: number;

	private currentPlayerIndex: number;

	public constructor() {
		this.playersCount = PLAYERS_COUNT;
		this.subscribers = [];
		this.currentPlayerIndex = PLAYERS_COUNT;
	}

	/** This is a description of the foo function. */
	public getSubscribersList(): Subscriber<number>[] {
		return this.subscribers;
	}

	/**
	 * 1.
	 * @param subject 1.
	 */
	public subscribe(subject: Subscriber<number>): void {
		this.subscribers.push(subject);
	}

	/**
	 * 1.
	 * @param subject 1.
	 */
	public unsubscribe(subject: Subscriber<number>): void {
		const index = this.subscribers.indexOf(subject);
		if (index !== -1) {
			this.subscribers.splice(index, 1);
		}
	}

	/**
	 * 1.
	 * @param message 1.
	 */
	public notify(message: number): void {
		const subscriber = this.subscribers[this.currentPlayerIndex];
		console.log(this.subscribers);
		console.log(subscriber);
		subscriber.update(message);
	}

	/** This is a description of the foo function. */
	public getNextTurn(): void {
		if (this.currentPlayerIndex >= this.playersCount - 1) {
			this.currentPlayerIndex = 0;
		}else {
			this.currentPlayerIndex += 1;
		}
		console.log(this.currentPlayerIndex);
		this.notify(this.currentPlayerIndex);
	}
}
