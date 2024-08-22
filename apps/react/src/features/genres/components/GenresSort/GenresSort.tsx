import { memo, FC, useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

import useQueryParams from '../../hooks/useQueryParams';

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
	sortField: string;

	/** Sort direction. */
	sortDirection: 'asc' | 'desc';
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

	const data = sortDirection != null && sortField != null ? ({ sortField, sortDirection } as SortOption) : undefined;
	const [selectedFilters, setSelectedFilters] = useState<SortOption | undefined>(data);
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
	function getSortLabelBySortOption(sortOption: SortOption | undefined): SortLabels | undefined {
		return sortOption == null ? undefined : (Object.keys(SORT_OPTIONS) as Array<SortLabels>).find(
			key =>
				SORT_OPTIONS[key].sortField === sortOption.sortField &&
				SORT_OPTIONS[key].sortDirection === sortOption.sortDirection,
		);
	}

	useEffect(() => {
		if (selectedFilters != null) {
			setQueryParams(selectedFilters);
		}
	}, [selectedFilters]);
	return (
		<FormControl fullWidth>
			<InputLabel id='single-select-label'>Sort By</InputLabel>
			<Select
				labelId='single-select-label'
				value={getSortLabelBySortOption(selectedFilters)}
				onChange={handleChange}
				label='Select an Option'
			>
				{sorts.map(option => (
					<MenuItem key={option} value={option}>
						{option}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

/** Genre filters component. */
export const GenresSort = memo(GenresSortComponent);
