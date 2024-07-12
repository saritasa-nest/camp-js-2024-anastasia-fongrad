import { Subscriber } from '../types/subscriber';

/** Publisher implementing the observer design pattern. */
export class Publisher<T, S extends Subscriber<T>> {

	/** Set of subscribers for the current publisher. */
	protected readonly subscribers: Set<S>;

	protected constructor() {
		this.subscribers = new Set<S>();
	}

	/**
	 * Subscribes a subject to receive notifications.
	 * @param subject A subject implementing the observer design pattern.
	 */
	public subscribe(subject: S): void {
		this.subscribers.add(subject);
	}

	/**
	 * Unsubscribes a subject from receiving notifications.
	 * @param subject A subject implementing the observer design pattern.
	 */
	public unsubscribe(subject: S): void {
		if (this.subscribers.has(subject)) {
			this.subscribers.delete(subject);
		}
	}

	/**
	 * Notifies all the subscribers with a message.
	 * @param message A message that needs to be send to subscribers.
	 */
	public notify(message: T): void {
		this.subscribers.forEach(subscriber => {
			subscriber.update(message);
		});
	}
}
