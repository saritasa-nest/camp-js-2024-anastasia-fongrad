import { memo, FC } from 'react';
import { Box, Typography } from '@mui/material';

import { StudioSearch } from '../StudioSearch';

import { StudioSortSelect } from '../StudioSortSelect/StudioSortSelect';

import styles from './StudioFilters.module.css';

const StudioFiltersComponent: FC = () => (<Box className={styles.filters}>
	<Typography variant="h5" component="h5" gutterBottom>
		Filters
	</Typography>
	<StudioSortSelect />
	<StudioSearch />
</Box>);

/** Studio filters component. */
export const StudioFilters = memo(StudioFiltersComponent);
