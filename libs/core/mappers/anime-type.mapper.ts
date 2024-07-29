import { DtoType } from '../utils/enums/dto-type.enum';
import { ModelType } from '../utils/enums/model-type.enum';

export namespace TypeMapper {

	/**
	 * Maps anime-type dto to model.
	 * @param dto Anime-type enum.
	 */
	export function fromDto(dto: DtoType): ModelType {
		const typeMap: Record<DtoType, ModelType> = {
			[DtoType.TV]: ModelType.TV,
			[DtoType.OVA]: ModelType.OVA,
			[DtoType.Movie]: ModelType.Movie,
			[DtoType.Special]: ModelType.Special,
			[DtoType.ONA]: ModelType.ONA,
			[DtoType.Music]: ModelType.Music,
			[DtoType.PromotionalVideos]: ModelType.PromotionalVideos,
			[DtoType.Unknown]: ModelType.Unknown,
		};

		return typeMap[dto];
	}
}
