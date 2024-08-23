import { EnumUtils } from '../utils/enum-utils';
import { AnimeSource } from '../models/enums/anime-source.enum';
import { AnimeSourceDto } from '../dtos/enums/anime-source-dto.enum';

export namespace AnimeSourceMapper {

	/**
	 * Converts anime source from a dto object to a model.
	 * @param dto Anime source dto.
	 */
	export function fromDto(dto: AnimeSourceDto): AnimeSource {
		const statusMap = EnumUtils.createEnumMap(AnimeSourceDto, AnimeSource);
		return statusMap[dto];
	}
}
