import { Subscriber } from './subscriber';

/** Publisher type implementing the observer pattern. */
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
