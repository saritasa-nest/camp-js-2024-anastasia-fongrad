import { useLocation, useNavigate } from 'react-router-dom';
import { AnimeListCursorQueryParameters } from '@js-camp/core/models/anime-list-cursor-query-parameters.model';
import { AnimeListCursorQueryParametersDto } from '@js-camp/core/dtos/anime-list-cursor-query-parameters.dto';
import { AnimeListCursorQueryParametersMapper } from '@js-camp/core/mappers/anime-list-cursor-query-parameters.mapper';
import { ObjectUtils } from '@js-camp/core/utils/object-utils';
import queryString from 'query-string';

/** 1. */
export const useQueryParameters = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const getQueryParameters = (): Partial<AnimeListCursorQueryParameters> => {
		const params = queryString.parse(location.search);
		return AnimeListCursorQueryParametersMapper.fromDto(params as Partial<AnimeListCursorQueryParametersDto>);
	};

	const setQueryParameters = (animeQueryParameters: Partial<AnimeListCursorQueryParameters>) => {
		const currentParams = queryString.parse(location.search);
		const mappedQueryParams = ObjectUtils.removeEmptyFields(
			AnimeListCursorQueryParametersMapper.toDto(animeQueryParameters),
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
