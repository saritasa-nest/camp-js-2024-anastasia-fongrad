import { memo, FC } from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

import { LoginForm } from '../../components/LoginForm';

import styles from './LoginPage.module.css';

const LoginPageComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	const registrationUrl = '/registration';
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
					Login
				</Typography>
				<LoginForm/>
				<Typography
					component="p"
					gutterBottom
				>
					Don't have an account?
					<Link
						component={NavLink}
						to={registrationUrl}
					>
						Register
					</Link>
				</Typography>
			</Paper>

		</main>
	);
};

/** Anime page. */
export const LoginPage = memo(LoginPageComponent);
