import { AnimeQueryParametersDto } from '../dtos/anime-parameters.dto';
import { AnimeQueryParameters } from '../models/anime-parameters.model';

import { OrderingMapper } from './ordering.mapper';

export namespace AnimeQueryParametersMapper {

	/**
	 * 1.
	 * @param model 1.
	 */
	export function toDto(model: AnimeQueryParameters): AnimeQueryParametersDto {
		const ordering = OrderingMapper.toDto(model.animeOrdering);
		return {
			offset: model.offset,
			limit: model.limitPerPage,
			type: model.animeType ? model.animeType : undefined,
			search: model.searchQuery ? model.searchQuery : undefined,
			ordering: ordering ? ordering : undefined,
		};
	}
}
