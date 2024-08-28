import { FC, memo } from 'react';
import { IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import styles from './AddStudioButton.module.css';

const AddStudioButtonComponent: FC = () => (
	<div className={styles.layout__empty}>
		<div className={styles.layout__button}>
			<IconButton edge="start" color="inherit" aria-label="add">
				<AddIcon />
			</IconButton>
			<Typography>Add Studio</Typography>
		</div>
	</div>
);

/** Add studio button component. */
export const AddStudioButton = memo(AddStudioButtonComponent);
