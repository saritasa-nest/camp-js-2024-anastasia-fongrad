import { Immerable, OmitImmerable } from './immerable.model';

/** Studio. */
export class AnimeStudio extends Immerable {

	/** Id. */
	public readonly id: number;

	/** Name. */
	public readonly name: string;

	/** Image url. */
	public readonly imageUrl: string;

	public constructor(data: GenreConstructorData) {
		super();
		this.id = data.id;
		this.name = data.name;
		this.imageUrl = data.imageUrl;
	}
}

type GenreConstructorData = OmitImmerable<AnimeStudio>;
