import { ModelType } from '../utils/enums/model-type.enum';

import { TypeMapper } from './anime-type.mapper';

export namespace AnimeQueryParametersMapper {

	/**
	 * 1.
	 * @param model 1.
	 */
	export function toDto(model: ModelType[]): String {
		return model.map(type => TypeMapper.toDto(type)).join(',');
	}
}
