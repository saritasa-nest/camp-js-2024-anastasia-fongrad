/**
 * Transforms object to query string.
 * @param options Url params in object format.
 */
export function objectToQueryString(options: Readonly<Record<string, string>>): string {
	return new URLSearchParams(options).toString();
}
