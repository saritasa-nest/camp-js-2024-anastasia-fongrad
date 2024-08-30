import { memo, FC, useState, ChangeEvent, useEffect, useCallback } from 'react';
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
	const [searchParamsValue, setsearchParamsValue] = useState(searchParams);

	/**
	 * Handle query params value.
	 * @param event Input change event.
	 */
	const handleQueryParamsValue = useCallback(
		(event: ChangeEvent<HTMLInputElement>): void => {
			event.preventDefault();
			setsearchParamsValue(event.target.value);
		},
		[setsearchParamsValue],
	);

	// Update the query params whenever the input value changes
	useEffect(() => {
		const searchValue = searchParamsValue?.length !== 0 ? searchParamsValue : null;
		setQueryParams({ search: searchValue });
	}, [searchParamsValue]);

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
					value={searchParamsValue}
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
