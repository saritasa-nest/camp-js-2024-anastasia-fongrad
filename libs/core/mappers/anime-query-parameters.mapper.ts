import { AnimeQueryParametersDto } from '../dtos/anime-parameters.dto';
import { AnimeQueryParameters } from '../models/anime-parameters.model';
import { AnimeTypeDto } from '../dtos/enums/dto-type.enum';

import { AnimeTypeMapper } from './anime-type.mapper';
import { AnimeSortParameterMapper } from './anime-sort-parameter.mapper';


const START_PAGE_INDEX = 0;

const DEFAULT_PAGE_SIZE = 5;

export namespace AnimeQueryParametersMapper {

	/**
	 * Converts query parameters from a model to a dto object.
	 * @param model Anime query parameters.
	 */
	export function toDto(model: AnimeQueryParameters): Partial<AnimeQueryParametersDto> {
		model.animeSort
		const sort = model.animeSort ? AnimeSortParameterMapper.toDto(model.animeSort) : null;
		const types = model.animeTypes.map(type => AnimeTypeMapper.toDto(type)).join(',');
		let dto: Partial<AnimeQueryParametersDto> = {
			offset: model.pageNumber * model.limitPerPage,
			limit: model.limitPerPage,
		};
		if (sort) {
			dto = { ...dto, ordering: sort };
		}
		if (types) {
			// Disable eslint for a name of a dto parameter
			// eslint-disable-next-line @typescript-eslint/naming-convention
			dto = { ...dto, type__in: types };
		}
		if (model.searchQuery) {
			dto = { ...dto, search: model.searchQuery };
		}
		return dto;
	}

	/**
	 * Converts query parameters from a dto object to a model.
	 * @param dto Anime query parameters dto.
	 */
	export function fromDto(dto: Partial<AnimeQueryParametersDto>): AnimeQueryParameters {
		const animeSort = dto.ordering ? AnimeSortParameterMapper.fromDto(dto.ordering) : null;
		const animeTypes = dto.type__in ? dto.type__in.split(',').map(type => AnimeTypeMapper.fromDto(type as AnimeTypeDto)) : [];
		let pageNumber = START_PAGE_INDEX
		if (dto.limit && dto.offset) {
			pageNumber = dto.offset / dto.limit;
		}
		return {
			pageNumber,
			limitPerPage: dto.limit ?? DEFAULT_PAGE_SIZE,
			animeTypes,
			searchQuery: dto.search ?? '',
			animeSort: animeSort ?? null,
		};
	}
}
