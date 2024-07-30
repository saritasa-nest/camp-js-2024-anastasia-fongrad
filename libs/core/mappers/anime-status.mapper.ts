import { AnimeStatusDto } from '../dtos/enums/dto-status.enum';
import { AnimeStatus } from '../models/enums/model-status.enum';

export namespace StatusMapper {

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
