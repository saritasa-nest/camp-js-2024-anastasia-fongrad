import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { fetchStudios } from '@js-camp/react/store/studio/dispatchers';
import { selectSorting } from '@js-camp/react/store/studio/selectors';
import { changeSorting } from '@js-camp/react/store/studio/slice';
import {
	FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent,
	Tooltip,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FC, memo, useState } from 'react';

import styles from './StudioSortSelect.module.css';

type SortDirection = 'asc' | 'desc';

const StudioSortSelectComponent: FC = () => {
	const dispatch = useAppDispatch();
	const sortValue = useAppSelector(selectSorting);
	const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

	const handleSortChange = (event: SelectChangeEvent) => {
		const ordering = sortDirection === 'asc' ? event.target.value : `-${event.target.value}`;
		dispatch(changeSorting(ordering));
		dispatch(fetchStudios({ pageSize: 25, pageNumber: 0, ordering }));
	};

	const handleDirectionChange = () => {
		setSortDirection(previousValue => previousValue === 'asc' ? 'desc' : 'asc');
	};

	return (
		<div className={styles.sort}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Sort by</InputLabel>
				<Select
					labelId="sort-select-label"
					id="sort-select"
					value={sortValue ?? ''}
					label="Sort by"
					onChange={handleSortChange}
				>
					<MenuItem value={'name'}>Name</MenuItem>
					<MenuItem value={'modified'}>Modification time</MenuItem>
				</Select>
			</FormControl>
			<Tooltip title="Sort direction">
				<IconButton
					aria-label="delete"
					className={styles['order-button']}
					color='primary'
					onClick={handleDirectionChange}
				>
					{sortDirection === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
				</IconButton>
			</Tooltip>
		</div>
	);
};

/** Studio sort select component. */
export const StudioSortSelect = memo(StudioSortSelectComponent);
