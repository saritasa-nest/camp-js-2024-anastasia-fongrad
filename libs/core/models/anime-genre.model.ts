import { Immerable, OmitImmerable } from './immerable.model';

/** Genre. */
export class AnimeGenre extends Immerable {

	/** Id. */
	public readonly id: number;

	/** Name. */
	public readonly name: string;

	public constructor(data: AnimeGenreConstructorData) {
		super();
		this.id = data.id;
		this.name = data.name;
	}
}

type AnimeGenreConstructorData = OmitImmerable<AnimeGenre>;
