import { useLocation, useNavigate } from 'react-router-dom';
import { AnimeFilteringParameters } from '@js-camp/core/models/anime-filtering-parameters.model';
import { AnimeFilteringParametersDto } from '@js-camp/core/dtos/anime-filtering-parameters.dto';
import { AnimeFilteringParametersMapper } from '@js-camp/core/mappers/anime-filtering-parameters.mapper';
import { ObjectUtils } from '@js-camp/core/utils/object-utils';
import queryString from 'query-string';

/** Custom useQueryParameters hook. */
export const useQueryParameters = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const getQueryParameters = (): Partial<AnimeFilteringParameters> => {
		const params = queryString.parse(location.search);
		return AnimeFilteringParametersMapper.fromDto(params as Partial<AnimeFilteringParametersDto>);
	};

	const setQueryParameters = (animeQueryParameters: Partial<AnimeFilteringParameters>) => {
		const currentParams = queryString.parse(location.search);
		const mappedQueryParams = ObjectUtils.removeEmptyFields(
			AnimeFilteringParametersMapper.toDto(animeQueryParameters),
		);
		const newParams = {
			...currentParams,
			...mappedQueryParams,
		};
		navigate({ search: queryString.stringify(newParams) });
	};

	return {
		getQueryParameters,
		setQueryParameters,
	};
};
