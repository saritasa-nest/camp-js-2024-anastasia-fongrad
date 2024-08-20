import { memo, FC, useState, useEffect, useCallback, ChangeEvent } from 'react';
import { SortButton } from '@js-camp/react/components/SortButton/SortButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SelectChangeEvent } from '@mui/material/Select';
import { AnimeType } from '@js-camp/core/models/enums/anime-type.enum';
import { AnimeSortDirections } from '@js-camp/core/models/enums/anime-sort-directions.enum';
import { useAppDispatch } from '@js-camp/react/store';
import { fetchAnime } from '@js-camp/react/store/anime/dispatchers';
import { AnimeMultiSortParameter } from '@js-camp/core/models/anime-multi-sort-parameter.model';
import { AnimeFilteringParameters } from '@js-camp/core/models/anime-filtering-parameters.model';

import { AnimeFilter } from '../AnimeFilter/AnimeFilter';
import { AnimeSearch } from '../AnimeSearch';

import { useQueryParameters } from '../../hooks/useQueryParameters';

import styles from './AnimeFilters.module.css';

const AnimeFiltersComponent: FC = () => {
	const { setQueryParameters, getQueryParameters } = useQueryParameters();
	const initialQueryParameters = getQueryParameters();

	const [animeType, setAnimeType] = useState<AnimeType[]>(initialQueryParameters.animeTypes ?? []);
	const [searchQuery, setSearchQuery] = useState(initialQueryParameters.searchQuery ?? '');
	const [sortTitleOrder, setSortTitleOrder] =
		useState(initialQueryParameters?.animeMultiSort?.animeTitleDirection ?? AnimeSortDirections.Empty);
	const [sortStatusOrder, setSortStatusOrder] =
		useState(initialQueryParameters?.animeMultiSort?.animeStatusDirection ?? AnimeSortDirections.Empty);

	const animeTypes = Object.values(AnimeType);
	const dispatch = useAppDispatch();

	const memoizedGetQueryParameters = useCallback(getQueryParameters, [location.search]);
	const memoizedSetQueryParameters = useCallback(
		setQueryParameters,
		[
			sortStatusOrder,
			sortTitleOrder,
			animeType,
			searchQuery,
		],
	);

	const getNext = (sortDirection: AnimeSortDirections): AnimeSortDirections => {
		switch (sortDirection) {
			case AnimeSortDirections.Ascending:
				return AnimeSortDirections.Descending;
			case AnimeSortDirections.Descending:
				return AnimeSortDirections.Empty;
			default:
				return AnimeSortDirections.Ascending;
		}
	};

	const sortItemsByTitle = useCallback(() => {
		setSortTitleOrder(getNext(sortTitleOrder));
	}, []);

	const sortItemsByStatus = useCallback(() => {
		setSortStatusOrder(getNext(sortStatusOrder));
	}, []);

	const handleMultiChange = useCallback((event: SelectChangeEvent<AnimeType[]>) => {
		const { target: { value } } = event;
		const newValue = typeof value === 'string' ? value.split(',') as AnimeType[] : value;
		setAnimeType(newValue);
	}, []);

	const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	}, []);

	useEffect(() => {
		const animeMultiSort: AnimeMultiSortParameter = {
			animeTitleDirection: sortTitleOrder,
			animeStatusDirection: sortStatusOrder,
		};
		const queryParameters: Partial<AnimeFilteringParameters> = {
			animeMultiSort,
			animeTypes: animeType,
			searchQuery,
		};
		memoizedSetQueryParameters(queryParameters);
	}, [
		sortTitleOrder,
		sortStatusOrder,
		animeType,
		searchQuery,
		memoizedSetQueryParameters,
	]);

	useEffect(() => {
		dispatch(fetchAnime(memoizedGetQueryParameters()));
	}, [memoizedGetQueryParameters, dispatch]);

	return (
		<Box className={styles.filters}>
			<Typography
				variant="h5"
				component="h5"
				gutterBottom
			>
				Filters
			</Typography>
			<form className={styles.filters__form}>
				<div className={styles.filters__inputs}>
					<AnimeSearch
						searchQuery={searchQuery}
						handleSearchChange={handleSearchChange}
					/>
					<AnimeFilter
						animeType={animeType}
						animeTypes={animeTypes}
						handleFiltersChange={handleMultiChange}
					/>
				</div>
				<div className={styles.filters__sort}>
					<SortButton
						title='Sort by Title'
						sortDirection={sortTitleOrder}
						sortItems={sortItemsByTitle}
					/>
					<SortButton
						title='Sort by Status'
						sortDirection={sortStatusOrder}
						sortItems={sortItemsByStatus}
					/>
				</div>
			</form>
		</Box>
	);
};

/** Anime filters component. */
export const AnimeFilters = memo(AnimeFiltersComponent);
