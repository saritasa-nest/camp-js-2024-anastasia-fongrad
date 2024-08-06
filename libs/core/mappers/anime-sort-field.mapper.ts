import { AnimeSortFieldDto } from '../dtos/enums/anime-sort-field-dto.enum';
import { AnimeSortField } from '../models/enums/anime-sort-field.enum';

export namespace AnimeSortFieldMapper {

	/**
	 * Converts anime sort parameters from a model to a dto object.
	 * @param model Anime sort parameters model.
	 */
	export function toDto(model: AnimeSortField): AnimeSortFieldDto {
		const statusMap: Record<AnimeSortField, AnimeSortFieldDto> = {
			[AnimeSortField.EnglishTitle]: AnimeSortFieldDto.EnglishTitle,
			[AnimeSortField.StartDate]: AnimeSortFieldDto.StartDate,
			[AnimeSortField.Status]: AnimeSortFieldDto.Status,
		};
		return statusMap[model];
	}

	/**
	 * Converts anime sort parameters from a dto object to a model.
	 * @param dto Anime sort parameters dto.
	 */
	export function fromDto(dto: AnimeSortFieldDto): AnimeSortField {
		const statusMap: Record<AnimeSortFieldDto, AnimeSortField> = {
			[AnimeSortFieldDto.EnglishTitle]: AnimeSortField.EnglishTitle,
			[AnimeSortFieldDto.StartDate]: AnimeSortField.StartDate,
			[AnimeSortFieldDto.Status]: AnimeSortField.Status,
		};
		return statusMap[dto];
	}
}
