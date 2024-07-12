import { Subscriber } from '../types/subscriber';

/** Generator that determines the value of a dice for a player. */
export class Publisher<T> {

	private readonly subscribers: Subscriber<T>[] = [];

	/**
	 * Subscribes a player to receive notifications.
	 * @param subject A player in blackjack by dice game.
	 */
	public subscribe(subject: Subscriber<T>): void {
		this.subscribers.push(subject);
	}

	/**
	 * Stops a game for the player.
	 * @param subject A player who wants to leave the game.
	 */
	public unsubscribe(subject: Subscriber<T>): void {
		const index = this.subscribers.indexOf(subject);
		if (index !== -1) {
			this.subscribers.splice(index, 1);
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
