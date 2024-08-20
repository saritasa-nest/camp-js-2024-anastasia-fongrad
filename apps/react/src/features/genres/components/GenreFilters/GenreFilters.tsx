import { memo, FC } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';

import styles from './GenreFilters.module.css';

const GenreFiltersComponent: FC = () => (
	// const { queryParamsValue, handleQueryParamsValue } = useQ
	<Box className={styles.filters}>
		<Typography
			variant="h5"
			component="h5"
			gutterBottom
		>
			Filters
		</Typography>
		<Paper
			component="form"
			className={styles.filters__form}
		>
			<InputBase
				className={styles['filters__input-base']}
				placeholder='Search Genres ...'
				aria-label='search genres'
			/>
			<IconButton
				type="button"
				className={styles['filters__icon-button']}
				aria-label="search"
				color="primary"
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	</Box>
);

/** Genre filters component. */
export const GenreFilters = memo(GenreFiltersComponent);
