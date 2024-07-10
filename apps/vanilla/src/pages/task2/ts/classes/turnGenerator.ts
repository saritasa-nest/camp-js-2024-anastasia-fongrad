import { Publisher } from '../types/publisher';
import { Subscriber } from '../types/subscriber';

/** This is a description of the foo function. */
export class TurnGenerator implements Publisher<number> {

	private readonly subscribers: Subscriber<number>[];

	private readonly playersCount: number;

	private currentPlayerIndex: number;

	public constructor() {
		this.playersCount = PLAYERS_COUNT;
		this.subscribers = [];
		this.currentPlayerIndex = 0;
	}

	/** This is a description of the foo function. */
	public getSubscribersList(): Subscriber<number>[] {
		return this.subscribers;
	}

	/** This is a description of the foo function. */
	public subscribe(subject: Subscriber<number>): void {
		this.subscribers.push(subject);
	}

	/** This is a description of the foo function. */
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
		subscriber.update(message);
	}

	/** This is a description of the foo function. */
	public getNextTurn(): void {
		if (this.currentPlayerIndex >= this.playersCount) {
			this.currentPlayerIndex = 0;
			return;
		}
		this.currentPlayerIndex += 1;
		this.notify(this.currentPlayerIndex);
	}
}
