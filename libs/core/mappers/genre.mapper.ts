import { AnimeGenreDto } from '../dtos/anime-genre.dto';
import { AnimeGenre } from '../models/anime-genre.model';

import { AnimeGenresTypeMapper } from './anime-genres-type.mapper';
export namespace GenreMapper {

	/**
	 * Maps genre dto to model.
	 * @param dto Genre dto.
	 */
	export function fromDto(dto: AnimeGenreDto): AnimeGenre {
		return new AnimeGenre({
			id: dto.id,
			name: dto.name,
			type: AnimeGenresTypeMapper.fromDto(dto.type),
		});
	}
}
