import { memo, FC, useState, ChangeEvent, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';

import useQueryParams from '../../hooks/useQueryParams';

import styles from './GenreSearch.module.css';

const GenreSearchComponent: FC = () => {
	const { getQueryParamByKey, setQueryParams } = useQueryParams();
	const searchParams = getQueryParamByKey('search') ?? '';
	const [queryParamsValue, setQueryParamsValue] = useState(searchParams);

	/**
	 * Handle query params value.
	 * @param event Input change event.
	 */
	function handleQueryParamsValue(event: ChangeEvent<HTMLInputElement>): void {
		event.preventDefault();
		setQueryParamsValue(event.target.value);
	}

	// Update the query params whenever the input value changes
	useEffect(() => {
		const searchValue = queryParamsValue?.length !== 0 ? queryParamsValue : null;
		setQueryParams({ search: searchValue });
	}, [queryParamsValue]);

	return (
		<Box className={styles.search}>
			<Typography variant='h5' component='h5' gutterBottom>
				search
			</Typography>
			<Paper component='form' className={styles.search__form}>
				<InputBase
					className={styles['search__input-base']}
					placeholder='Search Genres ...'
					aria-label='search genres'
					value={queryParamsValue}
					onChange={handleQueryParamsValue}
				/>
				<IconButton type='button' className={styles['search__icon-button']} aria-label='search' color='primary'>
					<SearchIcon />
				</IconButton>
			</Paper>
		</Box>
	);
};

/** Genre search component. */
export const GenreSearch = memo(GenreSearchComponent);
