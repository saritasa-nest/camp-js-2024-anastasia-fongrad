import { Subscriber } from './subscriber';

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
