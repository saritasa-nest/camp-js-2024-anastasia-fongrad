/** Date-time interval DTO. */
export type DateTimeIntervalDto = {

	/**
	 * Start of date-time interval.
	 * @example '2024-07-22T02:40:54.873Z'.
	 */
	readonly start: string | null;

	/**
	 * End of date-time interval.
	 * @example '2024-07-22T02:40:54.873Z'.
	 */
	readonly end: string | null;
};
