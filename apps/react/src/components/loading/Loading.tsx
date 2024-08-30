import { ListItem } from '@mui/material';
import { memo } from 'react';

import loadingImage from '../../assets/loading.webp';

import styles from './Loading.module.css';

const LoadingComponent = () => (
	<ListItem sx={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}}>
		<img src={loadingImage} className={styles.loading__image}/>
	</ListItem>
);

/** Memoized ListItemSkeletonComponent. */
export const Loading = memo(LoadingComponent);
