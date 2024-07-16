import { AiredDto } from './aired.dto';
import { StudioDto } from './studio.dto';
import { GenreDto } from './genre.dto';

/** Genre DTO. */
export type AnimeDetailedDto = {

	/** Genre DTO. */
	readonly id: number;

	/** Genre DTO. */
	readonly created: string;

	/** Genre DTO. */
	readonly modified: string;

	/** Genre DTO. */
	readonly image: string;

	/** Genre DTO. */
	readonly trailer_youtube_id: string;

	/** Genre DTO. */
	readonly title_eng: string;

	/** Genre DTO. */
	readonly title_jpn: string;

	/** Genre DTO. */
	readonly score: number;

	/** Genre DTO. */
	readonly user_score: number;

	/** Genre DTO. */
	readonly type: string;

	/** Genre DTO. */
	readonly status: string;

	/** Genre DTO. */
	readonly source: string;

	/** Genre DTO. */
	readonly airing: boolean;

	/** Genre DTO. */
	readonly aired: AiredDto;

	/** Genre DTO. */
	readonly rating: string;

	/** Genre DTO. */
	readonly season: string;

	/** Genre DTO. */
	readonly synopsis: string;

	/** Genre DTO. */
	readonly background: string;

	/** Genre DTO. */
	readonly broadcast_day: number;

	/** Genre DTO. */
	readonly broadcast_time: string;

	/** Genre DTO. */
	readonly broadcast_timezone: string;

	/** Genre DTO. */
	readonly studios: readonly number[];

	/** Genre DTO. */
	readonly studios_data: readonly StudioDto[];

	/** Genre DTO. */
	readonly genres: readonly number[];

	/** Genre DTO. */
	readonly genres_data: readonly GenreDto[];
};
