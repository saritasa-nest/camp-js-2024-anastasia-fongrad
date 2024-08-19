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
import { AnimeSortParameter } from '@js-camp/core/models/anime-sort-parameter.model';
import { AnimeSortDirections } from '@js-camp/core/models/enums/anime-sort-directions.enum';
import { AnimeSortField } from '@js-camp/core/models/enums/anime-sort-field.enum';
import { useAppDispatch } from '@js-camp/react/store';
import { fetchAnime } from '@js-camp/react/store/anime/dispatchers';

import { useQueryParameters } from '../../hooks/useQueryParameters';

import styles from './AnimeFilters.module.css';

// eslint-disable-next-line max-lines-per-function
const AnimeFiltersComponent: FC = () => {
	const {
		getQueryParameters,
		changeSortParameter,
		changeFilterParameters,
		changeSearchParameter,
	} = useQueryParameters();
	const [animeType, setAnimeType] = useState<AnimeType[]>([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [sortTitleOrder, setSortTitleOrder] = useState(AnimeSortDirections.Empty);
	const [sortStatusOrder, setSortStatusOrder] = useState(AnimeSortDirections.Empty);
	const dispatch = useAppDispatch();
	const animeTypes = Object.values(AnimeType);

	const sortItemsByTitle = () => {
		setSortTitleOrder(sortTitleOrder);
		const sortParameter: AnimeSortParameter = {
			parameterName: AnimeSortField.EnglishTitle,
			direction: sortTitleOrder,
		};
		changeSortParameter(sortParameter);
	};

	const sortItemsByStatus = () => {
		setSortStatusOrder(sortTitleOrder);
		const sortParameter: AnimeSortParameter = {
			parameterName: AnimeSortField.Status,
			direction: sortTitleOrder,
		};
		changeSortParameter(sortParameter);
	};

	const handleMultiChange = (event: SelectChangeEvent<AnimeType[]>) => {
		const { target: { value } } = event;
		const newValue = typeof value === 'string' ? value.split(',') as AnimeType[] : value;
		setAnimeType(newValue);
		changeFilterParameters(newValue);
	};

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
		changeSearchParameter(event.target.value);
	};

	dispatch(fetchAnime(getQueryParameters()));

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
						<InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							value={searchQuery}
							onChange={handleSearchChange}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										edge="end"
									>
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
					<FormControl sx={{ m: 1, width: 300 }}>
						<InputLabel id="demo-multiple-checkbox-label">Type</InputLabel>
						<Select
							labelId="demo-multiple-checkbox-label"
							id="demo-multiple-checkbox"
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
