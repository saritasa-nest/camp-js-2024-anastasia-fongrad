import { Pagination } from '../models/pagination.model';
import { PaginationDto } from '../dtos/pagination.dto';

export namespace PaginationMapper {

	/**
	 * Maps any pagination dto to a pagination model.
	 * @param dto Pagination dto.
	 * @param mapper Function to map individual dto to model.
	 */
	export function fromDto<TDto, TModel>(dto: PaginationDto<TDto>, mapper: (dto: TDto) => TModel): Pagination<TModel> {
		return new Pagination<TModel>({
			totalCount: dto.count,
			nextPage: dto.next,
			previousPage: dto.previous,
			results: dto.results.map(result => mapper(result)),
		});
	}
}
