import { memo, FC } from 'react';
import { Box } from '@mui/material';
import { CircularProgress } from '@mui/material';

import styles from './Loader.module.css';

const LoaderComponent: FC = () => {
	return (
		<Box className={styles.loader}>
			<CircularProgress />
		</Box>
	);
}

/** Genre filters component. */
export const Loader = memo(LoaderComponent);
