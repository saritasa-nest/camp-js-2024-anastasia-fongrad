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
	export function fromQueryParams(queryParams: GenresQueryParams.Combined): GenresFilterParamsDto.Combined {
		const { nextCursor, search, sort, filter } = queryParams;
		let ordering: string | null = null;
		let type: string | null = null;

		if (sort) {
			const [field, direction] = sort.split('-');
			ordering = `${direction === 'ascending' ? '' : '-'}${field}`;
		}

		if (filter) {
			type = FILTER_MAPPING_FROM_QUERY_PARAMS[filter as GenresQueryParams.FilterType];
		}

		return { ...BaseFilterParamsMapper.fromQueryParams({ search, nextCursor }), ordering, type };
	}
}
