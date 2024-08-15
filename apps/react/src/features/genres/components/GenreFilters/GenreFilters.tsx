import { memo, FC } from 'react';
import { TextField, Box, Button } from '@mui/material';

/** 1. */
const GenreFiltersComponent: FC = () => (
	<Box sx={{ marginBottom: 2 }}>
		<TextField
			fullWidth
			label="Search Genres"
			variant="outlined"
		/>
		<Button>Search</Button>
	</Box>
);

/** 1. */
export const GenreFilters = memo(GenreFiltersComponent);
