import { DtoType, ModelType } from '../utils/enums/typeEnums';

export namespace TypeMapper {

	/**
	 * Maps anime-type dto to model.
	 * @param dto Anime-type enum.
	 */
	export function fromDto(dto: DtoType): ModelType {
		const typeMap: { [key in DtoType]: ModelType } = {
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
