
type Publisher <T> = {

	/** This is a description of the foo function. */
	readonly subscribers: Subscriber<T>[];

	/** This is a description of the foo function. */
	readonly subscribe: (subject: Subscriber<T>) => void;

	/** This is a description of the foo function. */
	readonly unsubscribe: (subject: Subscriber<T>) => void;

	/** This is a description of the foo function. */
	readonly notify: (subject: Subscriber<T>) => void;
};

type Subscriber<T> = {

	/** This is a description of the foo function. */
	readonly update: () => T;
};

/** This is a description of the foo function. */
class TurnGenerator<T> implements Publisher<T> {

	/** This is a description of the foo function. */
	public readonly subscribers: Subscriber<T>[] = [];

	/** This is a description of the foo function. */
	public subscribe(subject: Subscriber<T>): void {
		this.subscribers.push(subject);
	}

	/** This is a description of the foo function. */
	public unsubscribe(subject: Subscriber<T>): void {
		this.subscribers = this.subscribers.filter(sub => sub !== subject);
	}

	/** This is a description of the foo function. */
	public notify(subject: Subscriber<T>): void {
		const updatedValue = subject.update();
		console.log(`Notifying subscribers: ${updatedValue}`);
	}
}
