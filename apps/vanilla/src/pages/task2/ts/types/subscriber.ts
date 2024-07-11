/** Subscriber type implementing the observer pattern. */
export type Subscriber<T> = {

	/** Receives a message from the publisher processes it. */
	readonly update: (message: T) => void;
};
