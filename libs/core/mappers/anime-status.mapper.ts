import { AnimeStatusDto } from '../dtos/enums/anime-status-dto.enum';
import { AnimeStatus } from '../models/enums/anime-status.enum';

export namespace AnimeStatusMapper {

	/**
	 * Maps anime-status dto to model.
	 * @param dto Anime-status enum.
	 */
	export function fromDto(dto: AnimeStatusDto): AnimeStatus {
		const statusMap: Record<AnimeStatusDto, AnimeStatus> = {
			[AnimeStatusDto.Airing]: AnimeStatus.Airing,
			[AnimeStatusDto.Finished]: AnimeStatus.Finished,
			[AnimeStatusDto.NotYetAired]: AnimeStatus.NotYetAired,
		};
		return statusMap[dto];
	}
}
