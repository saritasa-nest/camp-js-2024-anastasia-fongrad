import { StudioQueryParametersDto } from '@js-camp/core/dtos/studio-query-parameters.dto';

/**
 * Transform params to URLSearchParams.
 * @param params Studio query params.
 */
export function composeQueryParams(params: StudioQueryParametersDto): URLSearchParams {
	return new URLSearchParams(Object.entries(params).filter(([_, value]) => Boolean(value)));
}
