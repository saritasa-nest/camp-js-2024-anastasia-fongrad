/** This is a description of the foo function. */
export const PLAYERS_COUNT = 2;

/** This is a description of the foo function. */
export const SIDES_COUNT = 6;

/** This is a description of the foo function. */
export type TurnMessage = {

	/** This is a description of the foo function. */
	readonly turn: number;
};

/** This is a description of the foo function. */
export type PlayerTurnResult = {

	/** This is a description of the foo function. */
	readonly playerIndex: number;

	/** This is a description of the foo function. */
	readonly diceResult: number;
};

/** This is a description of the foo function. */
export type Publisher <T> = {

	/** This is a description of the foo function. */
	readonly subscribe: (subject: Subscriber<T>) => void;

	/** This is a description of the foo function. */
	readonly unsubscribe: (subject: Subscriber<T>) => void;

	/** This is a description of the foo function. */
	readonly notify: (message: T) => void;

	/** This is a description of the foo function. */
	readonly getSubscribersList: () => Subscriber<T>[];
};

/** This is a description of the foo function. */
export type Subscriber<T> = {

	/** This is a description of the foo function. */
	readonly update: (message: T) => void;
};

/** This is a description of the foo function. */
export class TurnGenerator implements Publisher<TurnMessage> {

	private readonly subscribers: Subscriber<TurnMessage>[];

	private readonly playersCount: number;

	private currentPlayerIndex: number;

	public constructor() {
		this.playersCount = PLAYERS_COUNT;
		this.subscribers = [];
		this.currentPlayerIndex = 0;
	}

	/** This is a description of the foo function. */
	public getSubscribersList(): Subscriber<TurnMessage>[] {
		return this.subscribers;
	}

	/** This is a description of the foo function. */
	public subscribe(subject: Subscriber<TurnMessage>): void {
		this.subscribers.push(subject);
	}

	/** This is a description of the foo function. */
	public unsubscribe(subject: Subscriber<TurnMessage>): void {
		const index = this.subscribers.indexOf(subject);
		if (index !== -1) {
			this.subscribers.splice(index, 1);
		}
	}

	/**
	 * 1.
	 * @param message 1.
	 */
	public notify(message: TurnMessage): void {
		this.subscribers.forEach(subscriber => {
			subscriber.update(message);
		});
	}

	/** This is a description of the foo function. */
	public getNextTurn(): void {
		if (this.currentPlayerIndex >= this.playersCount) {
			this.currentPlayerIndex = 0;
			return;
		}
		this.currentPlayerIndex += 1;
	}
}

/** This is a description of the foo function. */
export class DiceGenerator implements Publisher<PlayerTurnResult>, Subscriber<TurnMessage> {

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
	public update(message: TurnMessage): void {
		if (this.playerIndex === message.turn) {
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

	/** This is a description of the foo function. */
	public subscribeToGenerator(diceGenerator: DiceGenerator): void {
		diceGenerator.subscribe(this);
	}

	/** This is a description of the foo function. */
	public unsubscribeFromGenerator(diceGenerator: DiceGenerator): void {
		diceGenerator.unsubscribe(this);
	}
}

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
