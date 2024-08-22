export namespace EnumUtils {

	/**
	 * Convert enum to string array.
	 * @param enumValueAsString Enum value as string.
	 * @param enumeration Enumeration.
	 */
	export function fromString<TKey extends string, TValue extends string>(
		enumValueAsString: string,
		enumeration: { [key in TKey]: TValue },
	): TValue | null {
		if (enumValueAsString === '') {
			return null;
		}
		const enumValue = Object.values(enumeration).find((value): value is TValue => value === enumValueAsString);
		if (enumValue === undefined) {
			return null;
		}
		return enumValue;
	}

	/**
	 * Creates a map based on to records.
	 * @param sourceEnum Source enum record.
	 * @param targetEnum Target enum record.
	 */
	export function createEnumMap<T extends string | number, U extends string | number>(
		sourceEnum: Record<string, T>,
		targetEnum: Record<string, U>,
	): Record<T, U> {
		const map: Partial<Record<T, U>> = {};
		for (const key in sourceEnum) {
			if (Object.prototype.hasOwnProperty.call(sourceEnum, key) && Object.prototype.hasOwnProperty.call(targetEnum, key)) {
				map[sourceEnum[key]] = targetEnum[key];
			}
		}
		return map as Record<T, U>;
	}
}
