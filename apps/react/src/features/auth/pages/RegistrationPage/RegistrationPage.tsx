import { memo, FC, useState, useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { UserRegistration } from '@js-camp/core/models/user-registration.model';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Loader } from '@js-camp/react/components/Loader';
import { registerUser } from '@js-camp/react/store/authorization/dispatchers';
import { useAppSelector, useAppDispatch } from '@js-camp/react/store';
import { selectAuthorizationError, selectAuthorizationLoading } from '@js-camp/react/store/authorization/selectors';

import { RegistrationForm } from '../../components/RegistrationForm';
import { AlertDialog } from '../../../../components/AlertDialog';

import styles from './RegistrationPage.module.css';

const RegistrationPageComponent: FC = () => {
	const isDrawerOpen = useAppSelector(selectIsDrawerOpen);
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const navigate = useNavigate();
	const loginUrl = '/login';
	const dispatch = useAppDispatch();
	const isLoading = useAppSelector(selectAuthorizationLoading);
	const registrationErrors = useAppSelector(selectAuthorizationError);

	const handleAlertClose = useCallback(() => {
		setIsAlertOpen(false);
		navigate(loginUrl);
	}, [navigate]);

	const submitForm: SubmitHandler<UserRegistration> = useCallback(data => {
		dispatch(registerUser(data))
			.then(
				registrationResult => {
					if (registrationResult.type.endsWith('fulfilled')) {
						setIsAlertOpen(true);
					}
				},
			);
	}, [dispatch]);

	return (
		<main className={`${styles.layout} ${isDrawerOpen ? styles.layout_open : ''}`}>
			<AlertDialog
				isAlertOpen={isAlertOpen}
				onAlertClose={handleAlertClose}
				title={'Registration successful'}
				description={'Now you can log in a system'}
			/>
			<Paper
				elevation={3}
				className={styles.layout__card}
			>
				<Typography
					variant="h5"
					component="h5"
				>
					Registration
				</Typography>
				<RegistrationForm
					onSubmit={submitForm}
					serverErrors={registrationErrors ?? []}
				/>
				<Typography component="p">
					Already have an account?
					<Link
						component={NavLink}
						to={loginUrl}
					>
						Login
					</Link>
				</Typography>
			</Paper>
			{ isLoading && <Loader/> }
		</main>
	);
};

/** User registration page. */
export const RegistrationPage = memo(RegistrationPageComponent);
