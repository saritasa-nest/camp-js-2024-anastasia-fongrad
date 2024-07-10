import { PlayerTurnResult } from '../types/playerTurnResult';
import { Subscriber } from '../types/subscriber';

/** This is a description of the foo function. */
export class DiceCap implements Subscriber<PlayerTurnResult> {
	private readonly name: string;

	public constructor(name: string) {
		this.name = name;
	}

	/** This is a description of the foo function. */
	public update(message: PlayerTurnResult): void {
		console.log(`${this.name} received update: ${message}`);
	}

	/** This is a description of the foo function. */
	public subscribeToGenerator(diceGenerator: DiceGenerator): void {
		diceGenerator.subscribe(this);
	}

	/** This is a description of the foo function. */
	public unsubscribeFromGenerator(diceGenerator: DiceGenerator): void {
		diceGenerator.unsubscribe(this);
	}
}
