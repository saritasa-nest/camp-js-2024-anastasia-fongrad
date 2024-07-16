import { ErrorDto } from './error.dto';

/** Genre DTO. */
export type ErrorResponseDto = {

	/** Genre DTO. */
	readonly type?: string;

	/** Genre DTO. */
	readonly errors: readonly ErrorDto[];
};
