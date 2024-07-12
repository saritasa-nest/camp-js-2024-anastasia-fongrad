import { PlayerTurnResult } from '../types/player-turn-result';
import { Subscriber } from '../types/subscriber';
import { SIDES_COUNT } from '../constants';

import { Publisher } from './publisher';

import { TurnGenerator } from './turn-generator';
import { Player } from './player';

/** Generator that determines the value of a dice for a player. */
export class DiceGenerator extends Publisher<PlayerTurnResult, Player> implements Subscriber<number> {

	private readonly sidesCount: number;

	private static instance: DiceGenerator | null = null;

	private constructor() {
		super();
		this.sidesCount = SIDES_COUNT;
		TurnGenerator.getInstance().subscribe(this);
	}

	/**
	 * Sends a player a message about their turn and the dice value.
	 * @param message Received player number in queue.
	 */
	public update(message: number): void {
		const result: PlayerTurnResult = {
			playerId: message,
			diceResult: this.generateDiceNumber(),
		};
		this.notify(result);
	}

	/**
	 * Notifies players with player turn result.
	 * @param message Results for a player in a current round.
	 */
	public override notify(message: PlayerTurnResult): void {
		const subscriber = Array.from(this.subscribers).find(subject => subject.getId() === message.playerId);
		if (subscriber == null) {
			return;
		}
		subscriber.update(message);
	}

	/** Generates a random dice number. */
	public static getInstance(): DiceGenerator {
		if (!this.instance) {
			this.instance = new DiceGenerator();
		}
		return this.instance;
	}

	/** Generates a random dice number. */
	public generateDiceNumber(): number {
		return Math.floor(Math.random() * this.sidesCount) + 1;
	}

	/** Generates a random dice number. */
	public getPlayersNumber(): number {
		return this.subscribers.size;
	}
}
