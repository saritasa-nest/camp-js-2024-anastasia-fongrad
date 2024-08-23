import { StudioQueryParametersDto } from '@js-camp/core/dtos/studio-query-parameters.dto';

/**
 * Transform params to URLSearchParams.
 * @param params Studio query params.
 */
export function composeQueryParams(params: StudioQueryParametersDto): URLSearchParams {
	return new URLSearchParams(JSON.parse(JSON.stringify(params)));
}
