import { AnimeQueryParametersDto } from '../dtos/anime-parameters.dto';
import { AnimeQueryParameters } from '../models/anime-parameters.model';
import { AnimeTypeDto } from '../dtos/enums/dto-type.enum';

import { TypeMapper } from './anime-type.mapper';
import { SortMapper } from './sort.mapper';

export namespace AnimeQueryParametersMapper {

	/**
	 * Converts query parameters from a model to a dto object.
	 * @param model Anime query parameters.
	 */
	export function toDto(model: AnimeQueryParameters): Partial<AnimeQueryParametersDto> {
		const ordering = SortMapper.toDto(model.animeOrdering);
		const types = model.animeType.map(type => TypeMapper.toDto(type)).join(',');
		const dto: Partial<AnimeQueryParametersDto> = {
			offset: model.offset,
			limit: model.limitPerPage,
		};
		if (ordering) {
			dto.ordering = ordering;
		}
		if (types) {
			dto.type__in = types;
		}
		if (model.searchQuery) {
			dto.search = model.searchQuery;
		}
		return dto;
	}

	/**
	 * Converts query parameters from a dto object to a model.
	 * @param dto Anime query parameters dto.
	 */
	export function fromDto(dto: Partial<AnimeQueryParametersDto>): AnimeQueryParameters {
		const animeOrdering = dto.ordering ? SortMapper.fromDto(dto.ordering) : null;
		const animeType = dto.type__in ? dto.type__in.split(',').map(type => TypeMapper.fromDto(type as AnimeTypeDto)) : [];
		return {
			offset: dto.offset ?? 0,
			limitPerPage: dto.limit ?? 5,
			animeType,
			searchQuery: dto.search ?? '',
			animeOrdering: animeOrdering ?? [],
		};
	}
}
