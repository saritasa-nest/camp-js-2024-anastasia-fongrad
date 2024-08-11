import { DateTimeInterval } from '../models/date-time-interval.model';
import { DateTimeIntervalDto } from '../dtos/date-time-interval.dto';

export namespace DateTimeIntervalMapper {

	/**
	 * Maps date-time interval from a model to a dto object.
	 * @param dto User login object model.
	 */
	export function fromDto(dto: DateTimeIntervalDto): DateTimeInterval {
		return {
			start: dto.start ? new Date(dto.start) : null,
			end: dto.end ? new Date(dto.end) : null,
		};
	}
}
