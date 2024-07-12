import { Subscriber } from '../types/subscriber';

/** Generator that determines the value of a dice for a player. */
export class Publisher<T, S extends Subscriber<T>> {

	/** Generator that determines the value of a dice for a player. */
	protected readonly subscribers: Set<S>;

	protected constructor() {
		this.subscribers = new Set<S>();
	}

	/**
	 * Subscribes a player to receive notifications.
	 * @param subject A player in blackjack by dice game.
	 */
	public subscribe(subject: S): void {
		this.subscribers.add(subject);
	}

	/**
	 * Stops a game for the player.
	 * @param subject A player who wants to leave the game.
	 */
	public unsubscribe(subject: S): void {
		if (this.subscribers.has(subject)) {
			this.subscribers.delete(subject);
		}
	}

	/**
	 * Notifies players with player turn result.
	 * @param message Results for a player in a current round.
	 */
	public notify(message: T): void {
		this.subscribers.forEach(subscriber => {
			subscriber.update(message);
		});
	}
}
