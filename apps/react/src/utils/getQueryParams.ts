/**
 * Get query params.
 * @param searchParams URL search params.
 */
export const getQueryParams = (searchParams: URLSearchParams) => {
	const search = searchParams.get('search');
	// const sort = searchParams.get('sort');
	// const filter = searchParams.get('filter');
	return { search };
};
