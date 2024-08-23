import { AnimeGenreDto } from '../dtos/anime-genre.dto';
import { AnimeGenre } from '../models/anime-genre.model';

export namespace AnimeGenreMapper {

	/**
	 * Maps genre dto to model.
	 * @param dto Genre dto.
	 */
	export function fromDto(dto: AnimeGenreDto): AnimeGenre {
		return new AnimeGenre({
			id: dto.id,
			name: dto.name,
		});
	}
}
