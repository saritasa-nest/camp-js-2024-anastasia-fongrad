import { memo, FC } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';

import styles from './GenreFilters.module.css';

type GenresFiltersProps = {

	/** 1. */
	readonly title: string;
};

/** 1. */
const GenreFiltersComponent: FC<GenresFiltersProps> = ({ title }) => (
	<Box className={styles.filters}>
		<Typography variant="h5" component="div" gutterBottom>
			Filters
		</Typography>
		<Paper
			component="form"
			sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder={ `Search ${title} ...` }
				inputProps={{ 'aria-label': 'search google maps' }}
			/>
			<IconButton type="button" sx={{ p: '10px' }} aria-label="search" color="primary">
				<SearchIcon />
			</IconButton>
		</Paper>
	</Box>
);

/** 1. */
export const GenreFilters = memo(GenreFiltersComponent);
