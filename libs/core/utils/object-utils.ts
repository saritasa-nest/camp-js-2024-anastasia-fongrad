export namespace ObjectUtils {

	/**
	 * Removes empty fields from an object.
	 * @param parameters The object to be cleaned.
	 * @returns A new object without empty fields.
	 */
	export function removeEmptyFields<T extends object>(parameters: T): Partial<T> {
		return Object.fromEntries(
			Object.entries(parameters).filter(([_key, value]) => value !== undefined),
		) as Partial<T>;
	}
}
