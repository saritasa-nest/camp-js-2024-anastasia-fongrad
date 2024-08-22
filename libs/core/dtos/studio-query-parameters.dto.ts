/** Studio query parameters DTO. */
export type StudioQueryParametersDto = {

	/** Offset of the first studio. */
	readonly offset: number;

	/** Max number of items per page. */
	readonly limit: number;

	/** A query to search studio by name. */
	readonly search?: string;

	/** Field to order by. */
	readonly ordering?: string;
};
