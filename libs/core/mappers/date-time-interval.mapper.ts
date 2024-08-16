import { DateTimeInterval } from '../models/date-time-interval.model';
import { DateTimeIntervalDto } from '../dtos/date-time-interval.dto';

import { DateTimeMapper } from './date-time-mapper';

export namespace DateTimeIntervalMapper {

	/**
	 * Maps date-time interval from a dto object to a model.
	 * @param dto User login object model.
	 */
	export function fromDto(dto: DateTimeIntervalDto): DateTimeInterval {
		return {
			start: dto.start ? DateTimeMapper.fromDto(dto.start) : null,
			end: dto.end ? DateTimeMapper.fromDto(dto.end) : null,
		};
	}

	/**
	 * 1.
	 * @param model 1.
	 */
	export function toDto(model: DateTimeInterval): DateTimeIntervalDto {
		return {
			start: model.start ? DateTimeMapper.toDto(model.start) : null,
			end: model.end ? DateTimeMapper.toDto(model.end) : null,
		};
	}
}
