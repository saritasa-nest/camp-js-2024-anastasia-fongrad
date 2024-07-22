import { AnimeDto } from './anime.dto';

/** Anime list DTO. */
export type AnimeListDto = {

	/** Total number of anime. */
	readonly count: number;

	/** Address of the next anime page. */
	readonly next: string;

	/** Address of the previous anime page. */
	readonly previous: string;

	/** List of anime object for the current page. */
	readonly results: readonly AnimeDto[];
};
