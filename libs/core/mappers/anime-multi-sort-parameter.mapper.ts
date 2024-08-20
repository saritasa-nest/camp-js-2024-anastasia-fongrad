import { AnimeSortField } from '../models/enums/anime-sort-field.enum';
import { AnimeSortDirections } from '../models/enums/anime-sort-directions.enum';
import { DESCENDING_PREFIX, PARAMETER_SEPARATOR } from '../utils/anime-constants';
import { AnimeMultiSortParameter } from '../models/anime-multi-sort-parameter.model';

import { AnimeSortFieldMapper } from './anime-sort-field.mapper';

export namespace AnimeMultiSortParameterMapper {

	/**
	 * Converts anime table ordering from a model to a dto object.
	 * @param model Anime table ordering.
	 */
	export function toDto(model: AnimeMultiSortParameter): string {
		const sortQuery = [];
		if (model.animeStatusDirection !== AnimeSortDirections.Empty) {
			const parameter = AnimeSortFieldMapper.toDto(AnimeSortField.Status);
			if (model.animeStatusDirection === AnimeSortDirections.Ascending) {
				sortQuery.push(`${parameter}`);
			} else {
				sortQuery.push(`${DESCENDING_PREFIX}${parameter}`);
			}
		}
		if (model.animeTitleDirection !== AnimeSortDirections.Empty) {
			const parameter = AnimeSortFieldMapper.toDto(AnimeSortField.EnglishTitle);
			if (model.animeTitleDirection === AnimeSortDirections.Ascending) {
				sortQuery.push(`${parameter}`);
			} else {
				sortQuery.push(`${DESCENDING_PREFIX}${parameter}`);
			}
		}
		return sortQuery.join(PARAMETER_SEPARATOR);
	}

	/**
	 * Converts anime table ordering from a dto object to a model.
	 * @param dto Anime table ordering.
	 */
	export function fromDto(dto: string): AnimeMultiSortParameter {
		let animeStatusDirection = AnimeSortDirections.Empty;
		let animeTitleDirection = AnimeSortDirections.Empty;
		const parameters = dto.split(PARAMETER_SEPARATOR);
		parameters.forEach(parameter => {
			if (parameter.startsWith(DESCENDING_PREFIX)) {
				const field = parameter.substring(DESCENDING_PREFIX.length);
				if (field === AnimeSortFieldMapper.toDto(AnimeSortField.Status)) {
					animeStatusDirection = AnimeSortDirections.Descending;
				} else if (field === AnimeSortFieldMapper.toDto(AnimeSortField.EnglishTitle)) {
					animeTitleDirection = AnimeSortDirections.Descending;
				}
			} else if (parameter === AnimeSortFieldMapper.toDto(AnimeSortField.Status)) {
				animeStatusDirection = AnimeSortDirections.Ascending;
			} else if (parameter === AnimeSortFieldMapper.toDto(AnimeSortField.EnglishTitle)) {
				animeTitleDirection = AnimeSortDirections.Ascending;
			}
		});
		return {
			animeStatusDirection,
			animeTitleDirection,
		};
	}
}
