/** Studio query parameters model. */
export type StudioQueryParameters = {

	/** Pagination cursor value. */
	readonly cursor?: string;

	/** A query to search studio by name. */
	readonly search?: string;

	/** Field to order by. */
	readonly ordering?: string;
};
