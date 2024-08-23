import { GenresType } from '../models/enums/anime-genres-type.enum';
import { GenresTypeDto } from '../dtos/enums/anime-genres-type.dto.enum';

export namespace AnimeGenresTypeMapper {
	const MAP_ANIME_GENRES_TYPE_FROM_DTO: Record<GenresTypeDto, GenresType> = {
		[GenresTypeDto.Genres]: GenresType.Genres,
		[GenresTypeDto.ExplicitGenres]: GenresType.ExplicitGenres,
		[GenresTypeDto.Themes]: GenresType.Themes,
		[GenresTypeDto.Demographics]: GenresType.Demographics,
	};

	/**
	 * Map anime genres type from dto.
	 * @param dto Anime genres type dto.
	 */
	export function fromDto(dto: GenresTypeDto): GenresType {
		return MAP_ANIME_GENRES_TYPE_FROM_DTO[dto];
	}
}
