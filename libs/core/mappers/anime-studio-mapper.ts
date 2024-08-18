import { AnimeStudioDto } from '../dtos/anime-studio.dto';
import { AnimeStudio } from '../models/anime-studio.model';

export namespace AnimeStudioMapper {

	/**
	 * Maps anime studios from a dto model to a model.
	 * @param dto Genre dto.
	 */
	export function fromDto(dto: AnimeStudioDto): AnimeStudio {
		return new AnimeStudio({
			id: dto.id,
			name: dto.name,
			imageUrl: dto.image,
		});
	}

	/**
	 * 1.
	 * @param model 1.
	 */
	export function toDto(model: Partial<AnimeStudio>): Partial<AnimeStudioDto> {
		return {
			id: model.id,
			name: model.name,
			image: model.imageUrl,
		};
	}
}
