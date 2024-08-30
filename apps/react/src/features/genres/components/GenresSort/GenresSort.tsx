import { memo, FC, useState, useEffect, useCallback } from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, Button, Box } from '@mui/material';

import { assertValueInEnum } from '@js-camp/react/utils/ultil';

import useQueryParams from '../../hooks/useQueryParams';

import styles from './GenresSort.module.css';

/** Enum of sort label. */
enum SortLabel {
	SortByNameAsc = 'Sort by name (A - Z)',
	SortByNameDesc = 'Sort by name (Z - A)',
	SortByTypeAsc = 'Sort by type (A - Z)',
	SortByTypeDesc = 'Sort by type (Z - A)',
}

/** Sort options. */
type SortOption = {

	/** Sort field. */
	sortField: string | null;

	/** Sort direction. */
	sortDirection: 'asc' | 'desc' | null;
};

const SORT_OPTIONS: Readonly<Record<SortLabel, SortOption>> = {
	[SortLabel.SortByNameAsc]: { sortField: 'name', sortDirection: 'asc' },
	[SortLabel.SortByNameDesc]: { sortField: 'name', sortDirection: 'desc' },
	[SortLabel.SortByTypeAsc]: { sortField: 'type', sortDirection: 'asc' },
	[SortLabel.SortByTypeDesc]: { sortField: 'type', sortDirection: 'desc' },
};

const GenresSortComponent: FC = () => {
	const { getQueryParamsByKeys, setQueryParams } = useQueryParams();
	const { sortField, sortDirection } = getQueryParamsByKeys(['sortField', 'sortDirection']);
	const data = { sortField, sortDirection } as SortOption;
	const [selectedFilters, setSelectedFilters] = useState<SortOption>(data);
	const sorts = Object.values(SortLabel);
	const handleChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			const val = event.target.value;
			assertValueInEnum(val, SortLabel);
			const newSelectedFilters = SORT_OPTIONS[val];
			setSelectedFilters(newSelectedFilters);
		},
		[setSelectedFilters],
	);

	/**
	 * Function to get the label from SortLabels by SortOption.
	 * @param sortOption Sort option.
	 * */
	const getSortLabelBySortOption = (sortOption: SortOption): SortLabel =>
		(Object.keys(SORT_OPTIONS) as Array<SortLabel>).find(
			key =>
				SORT_OPTIONS[key].sortField === sortOption.sortField &&
				SORT_OPTIONS[key].sortDirection === sortOption.sortDirection,
		) ?? SortLabel.SortByNameAsc;

	const handleReset = (event: React.MouseEvent) => {
		event.stopPropagation();
		setSelectedFilters({ sortDirection: null, sortField: null });
	};

	useEffect(() => {
		setQueryParams(selectedFilters);
	}, [selectedFilters]);
	return (
		<Box className={styles.sort}>
			<FormControl>
				<InputLabel id='single-select-label'>Sort By</InputLabel>
				<Select
					labelId='single-select-label'
					value={getSortLabelBySortOption(selectedFilters)}
					onChange={handleChange}
					label='Sort By'
				>
					{sorts.map(option => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
					<MenuItem>
						<Button onClick={handleReset} variant='outlined' color='secondary'>
							Reset
						</Button>
					</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

/** Genre filters component. */
export const GenresSort = memo(GenresSortComponent);
