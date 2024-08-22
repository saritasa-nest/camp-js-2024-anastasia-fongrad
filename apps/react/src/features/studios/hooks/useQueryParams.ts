import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StudioQueryParameters } from '@js-camp/core/models/studio-query-parameters.model';

import { queryStringToObject } from '../utils/queryStringToObject';
import { objectToQueryString } from '../utils/objectToQueryString';

/**
 * Sets new state to query params.
 */
export function useQueryParams() {
	const navigate = useNavigate();
	const location = useLocation();
	const { search } = location;

	const queryParams = useMemo(() => queryStringToObject(search), [search]);

	const setQueryParams = (params: StudioQueryParameters) => {
		navigate({ pathname: location.pathname, search: objectToQueryString(params) });
	};

	return { queryParams, setQueryParams };
}
