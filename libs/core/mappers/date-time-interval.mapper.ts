import { DateTimeIntervalDto } from '../dtos/date-time-interval.dto';
import { DateTimeInterval } from '../models/date-time-interval.model';

export namespace DateTimeIntervalMapper {

	/**
	 * Maps dto to model.
	 * @param dto Date-time range dto.
	 */
	export function fromDto(dto: DateTimeIntervalDto): DateTimeInterval {
		return {
			start: dto.start != null ? new Date(dto.start).toLocaleDateString('ru') : null,
			end: dto.end != null ? new Date(dto.end).toLocaleDateString('ru') : null,
		};
	}
}
