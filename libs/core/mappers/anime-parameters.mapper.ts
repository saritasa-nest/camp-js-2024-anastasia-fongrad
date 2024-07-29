import { AnimeQueryParametersDto } from '../dtos/anime-parameters.dto';
import { AnimeQueryParameters } from '../models/anime-parameters.model';
import { DtoType } from '../utils/enums/dto-type.enum';

import { TypeMapper } from './anime-type.mapper';
import { OrderingMapper } from './ordering.mapper';

export namespace AnimeQueryParametersMapper {

	/**
	 * 1.
	 * @param model 1.
	 */
	export function toDto(model: AnimeQueryParameters): Partial<AnimeQueryParametersDto> {
		const ordering = OrderingMapper.toDto(model.animeOrdering);
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
	 * 1.
	 * @param dto 1.
	 * @returns 1.
	 */
	export function fromDto(dto: Partial<AnimeQueryParametersDto>): AnimeQueryParameters {
		const animeOrdering = dto.ordering ? OrderingMapper.fromDto(dto.ordering) : null;
		const animeType = dto.type__in ? dto.type__in.split(',').map(type => TypeMapper.fromDto(type as DtoType)) : [];
		return new AnimeQueryParameters({
			offset: dto.offset ?? 0,
			limitPerPage: dto.limit ?? 5,
			animeType,
			searchQuery: dto.search ?? '',
			animeOrdering: animeOrdering ?? [],
		});
	}
}
