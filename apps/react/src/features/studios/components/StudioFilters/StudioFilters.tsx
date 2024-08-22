import { memo, FC } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';

import { StudioSortSelect } from '../StudioSortSelect/StudioSortSelect';

import styles from './StudioFilters.module.css';

const StudioFiltersComponent: FC = () => (<Box className={styles.filters}>
	<Typography variant="h5" component="h5" gutterBottom>
		Filters
	</Typography>
	<StudioSortSelect />
	<Paper component="form" className={styles.filters__form}>
		<InputBase
			className={styles['filters__input-base']}
			placeholder="Search Studios ..."
			aria-label="search genres"
		/>
		<IconButton type="button" className={styles['filters__icon-button']} aria-label="search" color="primary">
			<SearchIcon />
		</IconButton>
	</Paper>
</Box>);

/** Studio filters component. */
export const StudioFilters = memo(StudioFiltersComponent);
