import { AnimeQueryParametersDto } from '../dtos/anime-parameters.dto';
import { AnimeQueryParameters } from '../models/anime-parameters.model';
import { OrderingParameter } from '../models/ordering.model';

export namespace AnimeQueryParametersMapper {

	/**
	 * Maps anime dto to model.
	 * @param dto Anime dto.
	 */
	export function fromDto(dto: AnimeQueryParametersDto): AnimeQueryParameters {
		return new AnimeQueryParameters({
			offset: dto.offset,
			limitPerPage: dto.limit,
			animeType: dto.type,
			searchQuery: dto.search,
			animeOrdering: [],
		});
	}
}

/**
 * 1.
 * @param ordering 1.
 */
function orderingToDto(ordering: OrderingParameter[]) :string {
	return "";
}
