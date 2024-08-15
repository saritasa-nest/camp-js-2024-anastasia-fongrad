import { memo, FC } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';

import styles from './GenreFilters.module.css';

const GenreFiltersComponent: FC = () => (
	<Box className={styles.filters}>
		<Typography variant="h5" component="h5" gutterBottom>
			Filters
		</Typography>
		<Paper
			component="form"
			className={styles.form}
		>
			<InputBase
				className={styles.inputBase}
				placeholder={ `Search Genres ...` }
				inputProps={{ 'aria-label': 'search google maps' }}
			/>
			<IconButton
				type="button"
				className={styles.iconButton}
				aria-label="search"
				color="primary"
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	</Box>
);

/** 1. */
export const GenreFilters = memo(GenreFiltersComponent);
