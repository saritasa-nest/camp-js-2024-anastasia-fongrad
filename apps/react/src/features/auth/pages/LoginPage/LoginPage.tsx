import { memo, FC, useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { fetchUserProfile } from '@js-camp/react/store/userProfile/dispatchers';
import { UserLogin } from '@js-camp/core/models/user-login.model';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { loginUser } from '@js-camp/react/store/authorization/dispatchers';
import { Loader } from '@js-camp/react/components/Loader';
import { useAppSelector, useAppDispatch } from '@js-camp/react/store';
import { selectAuthorizationError, selectAuthorizationLoading } from '@js-camp/react/store/authorization/selectors';

import { LoginForm } from '../../components/LoginForm';

import styles from './LoginPage.module.css';

const LoginPageComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	const registrationUrl = '/registration';
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const isLoading = useAppSelector(selectAuthorizationLoading);
	const loginErrors = useAppSelector(selectAuthorizationError);

	const submitForm: SubmitHandler<UserLogin> = useCallback(data => {
		dispatch(loginUser(data))
			.then(
				loginResult => {
					if (loginResult.type.endsWith('fulfilled')) {
						dispatch(fetchUserProfile());
						navigate('/anime');
					}
				},
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
					serverErrors={loginErrors ?? []}
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
			{ isLoading && <Loader/> }
		</main>
	);
};

/** User login page. */
export const LoginPage = memo(LoginPageComponent);
