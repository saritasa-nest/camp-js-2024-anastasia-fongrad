import { AnimeStudioDto } from '../dtos/anime-studio.dto';
import { AnimeStudio } from '../models/anime-studio.model';

export namespace AnimeStudioMapper {

	/**
	 * Maps genre dto to model.
	 * @param dto Genre dto.
	 */
	export function fromDto(dto: AnimeStudioDto): AnimeStudio {
		return new AnimeStudio({
			id: dto.id,
			name: dto.name,
			imageUrl: dto.image,
		});
	}
}
