import { AnimeQueryParametersDto } from '../dtos/anime-parameters.dto';
import { AnimeQueryParameters } from '../models/anime-parameters.model';

import { TypeMapper } from './anime-type.mapper';
import { OrderingMapper } from './ordering.mapper';

export namespace AnimeQueryParametersMapper {

	/**
	 * 1.
	 * @param model 1.
	 */
	export function toDto(model: AnimeQueryParameters): Partial<AnimeQueryParametersDto> {
		console.log(model);
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
}
