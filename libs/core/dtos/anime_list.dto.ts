import { AnimeDto } from './anime.dto';

/** Genre DTO. */
export type AnimeListDto = {

	/** Genre DTO. */
	readonly count: number;

	/** Genre DTO. */
	readonly next: string;

	/** Genre DTO. */
	readonly previous: string;

	/** Genre DTO. */
	readonly results: readonly AnimeDto[];
};
