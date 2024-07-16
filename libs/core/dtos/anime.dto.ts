import { AiredDto } from './aired.dto';

/** Genre DTO. */
export type AnimeDto = {

	/** Genre DTO. */
	readonly id: number;

	/** Genre DTO. */
	readonly created: string;

	/** Genre DTO. */
	readonly modified: string;

	/** Genre DTO. */
	readonly title_eng: string;

	/** Genre DTO. */
	readonly title_jpn: string;

	/** Genre DTO. */
	readonly image: string;

	/** Genre DTO. */
	readonly aired: AiredDto;

	/** Genre DTO. */
	readonly type: string;

	/** Genre DTO. */
	readonly status: string;

	/** Genre DTO. */
	readonly score: number;

	/** Genre DTO. */
	readonly user_score: number;

	/** Genre DTO. */
	readonly studios: readonly number[];

	/** Genre DTO. */
	readonly genres: readonly number[];
};
