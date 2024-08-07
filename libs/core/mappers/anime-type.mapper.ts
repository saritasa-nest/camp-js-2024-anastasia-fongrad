import { AnimeTypeDto } from '../dtos/enums/anime-type-dto.enum';
import { AnimeType } from '../models/enums/anime-type.enum';

export namespace AnimeTypeMapper {

	/**
	 * Maps anime-type dto to model.
	 * @param dto Anime-type enum.
	 */
	export function fromDto(dto: AnimeTypeDto): AnimeType {
		const typeMap: Record<AnimeTypeDto, AnimeType> = {
			[AnimeTypeDto.TV]: AnimeType.TV,
			[AnimeTypeDto.OVA]: AnimeType.OVA,
			[AnimeTypeDto.Movie]: AnimeType.Movie,
			[AnimeTypeDto.Special]: AnimeType.Special,
			[AnimeTypeDto.ONA]: AnimeType.ONA,
			[AnimeTypeDto.Music]: AnimeType.Music,
			[AnimeTypeDto.PromotionalVideos]: AnimeType.PromotionalVideos,
			[AnimeTypeDto.Unknown]: AnimeType.Unknown,
		};
		return typeMap[dto];
	}

	/**
	 * Maps anime-type model to a dto object.
	 * @param model Anime-type object.
	 */
	export function toDto(model: AnimeType): AnimeTypeDto {
		const typeMap: Record<AnimeType, AnimeTypeDto> = {
			[AnimeType.TV]: AnimeTypeDto.TV,
			[AnimeType.OVA]: AnimeTypeDto.OVA,
			[AnimeType.Movie]: AnimeTypeDto.Movie,
			[AnimeType.Special]: AnimeTypeDto.Special,
			[AnimeType.ONA]: AnimeTypeDto.ONA,
			[AnimeType.Music]: AnimeTypeDto.Music,
			[AnimeType.PromotionalVideos]: AnimeTypeDto.PromotionalVideos,
			[AnimeType.Unknown]: AnimeTypeDto.Unknown,
		};
		return typeMap[model];
	}
}
