export namespace DateTimeMapper {

	/**
	 * Maps a string to the date-time interval.
	 * @param dto Date string from the dto.
	 */
	export function fromDto(dto: string): Date | null {
		const timestamp = Date.parse(dto);
		if (!isNaN(timestamp)) {
			return new Date(timestamp);
		}
		return null;
	}
}
