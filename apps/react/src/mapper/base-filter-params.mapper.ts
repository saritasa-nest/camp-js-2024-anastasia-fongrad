import { BaseFilterParamsDto } from '../dto/base-filter-params.dto';
import { BaseQueryParams } from '../model/base-query-params.model';

/** Base filter params mappers. */
export namespace BaseFilterParamsMapper {
	/**
	 * Mapping from query params to filter prams.
	 * @param queryParams Query params.
	 */
	export function fromQueryParams(queryParams: BaseQueryParams.Combined): BaseFilterParamsDto.Combined {
		const { nextCursor, search } = queryParams;

		let cursor: string | null = null;

		if (nextCursor) {
			cursor = nextCursor;
		}

		return { cursor, search };
	}
}
