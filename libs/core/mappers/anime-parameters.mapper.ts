import { AnimeQueryParametersDto } from '../dtos/anime-parameters.dto';
import { AnimeQueryParameters } from '../models/anime-parameters.model';
import { OrderingMapper } from './ordering.mapper';

export namespace AnimeQueryParametersMapper {

	export function toDto(model: AnimeQueryParameters): AnimeQueryParametersDto {
		return {
			offset: model.offset,
			limit: model.limitPerPage,
			type: model.animeType,
			search: model.searchQuery,
			ordering: OrderingMapper.toDto(model.animeOrdering),
		}
	}
}
