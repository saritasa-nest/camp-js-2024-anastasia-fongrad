import { GenresType } from './enums/anime-genres-type.enum';
import { Immerable, OmitImmerable } from './immerable.model';

/** Genre. */
export class AnimeGenre extends Immerable {
	/** Id. */
	public readonly id: number;

	/** Name. */
	public readonly name: string;

	/** Type. */
	public readonly type: GenresType;

	public constructor(data: GenreConstructorData) {
		super();
		this.id = data.id;
		this.name = data.name;
		this.type = data.type;
	}
}

type GenreConstructorData = OmitImmerable<AnimeGenre>;
