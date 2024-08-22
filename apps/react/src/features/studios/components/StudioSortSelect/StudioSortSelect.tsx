import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { selectSortDirection, selectSorting } from '@js-camp/react/store/studio/selectors';
import { changeSortDirection, changeSorting, resetCursor, setPaginationEvent } from '@js-camp/react/store/studio/slice';
import {
	FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent,
	Tooltip,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FC, memo } from 'react';

import styles from './StudioSortSelect.module.css';

const StudioSortSelectComponent: FC = () => {
	const dispatch = useAppDispatch();
	const sortValue = useAppSelector(selectSorting);
	const sortDirection = useAppSelector(selectSortDirection);

	const handleSortChange = (event: SelectChangeEvent) => {
		dispatch(changeSorting(event.target.value));
		dispatch(resetCursor());
		dispatch(setPaginationEvent(false));
	};

	const handleDirectionChange = () => {
		dispatch(changeSortDirection(sortDirection === 'asc' ? 'desc' : 'asc'));
		dispatch(resetCursor());
		dispatch(setPaginationEvent(false));
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
				<span>
					<IconButton
						aria-label="delete"
						className={styles['order-button']}
						color='primary'
						onClick={handleDirectionChange}
						disabled={sortValue === null}
					>
						{sortDirection === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
					</IconButton>
				</span>
			</Tooltip>
		</div>
	);
};

/** Studio sort select component. */
export const StudioSortSelect = memo(StudioSortSelectComponent);
