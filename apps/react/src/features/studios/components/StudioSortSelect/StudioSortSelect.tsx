import { useAppDispatch } from '@js-camp/react/store';
import { resetCursor, setOrdering, setPaginationEvent } from '@js-camp/react/store/studio/slice';
import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FC, memo } from 'react';
import { StudioSortDirection } from '@js-camp/core/models/enums/studio-sort-direction.enum';
import { useSearchParams } from 'react-router-dom';

import { sortValueFromQueryParams } from '../../utils/sortValueFromQueryParams';
import { queryFromSortValue } from '../../utils/queryFromSortValue';

import styles from './StudioSortSelect.module.css';

const StudioSortSelectComponent: FC = () => {
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();
	const ordering = searchParams.get('ordering');
	const { sortValue, sortDirection } =
		ordering !== null ? sortValueFromQueryParams(ordering) : { sortValue: null, sortDirection: null };

	const handleSortChange = (event: SelectChangeEvent) => {
		dispatch(resetCursor());
		dispatch(setPaginationEvent(false));
		dispatch(setOrdering(sortDirection === StudioSortDirection.Descending ?
			`-${event.target.value}` :
			event.target.value));
	};

	const handleDirectionChange = () => {
		dispatch(resetCursor());
		dispatch(setPaginationEvent(false));
		dispatch(setOrdering(queryFromSortValue({
			sortValue: sortValue ?? undefined,
			sortDirection:
				sortDirection === StudioSortDirection.Descending ?
					StudioSortDirection.Ascending :
					StudioSortDirection.Descending,
		})));
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
						color="primary"
						onClick={handleDirectionChange}
						disabled={sortValue === null}
					>
						{sortDirection === StudioSortDirection.Descending ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
					</IconButton>
				</span>
			</Tooltip>
		</div>
	);
};

/** Studio sort select component. */
export const StudioSortSelect = memo(StudioSortSelectComponent);
