import { PlayerTurnResult } from '../types/playerTurnResult';
import { Subscriber } from '../types/subscriber';

/** This is a description of the foo function. */
export class DiceCap implements Subscriber<PlayerTurnResult> {
	private readonly name: string;

	public constructor(name: string) {
		this.name = name;
	}

	/**
	 * 1.
	 * @param message 1.
	 */
	public update(message: PlayerTurnResult): void {
		console.log(`${this.name} received update: ${message}`);
	}
}
