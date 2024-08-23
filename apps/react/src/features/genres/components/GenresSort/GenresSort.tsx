import { memo, FC, useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, Button, Box } from '@mui/material';

import useQueryParams from '../../hooks/useQueryParams';

import styles from './GenresSort.module.css';

/** Enum of sort labels. */
enum SortLabels {
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

// Use Readonly<Record> to make the record immutable
const SORT_OPTIONS: Readonly<Record<SortLabels, SortOption>> = {
	[SortLabels.SortByNameAsc]: { sortField: 'name', sortDirection: 'asc' },
	[SortLabels.SortByNameDesc]: { sortField: 'name', sortDirection: 'desc' },
	[SortLabels.SortByTypeAsc]: { sortField: 'type', sortDirection: 'asc' },
	[SortLabels.SortByTypeDesc]: { sortField: 'type', sortDirection: 'desc' },
};

const GenresSortComponent: FC = () => {
	const { getQueryParamsByKeys, setQueryParams } = useQueryParams();
	const { sortField, sortDirection } = getQueryParamsByKeys(['sortField', 'sortDirection']);
	const data = { sortField, sortDirection } as SortOption;
	const [selectedFilters, setSelectedFilters] = useState<SortOption>(data);
	const sorts = Object.values(SortLabels);
	const handleChange = (event: SelectChangeEvent<string>) => {
		const val = event.target.value as SortLabels;
		const newSelectedFilters = SORT_OPTIONS[val];
		setSelectedFilters(newSelectedFilters);
	};

	/**
	 * Function to get the label from SortLabels by SortOption.
	 * @param sortOption Sort option.
	 * */
	function getSortLabelBySortOption(sortOption: SortOption): SortLabels {
		return (
			(Object.keys(SORT_OPTIONS) as Array<SortLabels>).find(
				key =>
					SORT_OPTIONS[key].sortField === sortOption.sortField &&
					SORT_OPTIONS[key].sortDirection === sortOption.sortDirection,
			) ?? SortLabels.SortByNameAsc
		);
	}

	const handleReset = (event: React.MouseEvent) => {
		event.stopPropagation();
		setSelectedFilters({ sortDirection: null, sortField: null });
	};

	useEffect(() => {
		if (selectedFilters != null) {
			setQueryParams(selectedFilters);
		}
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
