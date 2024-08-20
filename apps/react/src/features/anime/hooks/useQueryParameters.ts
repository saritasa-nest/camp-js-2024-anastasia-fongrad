import { useLocation, useNavigate } from 'react-router-dom';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-query-parameters.model';
import { AnimeQueryParametersDto } from '@js-camp/core/dtos/anime-query-parameters.dto';
import { AnimeQueryParametersMapper } from '@js-camp/core/mappers/anime-query-parameters.mapper';
import { AnimeType } from '@js-camp/core/models/enums/anime-type.enum';
import { AnimeSortParameter } from '@js-camp/core/models/anime-sort-parameter.model';
import { ObjectUtils } from '@js-camp/core/utils/object-utils';
import queryString from 'query-string';

/** 1. */
export const useQueryParameters = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const getQueryParameters = (): Partial<AnimeQueryParameters> => {
		const params = queryString.parse(location.search);
		return AnimeQueryParametersMapper.fromDto(params as Partial<AnimeQueryParametersDto>);
	};

	const setQueryParameters = (animeQueryParameters: Partial<AnimeQueryParameters>) => {
		const currentParams = queryString.parse(location.search);
		const mappedQueryParams = ObjectUtils.removeEmptyFields(AnimeQueryParametersMapper.toDto(animeQueryParameters));
		const newParams = {
			...currentParams,
			...mappedQueryParams,
		};
		navigate({ search: queryString.stringify(newParams) });
	};

	const changePageIndex = (pageIndex: number) => {
		const params: Partial<AnimeQueryParameters> = {
			limitPerPage: 25,
			pageIndex,
		};
		setQueryParameters(params);
	};

	const changeSearchParameter = (searchQuery: string) => {
		const params: Partial<AnimeQueryParameters> = {
			searchQuery,
			pageIndex: 0,
		};
		setQueryParameters(params);
	};

	const changeFilterParameters = (animeTypes: AnimeType[]) => {
		const params: Partial<AnimeQueryParameters> = {
			animeTypes,
			pageIndex: 0,
		};
		setQueryParameters(params);
	};

	const changeSortParameter = (animeSort: AnimeSortParameter) => {
		const params: Partial<AnimeQueryParameters> = {
			animeSort,
		};
		setQueryParameters(params);
	};

	return {
		getQueryParameters,
		changeFilterParameters,
		changeSortParameter,
		changeSearchParameter,
		changePageIndex,
	};
};
