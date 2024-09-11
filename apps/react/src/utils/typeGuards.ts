import { ServerError } from '@js-camp/core/models/server-error.model';

/**
 * A type guard for a ServerError array.
 * @param payload An object to determine a type.
 */
export function isServerErrorArray(payload: unknown): payload is ServerError[] {
	return Array.isArray(payload) && payload.every(
		item => typeof item.controlName === 'string' &&
			Array.isArray(item.controlErrors) &&
			item.controlErrors.every((error: unknown) => typeof error === 'string'),
	);
}
