import { PlayerTurnResult } from '../types/playerTurnResult';
import { Subscriber } from '../types/subscriber';

/** This is a description of the foo function. */
export class Player implements Subscriber<PlayerTurnResult> {

	/** This is a description of the foo function. */
	public readonly name: string;

	public constructor(name: string) {
		this.name = name;
	}

	/** This is a description of the foo function. */
	public update(message: PlayerTurnResult): void {
		console.log(`${this.name} received update: ${message}`);
	}
}
