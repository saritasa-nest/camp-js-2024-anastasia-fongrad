import { AnimeQueryParametersDto } from '../dtos/anime-query-parameters.dto';
import { AnimeQueryParameters } from '../models/anime-query-parameters.model';
import { AnimeTypeDto } from '../dtos/enums/anime-type-dto.enum';
import { AnimeType } from '../models/enums/anime-type.enum';
import { EnumUtils } from '../utils/enum-utils';
import { START_PAGE_INDEX, PARAMETER_SEPARATOR, DEFAULT_SEARCH_QUERY } from '../utils/anime-constants';

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
		let offset;
		if (model.pageNumber && model.limitPerPage) {
			offset = model.pageNumber * model.limitPerPage;
		} else if (model.pageNumber === START_PAGE_INDEX) {
			offset = START_PAGE_INDEX;
		}
		return {
			limit: model.limitPerPage,
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
	export function fromDto(dto: Partial<AnimeQueryParametersDto>): Partial<AnimeQueryParameters> {
		const animeSort = dto.ordering ? AnimeSortParameterMapper.fromDto(dto.ordering) : undefined;
		const animeTypes = dto.type__in ? dto.type__in.split(PARAMETER_SEPARATOR).map(type => {
			const typeName = EnumUtils.fromString(type, AnimeTypeDto);
			return typeName ? AnimeTypeMapper.fromDto(typeName) : undefined;
		}).filter((type): type is AnimeType => type !== undefined) : undefined;
		let pageNumber;
		if (dto.limit && dto.offset) {
			pageNumber = dto.offset / dto.limit;
		} else if (dto.offset === START_PAGE_INDEX) {
			pageNumber = START_PAGE_INDEX;
		}
		return {
			pageNumber,
			limitPerPage: dto.limit,
			animeTypes,
			searchQuery: dto.search,
			animeSort: animeSort,
		};
	}
}
