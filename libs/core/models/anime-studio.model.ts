import { Immerable, OmitImmerable } from './immerable.model';

/** Anime studio. */
export class AnimeStudio extends Immerable {

	/** Studio id. */
	public readonly id: number;

	/** Studio name. */
	public readonly name: string;

	/** Studio logo url. */
	public readonly imageUrl: string;

	public constructor(data: AnimeStudioConstructorData) {
		super();
		this.id = data.id;
		this.name = data.name;
		this.imageUrl = data.imageUrl;
	}
}

type AnimeStudioConstructorData = OmitImmerable<AnimeStudio>;
