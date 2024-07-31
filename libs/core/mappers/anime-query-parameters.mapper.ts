import { AnimeQueryParametersDto } from '../dtos/anime-query-parameters.dto';
import { AnimeQueryParameters } from '../models/anime-query-parameters.model';
import { AnimeTypeDto } from '../dtos/enums/dto-type.enum';

import { AnimeTypeMapper } from './anime-type.mapper';
import { AnimeSortParameterMapper } from './anime-sort-parameter.mapper';

export namespace AnimeQueryParametersMapper {

	/**
	 * Converts query parameters from a model to a dto object.
	 * @param model Anime query parameters.
	 */
	export function toDto(model: Partial<AnimeQueryParameters>): Partial<AnimeQueryParametersDto> {
		const ordering = model.animeSort ? AnimeSortParameterMapper.toDto(model.animeSort) : undefined;
		const types = model.animeTypes ? model.animeTypes.map(type => AnimeTypeMapper.toDto(type)).join(',') : undefined;
		let offset = undefined;
		if (model.pageNumber !== 0 && model.pageNumber && model.limitPerPage) {
			offset = model.pageNumber * model.limitPerPage
		}
		else if (model.pageNumber === 0) {
			offset = 0;
		}
		const limit = model.limitPerPage ? model.limitPerPage : undefined;
		const search = model.searchQuery ? model.searchQuery : undefined;
		return {
			limit,
			offset,

			// Disable eslint for a name of a dto parameter
			// eslint-disable-next-line @typescript-eslint/naming-convention
			type__in: types,
			search,
			ordering,
		};
	}

	/**
	 * Converts query parameters from a dto object to a model.
	 * @param dto Anime query parameters dto.
	 */
	export function fromDto(dto: Partial<AnimeQueryParametersDto>): Partial<AnimeQueryParameters> {
		const animeSort = dto.ordering ? AnimeSortParameterMapper.fromDto(dto.ordering) : undefined;
		const animeTypes = dto.type__in ? dto.type__in.split(',').map(type => AnimeTypeMapper.fromDto(type as AnimeTypeDto)) : undefined;
		let pageNumber;
		if (dto.limit && dto.offset) {
			pageNumber = dto.offset / dto.limit;
		}
		else if (dto.offset == 0) {
			pageNumber = 0;
		}
		return {
			pageNumber,
			limitPerPage: dto.limit ?? undefined,
			animeTypes,
			searchQuery: dto.search ?? undefined,
			animeSort: animeSort ?? undefined,
		};
	}
}
