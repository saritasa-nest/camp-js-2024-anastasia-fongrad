/**
 * Transforms query string to object.
 * @param queryString Url params in string format.
 * @param additionalOptions Additional search options.
 */
export function queryStringToObject(
	queryString: string,
): URLSearchParams {
	return new URLSearchParams(queryString);
}
