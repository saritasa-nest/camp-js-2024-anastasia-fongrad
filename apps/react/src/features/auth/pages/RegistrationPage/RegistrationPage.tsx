import { memo, FC } from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';

import styles from './RegistrationPage.module.css';

const RegistrationPageComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	return (
		<main className={`${styles.layout} ${open ? styles.layout_open : ''}`}>
			<Typography
				variant="h5"
				component="h5"
				gutterBottom
			>
				Registration
			</Typography>
		</main>
	);
};

/** Anime page. */
export const RegistrationPage = memo(RegistrationPageComponent);
