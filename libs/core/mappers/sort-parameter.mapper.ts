import { DtoSortParameter } from '../utils/enums/dto-sort-parameter.enum';
import { ModelSortParameter } from '../utils/enums/model-sort-parameter.enum';

export namespace SortParameterMapper {

	/**
	 * Converts anime sort parameters from a model to a dto object.
	 * @param model Anime sort parameters model.
	 */
	export function toDto(model: ModelSortParameter): DtoSortParameter {
		const statusMap: Record<ModelSortParameter, DtoSortParameter> = {
			[ModelSortParameter.EnglishTitle]: DtoSortParameter.EnglishTitle,
			[ModelSortParameter.StartDate]: DtoSortParameter.StartDate,
			[ModelSortParameter.Status]: DtoSortParameter.Status,
		};
		return statusMap[model];
	}

	/**
	 * Converts anime sort parameters from a dto object to a model.
	 * @param dto Anime sort parameters dto.
	 */
	export function fromDto(dto: DtoSortParameter): ModelSortParameter {
		const statusMap: Record<DtoSortParameter, ModelSortParameter> = {
			[DtoSortParameter.EnglishTitle]: ModelSortParameter.EnglishTitle,
			[DtoSortParameter.StartDate]: ModelSortParameter.StartDate,
			[DtoSortParameter.Status]: ModelSortParameter.Status,
		};
		return statusMap[dto];
	}
}
