import { PlayerTurnResult } from '../types/playerTurnResult';
import { PlayerDisplayResult } from '../types/playerDisplayResult';

import { Subscriber } from '../types/subscriber';
import { Publisher } from '../types/publisher';

import { DiceGenerator } from './diceGenerator';
import { TurnGenerator } from './turnGenerator';

/** This is a description of the foo function. */
export class Player implements Subscriber<PlayerTurnResult>, Publisher<PlayerDisplayResult> {

	/** This is a description of the foo function. */
	public readonly name: string;

	/** This is a description of the foo function. */
	public readonly diceResults: number[];

	/** This is a description of the foo function. */
	private winStatus: boolean;

	private readonly subscribers: Subscriber<PlayerDisplayResult>[];

	private readonly diceGenerator: DiceGenerator;

	public constructor(name: string, playerIndex: number, turnGenerator: TurnGenerator) {
		this.name = name;
		this.diceResults = [];
		this.subscribers = [];
		this.winStatus = false;
		this.diceGenerator = new DiceGenerator(playerIndex, turnGenerator);
		this.diceGenerator.subscribe(this);
	}

	/** This is a description of the foo function. */
	public getSubscribersList(): Subscriber<PlayerDisplayResult>[] {
		return this.subscribers;
	}

	/**
	 * 1.
	 * @param subject 1.
	 */
	public subscribe(subject: Subscriber<PlayerDisplayResult>): void {
		this.subscribers.push(subject);
	}

	/**
	 * 1.
	 * @param subject 1.
	 */
	public unsubscribe(subject: Subscriber<PlayerDisplayResult>): void {
		const index = this.subscribers.indexOf(subject);
		if (index !== -1) {
			this.subscribers.splice(index, 1);
		}
	}

	/**
	 * 1.
	 * @param message 1.
	 */
	public notify(message: PlayerDisplayResult): void {
		this.subscribers.forEach(subscriber => {
			subscriber.update(message);
		});
	}

	/**
	 * 1.
	 * @param message 1.
	 */
	public update(message: PlayerTurnResult): void {
		this.diceResults.push(message.diceResult);
		this.winStatus = this.getScore() >= 21;
		const newMessage: PlayerDisplayResult = {
			playerIndex: message.playerIndex,
			newDiceResult: message.diceResult,
			playerScore: this.getScore(),
			isWinner: this.winStatus,
		};
		this.notify(newMessage);
		if (this.isWinner()) {
			this.diceGenerator.unsubscribe(this);
		}
	}

	/** This is a description of the foo function. */
	public getScore(): number {
		return this.diceResults.reduce((sum, current) => sum + current, 0);
	}

	/** This is a description of the foo function. */
	public isWinner(): boolean {
		return this.winStatus;
	}
}
