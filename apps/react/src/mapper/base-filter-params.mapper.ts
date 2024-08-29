import { BaseFilterParamsDto } from '../dto/base-filter-params.dto';
import { BaseQueryParams } from '../model/base-query-params.model';

/** Base filter params mappers. */
export namespace BaseFilterParamsMapper {

	/**
	 * Mapping from query params to filter prams.
	 * @param queryParams Query params.
	 */
	export function toDto(queryParams: BaseQueryParams.Combined): BaseFilterParamsDto.Combined {
		return { cursor: queryParams.nextCursor, search: queryParams.search };
	}
}
