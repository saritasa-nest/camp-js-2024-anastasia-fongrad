import { memo, FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

import styles from './Loader.module.css';

const LoaderComponent: FC = () => (
	<Box className={styles.loader}>
		<CircularProgress />
	</Box>
);

/** App loader component. */
export const Loader = memo(LoaderComponent);
