import { GenreDto } from '../dtos/genre.dto';
import { AnimeGenre } from '../models/genre.model';

export namespace GenreMapper {

	/**
	 * Maps genre dto to model.
	 * @param dto Genre dto.
	 */
	export function fromDto(dto: GenreDto): AnimeGenre {
		return new AnimeGenre({
			id: dto.id,
			name: dto.name,
		});
	}
}
