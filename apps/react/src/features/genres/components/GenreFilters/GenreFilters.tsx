import { memo, FC } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography, FormControl, InputLabel, InputAdornment, OutlinedInput } from '@mui/material';

import styles from './GenreFilters.module.css';

const GenreFiltersComponent: FC = () => (
	<Box className={styles.filters}>
		<Typography
			variant="h5"
			component="h5"
			gutterBottom
		>
			Filters
		</Typography>
		<FormControl variant="outlined">
			<InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
			<OutlinedInput
				id="outlined-adornment-search"
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="search"
							edge="end"
						>
							<SearchIcon />
						</IconButton>
					</InputAdornment>
				}
				label="Search"
			/>
		</FormControl>
	</Box>
);

/** Genre filters component. */
export const GenreFilters = memo(GenreFiltersComponent);
