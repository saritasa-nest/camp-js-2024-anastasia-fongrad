import { Subscriber } from './subscriber';

/** Publisher type implementing the observer pattern. */
export type Publisher <T> = {

	/** Subscribes a subject to receive notifications. */
	readonly subscribe: (subject: Subscriber<T>) => void;

	/** Unsubscribes a subject from receiving notifications. */
	readonly unsubscribe: (subject: Subscriber<T>) => void;

	/** Sends a message to all subscribers. */
	readonly notify: (message: T) => void;
};
