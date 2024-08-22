import { useLocation, useNavigate } from 'react-router-dom';

/** Custom hook for handling manipulating query params. */
export default function useQueryParams<T>() {
	const { pathname, search } = useLocation();
	const navigate = useNavigate();
	const urlSearchParams = new URLSearchParams(search);

	// Convert URLSearchParams to a type-safe object of type T
	const urlQueryObject = Object.fromEntries(urlSearchParams.entries()) as T;

	const getQueryParamByKey = (key: string) => {
		const params = new URLSearchParams(search);
		return params.get(key) ?? null;
	};

	const getQueryParamsByKeys = (keys: string[]) => {
		const params: { [key: string]: string | null; } = {};
		keys.map(key => {
			const param = getQueryParamByKey(key);
			params[key] = param;
		});
		return params;
	};

	/**
	 * Update search params with the given T.
	 * @param params Params to pass to the url.
	 * @param targetPath Targeted path to direct.
	 * @param replace Replace the current path or not.
	 */
	function updateSearchParams(params: Partial<T>, targetPath: string = pathname, replace?: boolean): void {
		const newSearchParams = new URLSearchParams(search);

		Object.entries(params).forEach(([key, value]) => {
			if (value == null) {
				// Handles both undefined and null
				newSearchParams.delete(key);
			} else {
				newSearchParams.set(key, String(value));
			}
		});

		const query = newSearchParams.toString();
		const newUrl = `${targetPath}${query ? `?${query}` : ''}`;
		navigate(newUrl, { replace });
	}

	return {
		queryParams: urlQueryObject,
		getQueryParamByKey,
		getQueryParamsByKeys,
		setQueryParams: (params: Partial<T>): void => updateSearchParams(params),
		directToPathWithQueryParams: (params: Partial<T>, pathName: string): void =>
			updateSearchParams(params, pathName, false),
	};
}
