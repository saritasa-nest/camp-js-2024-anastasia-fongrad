import { memo, FC } from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';

import styles from './LoginPage.module.css';

const LoginPageComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	return (
		<main className={`${styles.layout} ${open ? styles.layout_open : ''}`}>
			<Typography
				variant="h5"
				component="h5"
				gutterBottom
			>
				Login
			</Typography>
		</main>
	);
};

/** Anime page. */
export const LoginPage = memo(LoginPageComponent);
