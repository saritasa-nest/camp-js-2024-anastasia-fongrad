import { memo, FC } from 'react';
import { Box, Avatar, Button } from '@mui/material';
import Person from '@mui/icons-material/Person';

import styles from './AvatarPicker.module.css';

const AvatarPickerComponent: FC = () => {

	return (
		<Box className={styles.container}>
			<Avatar
				className={styles.avatar}
			>
				<Person
					className={styles.avatar__icon}
				/>
			</Avatar>
			<Button
				type='button'
				variant='contained'
				className={styles.button}
			>
				Upload Avatar
			</Button>
		</Box>
	);
};

/** Avatar picker component. */
export const AvatarPicker = memo(AvatarPickerComponent);
