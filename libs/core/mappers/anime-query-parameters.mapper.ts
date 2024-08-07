import { AnimeQueryParametersDto } from '../dtos/anime-query-parameters.dto';
import { AnimeQueryParameters } from '../models/anime-query-parameters.model';
import { AnimeTypeDto } from '../dtos/enums/anime-type-dto.enum';
import { AnimeType } from '../models/enums/anime-type.enum';
import { EnumUtils } from '../utils/enum-utils';
import { START_PAGE_INDEX, DEFAULT_PAGE_SIZE, PARAMETER_SEPARATOR, DEFAULT_SEARCH_QUERY, DEFAULT_SORT_PARAM, DEFAULT_TYPE } from '../utils/anime-constants';

import { AnimeTypeMapper } from './anime-type.mapper';
import { AnimeSortParameterMapper } from './anime-sort-parameter.mapper';

export namespace AnimeQueryParametersMapper {

	/**
	 * Converts query parameters from a model to a dto object.
	 * @param model Anime query parameters.
	 */
	export function toDto(model: Partial<AnimeQueryParameters>): Partial<AnimeQueryParametersDto> {
		const ordering = model.animeSort ? AnimeSortParameterMapper.toDto(model.animeSort) : undefined;
		const types = model.animeTypes ? model.animeTypes.map(type => AnimeTypeMapper.toDto(type)).join(PARAMETER_SEPARATOR) : undefined;
		const offset = model.pageIndex && model.limitPerPage ? model.pageIndex * model.limitPerPage : START_PAGE_INDEX;
		const limit = model.limitPerPage ?? DEFAULT_PAGE_SIZE;
		return {
			limit,
			offset,

			// Disable eslint for a name of a dto parameter
			// eslint-disable-next-line @typescript-eslint/naming-convention
			type__in: types,
			search: model.searchQuery,
			ordering,
		};
	}

	/**
	 * Converts query parameters from a dto object to a model.
	 * @param dto Anime query parameters dto.
	 */
	export function fromDto(dto: Partial<AnimeQueryParametersDto>): AnimeQueryParameters {
		const animeSort = dto.ordering ? AnimeSortParameterMapper.fromDto(dto.ordering) : DEFAULT_SORT_PARAM;
		const animeTypes = dto.type__in ? dto.type__in.split(PARAMETER_SEPARATOR).map(type => {
			const typeName = EnumUtils.fromString(type, AnimeTypeDto);
			return typeName ? AnimeTypeMapper.fromDto(typeName) : undefined;
		})
			.filter((type): type is AnimeType => type !== undefined) : DEFAULT_TYPE;
		const pageIndex = dto.limit && dto.offset ? dto.offset / dto.limit : START_PAGE_INDEX;
		const limitPerPage = dto.limit ?? DEFAULT_PAGE_SIZE;
		const searchQuery = dto.search ?? DEFAULT_SEARCH_QUERY;
		return {
			pageIndex,
			limitPerPage,
			animeTypes,
			searchQuery,
			animeSort,
		};
	}
}
