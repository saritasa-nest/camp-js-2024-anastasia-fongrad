/**
 * Asserts that a given value is a member of the specified enum.
 * This function checks if the provided `value` exists within the `enumObject`.
 * If the `value` is not a valid enum member, an error is thrown. Otherwise, TypeScript
 * will narrow the type of `value` to be one of the enum's values.
 * @param value - The value to check if it's part of the enum.
 * @param enumObject - The enum object that the value should belong to.
 * */
export function assertValueInEnum<T extends Record<string, unknown>>(
	value: unknown,
	enumObject: T,
): asserts value is T[keyof T] {
	if (!Object.values(enumObject).includes(value)) {
		throw new Error(`Invalid value: ${value} is not a valid enum value.`);
	}
}
