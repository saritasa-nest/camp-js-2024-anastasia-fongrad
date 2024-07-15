import { DiceGenerator } from './dice-generator';
import { Publisher } from './publisher';

/** Generator that determines the player's turn order. */
export class TurnGenerator extends Publisher<number, DiceGenerator> {

	private _currentPlayerId: number;

	private static _instance: TurnGenerator | null = null;

	private constructor() {
		super();
		this._currentPlayerId = 0;
	}

	/** Determines the next player to roll the dice. */
	public generateNextTurn(): void {
		this.notify(this._currentPlayerId);
		if (this.subscribers.size === 0) {
			return;
		}
		const subscribersCount = DiceGenerator.getInstance().getPlayersNumber();
		if (subscribersCount === 0) {
			this.unsubscribe(DiceGenerator.getInstance());
			return;
		}
		if (this._currentPlayerId >= subscribersCount - 1) {
			this._currentPlayerId = 0;
		} else {
			this._currentPlayerId += 1;
		}
	}

	/** Gets a class instance accordingly to the Singleton pattern. */
	public static getInstance(): TurnGenerator {
		if (!this._instance) {
			this._instance = new TurnGenerator();
		}
		return this._instance;
	}
}
