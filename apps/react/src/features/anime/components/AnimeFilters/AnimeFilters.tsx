import { memo, FC, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SortButton } from '@js-camp/react/components/SortButton/SortButton';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { AnimeType } from '@js-camp/core/models/enums/anime-type.enum';
import { AnimeSortDirections } from '@js-camp/core/models/enums/anime-sort-directions.enum';
import { useAppDispatch } from '@js-camp/react/store';
import { fetchAnime } from '@js-camp/react/store/anime/dispatchers';
import { AnimeMultiSortParameter } from '@js-camp/core/models/anime-multi-sort-parameter.model';

import { useQueryParameters } from '../../hooks/useQueryParameters';

import styles from './AnimeFilters.module.css';

// eslint-disable-next-line max-lines-per-function
const AnimeFiltersComponent: FC = () => {
	const {
		changeSortParameter,
		changeFilterParameters,
		changeSearchParameter,
		getQueryParameters,
	} = useQueryParameters();
	const initialQueryParameters = getQueryParameters();
	const [animeType, setAnimeType] = useState<AnimeType[]>(initialQueryParameters.animeTypes ?? []);
	const [searchQuery, setSearchQuery] = useState(initialQueryParameters.searchQuery ?? '');
	const [sortTitleOrder, setSortTitleOrder] =
		useState(initialQueryParameters?.animeMultiSort?.animeTitleDirection ?? AnimeSortDirections.Empty);
	const [sortStatusOrder, setSortStatusOrder] =
		useState(initialQueryParameters?.animeMultiSort?.animeStatusDirection ?? AnimeSortDirections.Empty);
	const animeTypes = Object.values(AnimeType);
	const dispatch = useAppDispatch();

	const sortItemsByTitle = () => {
		setSortTitleOrder(sortTitleOrder);
		const animeMultiSort: AnimeMultiSortParameter = {
			animeTitleDirection: sortTitleOrder,
			animeStatusDirection: sortStatusOrder,
		};
		changeSortParameter(animeMultiSort);
		dispatch(fetchAnime(getQueryParameters()));
	};

	const sortItemsByStatus = () => {
		setSortStatusOrder(sortTitleOrder);
		const animeMultiSort: AnimeMultiSortParameter = {
			animeTitleDirection: sortTitleOrder,
			animeStatusDirection: sortStatusOrder,
		};
		changeSortParameter(animeMultiSort);
		dispatch(fetchAnime(getQueryParameters()));
	};

	const handleMultiChange = (event: SelectChangeEvent<AnimeType[]>) => {
		const { target: { value } } = event;
		const newValue = typeof value === 'string' ? value.split(',') as AnimeType[] : value;
		setAnimeType(newValue);
		changeFilterParameters(newValue);
		dispatch(fetchAnime(getQueryParameters()));
	};

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
		changeSearchParameter(event.target.value);
		dispatch(fetchAnime(getQueryParameters()));
	};

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
					<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
						<InputLabel htmlFor="search-input">Search</InputLabel>
						<OutlinedInput
							id="search-input"
							value={searchQuery}
							onChange={handleSearchChange}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="search"
										edge="end"
									>
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							}
							label="Search"
						/>
					</FormControl>
					<FormControl sx={{ m: 1, width: 300 }}>
						<InputLabel id="type-select-multiple-label">Type</InputLabel>
						<Select
							labelId="type-select-multiple-label"
							id="type-select-multiple"
							multiple
							value={animeType}
							onChange={handleMultiChange}
							input={<OutlinedInput label="Tag" />}
							renderValue={selected => selected.join(', ')}
						>
							{animeTypes.map(type => (
								<MenuItem key={type} value={type}>
									<Checkbox checked={animeType.includes(type)} />
									<ListItemText primary={type} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
				<div className={styles.filters__sort}>
					<SortButton
						title='Sort by Title'
						sortOrder={sortTitleOrder}
						sortItems={sortItemsByTitle}
					/>
					<SortButton
						title='Sort by Status'
						sortOrder={sortStatusOrder}
						sortItems={sortItemsByStatus}
					/>
				</div>
			</form>
		</Box>
	);
};

/** Genre filters component. */
export const AnimeFilters = memo(AnimeFiltersComponent);
