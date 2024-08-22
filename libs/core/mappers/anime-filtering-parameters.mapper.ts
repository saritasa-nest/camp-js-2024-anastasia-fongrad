import { AnimeFilteringParametersDto } from '../dtos/anime-filtering-parameters.dto';
import { AnimeFilteringParameters } from '../models/anime-filtering-parameters.model';
import { AnimeTypeDto } from '../dtos/enums/anime-type-dto.enum';
import { AnimeType } from '../models/enums/anime-type.enum';
import { EnumUtils } from '../utils/enum-utils';
import { PARAMETER_SEPARATOR, DEFAULT_SEARCH_QUERY, DEFAULT_MULTI_SORT_PARAM, DEFAULT_TYPE } from '../utils/anime-constants';

import { AnimeTypeMapper } from './anime-type.mapper';
import { AnimeMultiSortParameterMapper } from './anime-multi-sort-parameter.mapper';

export namespace AnimeFilteringParametersMapper {

	/**
	 * Converts query parameters from a model to a dto object.
	 * @param model Anime query parameters.
	 */
	export function toDto(model: Partial<AnimeFilteringParameters>): Partial<AnimeFilteringParametersDto> {
		const ordering = model.animeMultiSort ? AnimeMultiSortParameterMapper.toDto(model.animeMultiSort) : undefined;
		const types = model.animeTypes ? model.animeTypes.map(type => AnimeTypeMapper.toDto(type)).join(PARAMETER_SEPARATOR) : undefined;
		return {

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
	export function fromDto(dto: Partial<AnimeFilteringParametersDto>): AnimeFilteringParameters {
		const animeTypes = dto.type__in ? dto.type__in.split(PARAMETER_SEPARATOR).map(type => {
			const typeName = EnumUtils.fromString(type, AnimeTypeDto);
			return typeName ? AnimeTypeMapper.fromDto(typeName) : undefined;
		})
			.filter((type): type is AnimeType => type !== undefined) : DEFAULT_TYPE;
		const searchQuery = dto.search ?? DEFAULT_SEARCH_QUERY;
		const animeMultiSort = dto.ordering ? AnimeMultiSortParameterMapper.fromDto(dto.ordering) : DEFAULT_MULTI_SORT_PARAM;
		return {
			animeTypes,
			searchQuery,
			animeMultiSort,
		};
	}
}
