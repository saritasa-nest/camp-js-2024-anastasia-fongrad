import { GenresFilterParamsDto } from '../dto/genres-filter-params.dto';
import { GenresQueryParams } from '../model/genres-query-params.model';

import { BaseFilterParamsMapper } from './base-filter-params.mapper';

type FilterMappingFromQueryParams = Record<GenresQueryParams.FilterType, GenresFilterParamsDto.FilterTypes>;

const FILTER_MAPPING_FROM_QUERY_PARAMS: Readonly<FilterMappingFromQueryParams> = {
	[GenresQueryParams.FilterType.Genres]: GenresFilterParamsDto.FilterTypes.Genres,
	[GenresQueryParams.FilterType.ExplicitGenres]: GenresFilterParamsDto.FilterTypes.ExplicitGenres,
	[GenresQueryParams.FilterType.Themes]: GenresFilterParamsDto.FilterTypes.Themes,
	[GenresQueryParams.FilterType.Demographics]: GenresFilterParamsDto.FilterTypes.Demographics,
};

/** Genres filter params mappers. */
export namespace GenresFilterParamsMapper {
	/**
	 * Mapping from query params to filter prams.
	 * @param queryParams Query params.
	 */
	export function toDto(queryParams: GenresQueryParams.Combined): GenresFilterParamsDto.Combined {
		const { nextCursor, search, sort, filter } = queryParams;
		console.log('filter: ', filter);
		let ordering: string | null = null;
		let types: string | null = null;

		if (sort) {
			const [field, direction] = sort.split('-');
			ordering = `${direction === 'ascending' ? '' : '-'}${field}`;
		}

		if (filter) {
			types = filter
				.split(',')
				.map((type) => FILTER_MAPPING_FROM_QUERY_PARAMS[type as GenresQueryParams.FilterType])
				.join(',');
		}

		return { ...BaseFilterParamsMapper.toDto({ search, nextCursor }), ordering, type: types };
	}
}
