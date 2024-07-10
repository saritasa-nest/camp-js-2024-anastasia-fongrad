import { Publisher } from '../types/publisher';
import { PlayerTurnResult } from '../types/playerTurnResult';
import { Subscriber } from '../types/subscriber';
import { SIDES_COUNT } from '../constants';

/** This is a description of the foo function. */
export class DiceGenerator implements Publisher<PlayerTurnResult>, Subscriber<number> {

	private readonly subscribers: Subscriber<PlayerTurnResult>[];

	private readonly sidesCount: number;

	private readonly playerIndex: number;

	public constructor(playerIndex: number) {
		this.playerIndex = playerIndex;
		this.sidesCount = SIDES_COUNT;
		this.subscribers = [];
	}

	/**
	 * 1.
	 * @param message 1.
	 */
	public update(message: number): void {
		if (this.playerIndex === message) {
			const result: PlayerTurnResult = {
				playerIndex: this.playerIndex,
				diceResult: this.generateDiceNumber(),
			};
			this.notify(result);
		}
	}

	/** This is a description of the foo function. */
	public getSubscribersList(): Subscriber<PlayerTurnResult>[] {
		return this.subscribers;
	}

	/** This is a description of the foo function. */
	public subscribe(subject: Subscriber<PlayerTurnResult>): void {
		this.subscribers.push(subject);
	}

	/** This is a description of the foo function. */
	public unsubscribe(subject: Subscriber<PlayerTurnResult>): void {
		const index = this.subscribers.indexOf(subject);
		if (index !== -1) {
			this.subscribers.splice(index, 1);
		}
	}

	/**
	 * 1.
	 * @param message 1.
	 */
	public notify(message: PlayerTurnResult): void {
		this.subscribers.forEach(subscriber => {
			subscriber.update(message);
		});
	}

	/** This is a description of the foo function. */
	public generateDiceNumber(): number {
		return Math.floor(Math.random() * this.sidesCount) + 1;
	}
}
