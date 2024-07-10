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
export type DiceMessage = {

	/** This is a description of the foo function. */
	readonly diceValue: number;
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
export class TurnGenerator<T> implements Publisher<T> {

	private readonly subscribers: Subscriber<T>[];

	private readonly playersCount: number;

	private currentPlayerIndex: number;

	public constructor() {
		this.playersCount = PLAYERS_COUNT;
		this.subscribers = [];
		this.currentPlayerIndex = 0;
	}

	/** This is a description of the foo function. */
	public getSubscribersList(): Subscriber<T>[] {
		return this.subscribers;
	}

	/** This is a description of the foo function. */
	public subscribe(subject: Subscriber<T>): void {
		this.subscribers.push(subject);
	}

	/** This is a description of the foo function. */
	public unsubscribe(subject: Subscriber<T>): void {
		const index = this.subscribers.indexOf(subject);
		if (index !== -1) {
			this.subscribers.splice(index, 1);
		}
	}

	/**
	 * 1.
	 * @param message 1.
	 */
	public notify(message: T): void {
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
export class DiceGenerator<T> implements Publisher<T> {

	private readonly subscribers: Subscriber<T>[];

	private readonly sidesCount: number;

	public constructor() {
		this.sidesCount = SIDES_COUNT;
		this.subscribers = [];
	}

	public getSubscribersList(): Subscriber<T>[] {
		return this.subscribers;
	}

	/** This is a description of the foo function. */
	public subscribe(subject: Subscriber<T>): void {
		this.subscribers.push(subject);
	}

	/** This is a description of the foo function. */
	public unsubscribe(subject: Subscriber<T>): void {
		const index = this.subscribers.indexOf(subject);
		if (index !== -1) {
			this.subscribers.splice(index, 1);
		}
	}

	/**
	 * 1.
	 * @param message 1.
	 */
	public notify(message: T): void {
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
export class Player implements Subscriber<TurnMessage | DiceMessage> {
	private readonly name: string;

	public constructor(name: string) {
		this.name = name;
	}

	/** This is a description of the foo function. */
	public update(message: TurnMessage | DiceMessage): void {
		console.log(`${this.name} received update: ${message}`);
	}

	/** This is a description of the foo function. */
	public subscribeToGenerators(turnGenerator: TurnGenerator<TurnMessage>, diceGenerator: DiceGenerator<DiceMessage>): void {
		turnGenerator.subscribe(this);
		diceGenerator.subscribe(this);
	}

	/** This is a description of the foo function. */
	public unsubscribeFromGenerators(turnGenerator: TurnGenerator<TurnMessage>, diceGenerator: DiceGenerator<DiceMessage>): void {
		turnGenerator.unsubscribe(this);
		diceGenerator.unsubscribe(this);
	}
}

/** This is a description of the foo function. */
export class DiceCap implements Subscriber<TurnMessage | DiceMessage> {
	private readonly name: string;

	public constructor(name: string) {
		this.name = name;
	}

	/** This is a description of the foo function. */
	public update(message: TurnMessage | DiceMessage): void {
		console.log(`${this.name} received update: ${message}`);
	}

	/** This is a description of the foo function. */
	public subscribeToGenerators(turnGenerator: TurnGenerator<TurnMessage>, diceGenerator: DiceGenerator<DiceMessage>): void {
		turnGenerator.subscribe(this);
		diceGenerator.subscribe(this);
	}

	/** This is a description of the foo function. */
	public unsubscribeFromGenerators(turnGenerator: TurnGenerator<TurnMessage>, diceGenerator: DiceGenerator<DiceMessage>): void {
		turnGenerator.unsubscribe(this);
		diceGenerator.unsubscribe(this);
	}
}
