import { PaginationListCursorDto } from '../dtos/pagination.dto';
import { PaginationListCursor } from '../models/pagination-list-cursor.model';

export namespace PaginationListCursorMapper {
	/**
	 * Maps any pagination dto to a pagination model.
	 * @param dto Pagination dto.
	 * @param mapper Function to map individual dto to model.
	 */
	export function fromDto<TDto, TModel>(
		dto: PaginationListCursorDto<TDto>,
		mapper: (dto: TDto) => TModel
	): PaginationListCursor<TModel> {
		return new PaginationListCursor<TModel>({
			nextPage: getCursor(dto.next),
			previousPage: getCursor(dto.previous),
			results: dto.results.map((result) => mapper(result)),
		});
	}
	function getCursor(url: string | null) {
		if (url == null) {
			return null;
		}
		const urlParams = new URLSearchParams(new URL(url).search);
		const cursor = urlParams.get('cursor');
		return cursor;
	}
}
