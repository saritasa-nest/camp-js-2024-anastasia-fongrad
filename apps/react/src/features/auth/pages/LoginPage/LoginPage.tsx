import { memo, FC, useState, useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { AuthService } from '@js-camp/react/api/services/authService';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { AuthTokenService } from '@js-camp/react/api/services/authTokenService';
import { fetchUserProfile } from '@js-camp/react/store/userProfile/dispatchers';
import { useAppDispatch } from '@js-camp/react/store';
import { ServerError } from '@js-camp/core/models/server-error.model';
import { UserLogin } from '@js-camp/core/models/user-login.model';
import { ErrorsService } from '@js-camp/react/api/services/handleErrorsService';

import { LoginForm } from '../../components/LoginForm';

import styles from './LoginPage.module.css';

const LoginPageComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	const [serverErrors, setServerError] = useState<ServerError[]>([]);
	const registrationUrl = '/registration';
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const submitForm: SubmitHandler<UserLogin> = useCallback(data => {
		AuthService.login(data)
			.then(
				token => {
					AuthTokenService.saveAuthToken(token);
					dispatch(fetchUserProfile());
					navigate('/anime');
				},
			)
			.catch(
				error => setServerError(ErrorsService.parseError(error)),
			);
	}, [dispatch]);

	return (
		<main className={`${styles.layout} ${open ? styles.layout_open : ''}`}>
			<Paper
				elevation={3}
				className={styles.layout__card}
			>
				<Typography
					variant="h5"
					component="h5"
				>
					Login
				</Typography>
				<LoginForm
					onSubmit={submitForm}
					serverErrors={serverErrors}
				/>
				<Typography component="p">
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
