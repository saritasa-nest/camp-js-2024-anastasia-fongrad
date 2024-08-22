/** Studio query parameters model. */
export type StudioQueryParameters = {

	/** Page number. */
	readonly pageNumber: number;

	/** Page size. */
	readonly pageSize: number;

	/** A query to search studio by name. */
	readonly search?: string;

	/** Field to order by. */
	readonly ordering?: string;
};
