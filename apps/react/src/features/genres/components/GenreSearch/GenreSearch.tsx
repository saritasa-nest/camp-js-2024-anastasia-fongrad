import { memo, FC, useState, ChangeEvent } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';

import { useSearchParams } from 'react-router-dom';

import styles from './GenreSearch.module.css';

const GenreSearchComponent: FC = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [queryParamsValue, setQueryParamsValue] = useState('');

	/**
	 * Handle query params.
	 * @param value Query params value.
	 */
	function handleQueryParams(value: string): void {
		const newSearchParams = new URLSearchParams(searchParams);

		if (value) {
			newSearchParams.set('search', value);
		} else {
			newSearchParams.delete('search');
		}

		setSearchParams(newSearchParams);
	}

	/**
	 * Handle query params value.
	 * @param event Input change event.
	 */
	function handleQueryParamsValue(event: ChangeEvent<HTMLInputElement>): void {
		event.preventDefault();
		handleQueryParams(event.target.value);
		setQueryParamsValue(event.target.value);
	}
	return (
		<Box className={styles.filters}>
			<Typography variant="h5" component="h5" gutterBottom>
				Search
			</Typography>
			<Paper component="form" className={styles.filters__form}>
				<InputBase
					className={styles['filters__input-base']}
					placeholder="Search Genres ..."
					aria-label="search genres"
					value={queryParamsValue}
					onChange={handleQueryParamsValue}
				/>
				<IconButton type="button" className={styles['filters__icon-button']} aria-label="search" color="primary">
					<SearchIcon />
				</IconButton>
			</Paper>
		</Box>
	);
};

/** Genre filters component. */
export const GenreSearch = memo(GenreSearchComponent);
