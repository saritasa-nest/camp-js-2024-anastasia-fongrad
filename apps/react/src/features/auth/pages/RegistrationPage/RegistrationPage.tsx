import { memo, FC } from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

import { RegistrationForm } from '../../components/RegistrationForm';

import styles from './RegistrationPage.module.css';

const RegistrationPageComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	const loginUrl = '/login';
	return (
		<main className={`${styles.layout} ${open ? styles.layout_open : ''}`}>
			<Paper
				elevation={3}
				className={styles.layout__card}
			>
				<Typography
					variant="h5"
					component="h5"
					gutterBottom
				>
					Registration
				</Typography>
				<RegistrationForm/>
				<Typography
					component="p"
					gutterBottom
				>
					Already have an account?
					<Link
						component={NavLink}
						to={loginUrl}
					>
						Login
					</Link>
				</Typography>
			</Paper>
		</main>
	);
};

/** Anime page. */
export const RegistrationPage = memo(RegistrationPageComponent);
