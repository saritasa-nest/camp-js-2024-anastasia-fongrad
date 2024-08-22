import { StudioDto } from '../dtos/studio.dto';
import { AnimeStudio } from '../models/studio.model';

export namespace StudioMapper {

	/**
	 * Maps studio dto to model.
	 * @param dto Studio dto.
	 */
	export function fromDto(dto: StudioDto): AnimeStudio {
		return new AnimeStudio({
			id: dto.id,
			name: dto.name,
			imageUrl: dto.image,
		});
	}
}
