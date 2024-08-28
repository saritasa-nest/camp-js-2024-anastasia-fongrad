import { ListCursorPaginationDto } from '../dtos/list-cursor-pagination.dto';
import { ListCursorPagination } from '../models/list-cursor-pagination.model';

export namespace ListCursorPaginationMapper {

	/**
	 * Maps DTO to model.
	 * @param dto List-cursor pagination DTO.
	 * @param mapper Function to map individual DTO to model.
	 */
	export function fromDto<TDto, TModel>(dto: ListCursorPaginationDto<TDto>, mapper: (dto: TDto) => TModel): ListCursorPagination<TModel> {
		const nextCursor = dto.next !== null ? new URL(dto.next).searchParams.get('cursor') : null;
		const previousCursor = dto.previous !== null ? new URL(dto.previous).searchParams.get('cursor') : null;
		return {
			nextCursor,
			previousCursor,
			results: dto.results.map(result => mapper(result)),
		};
	}
}
