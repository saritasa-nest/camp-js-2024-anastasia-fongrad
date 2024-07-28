import { DtoSortParameter } from '../utils/enums/dto-sort-parameter.enum';
import { ModelSortParameter } from '../utils/enums/model-sort-parameter.enum';

export namespace SortParameterMapper {

	/**
	 * Maps anime-status dto to model.
	 * @param model Anime-status enum.
	 */
	export function toDto(model: ModelSortParameter): DtoSortParameter {
		const statusMap: Record<ModelSortParameter, DtoSortParameter> = {
			[ModelSortParameter.EnglishTitle]: DtoSortParameter.EnglishTitle,
			[ModelSortParameter.StartDate]: DtoSortParameter.StartDate,
			[ModelSortParameter.Status]: DtoSortParameter.Status,
		};
		return statusMap[model];
	}
}
