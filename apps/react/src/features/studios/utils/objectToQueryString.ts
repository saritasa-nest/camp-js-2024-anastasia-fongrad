import { StudioQueryParameters } from '@js-camp/core/models/studio-query-parameters.model';

/**
 * Transforms object to query string.
 * @param options Url params in object format.
 */
export function objectToQueryString(options: StudioQueryParameters): string {
	return new URLSearchParams(JSON.parse(JSON.stringify(options))).toString();
}
