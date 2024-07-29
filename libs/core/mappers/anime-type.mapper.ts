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

	/**
	 * 1.
	 * @param model 1.
	 * @returns 1.
	 */
	export function toDto(model: ModelType): DtoType {
		const typeMap: Record<ModelType, DtoType> = {
			[ModelType.TV]: DtoType.TV,
			[ModelType.OVA]: DtoType.OVA,
			[ModelType.Movie]: DtoType.Movie,
			[ModelType.Special]: DtoType.Special,
			[ModelType.ONA]: DtoType.ONA,
			[ModelType.Music]: DtoType.Music,
			[ModelType.PromotionalVideos]: DtoType.PromotionalVideos,
			[ModelType.Unknown]: DtoType.Unknown,
		};
		return typeMap[model];
	}
}
