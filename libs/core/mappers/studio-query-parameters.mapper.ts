import { StudioQueryParametersDto } from '../dtos/studio-query-parameters.dto';
import { StudioQueryParameters } from '../models/studio-query-parameters.model';

export namespace StudioQueryParametersMapper {

	/**
	 * Maps DTO to model.
	 * @param dto Studio query params DTO.
	 */
	export function fromDto(dto: StudioQueryParametersDto): StudioQueryParameters {
		return {
			pageSize: dto.limit,
			pageNumber: Math.round(dto.offset / dto.limit),
			search: dto.search,
			ordering: dto.ordering,
		};
	}

	/**
	 * Maps model to DTO.
	 * @param model Studio query params model.
	 */
	export function toDto(model: StudioQueryParameters): StudioQueryParametersDto {
		return {
			limit: model.pageSize,
			offset: model.pageNumber * model.pageSize,
			search: model.search,
			ordering: model.ordering,
		};
	}
}
