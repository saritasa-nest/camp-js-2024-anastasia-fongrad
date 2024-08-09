import { Immerable, OmitImmerable } from './immerable.model';

/** Genre. */
export class AnimeStudio extends Immerable {

	/** Id. */
	public readonly id: number;

	/** Name. */
	public readonly name: string;

	/** DTO type. */
	public readonly imageUrl: string;

	public constructor(data: AnimeStudioConstructorData) {
		super();
		this.id = data.id;
		this.name = data.name;
		this.imageUrl = data.imageUrl;
	}
}

type AnimeStudioConstructorData = OmitImmerable<AnimeStudio>;
