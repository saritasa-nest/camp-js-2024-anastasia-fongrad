import { DiceGenerator } from './dice-generator';
import { Publisher } from './publisher';

/** Generator that determines the player's turn order. */
export class TurnGenerator extends Publisher<number, DiceGenerator> {

	private currentPlayerId: number;

	private static instance: TurnGenerator | null = null;

	private constructor() {
		super();
		this.currentPlayerId = 0;
	}

	/** Determines the next player to roll the dice. */
	public getNextTurn(): void {
		this.notify(this.currentPlayerId);
		if (this.subscribers.size === 0) {
			return;
		}
		const subscribersCount = DiceGenerator.getInstance().getPlayersNumber();
		if (subscribersCount === 0) {
			this.unsubscribe(DiceGenerator.getInstance());
			return;
		}
		if (this.currentPlayerId >= subscribersCount - 1) {
			this.currentPlayerId = 0;
		} else {
			this.currentPlayerId += 1;
		}
	}

	/** Gets a class instance accordingly to the Singleton pattern. */
	public static getInstance(): TurnGenerator {
		if (!this.instance) {
			this.instance = new TurnGenerator();
		}
		return this.instance;
	}
}
