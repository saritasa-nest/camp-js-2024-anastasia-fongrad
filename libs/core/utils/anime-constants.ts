import { AnimeType } from '../models/enums/anime-type.enum';
import { AnimeRating } from '../models/enums/anime-rating.enum';
import { AnimeStatus } from '../models/enums/anime-status.enum';
import { AnimeSeason } from '../models/enums/anime-season.enum';
import { AnimeSource } from '../models/enums/anime-source.enum';
import { AnimeSortParameter } from '../models/anime-sort-parameter.model';
import { AnimeSortField } from '../models/enums/anime-sort-field.enum';
import { AnimeSortDirections } from '../models/enums/anime-sort-directions.enum';

/** Starting page index. */
export const START_PAGE_INDEX = 0;

/** Default maximum number of items per page. */
export const DEFAULT_PAGE_SIZE = 5;

/** Default search query. */
export const DEFAULT_SEARCH_QUERY = '';

/** Default value for anime types list. */
export const DEFAULT_TYPES: AnimeType[] = [];

/** 1. */
export const DEFAULT_TYPE = AnimeType.Unknown;

/** 1. */
export const DEFAULT_RATING = AnimeRating.Unknown;

/** 1. */
export const DEFAULT_STATUS = AnimeStatus.NotYetAired;

/** 1. */
export const DEFAULT_SEASON = AnimeSeason.NonSeasonal;

/** 1. */
export const DEFAULT_SOURCE = AnimeSource.Other;

/** Default search parameter. */
export const DEFAULT_SORT_PARAM: AnimeSortParameter = {
	parameterName: AnimeSortField.StartDate,
	direction: AnimeSortDirections.Empty,
};

/** Descending prefix for a sort parameter. */
export const DESCENDING_PREFIX = '-';

/** Query parameters separator. */
export const PARAMETER_SEPARATOR = ',';
