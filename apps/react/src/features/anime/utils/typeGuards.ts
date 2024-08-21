import { AnimeFilteringParametersDto } from '@js-camp/core/dtos/anime-filtering-parameters.dto';

/**
 * A type guard for AnimeFilteringParametersDto.
 * @param params An object to determine a type.
 */
export const isAnimeFilteringParametersDto = (params: unknown): params is Partial<AnimeFilteringParametersDto> => {
	if (typeof params !== 'object' || params === null) {
		return false;
	}
	const typedParams = params as { [key: string]: unknown; };
	const { type__in, search, ordering } = typedParams;

	if (type__in !== undefined && typeof type__in !== 'string') {
		return false;
	}
	if (search !== undefined && typeof search !== 'string') {
		return false;
	}
	if (ordering !== undefined && typeof ordering !== 'string') {
		return false;
	}

	return true;
};
