import { memo, FC, useState, useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { AuthService } from '@js-camp/react/api/services/authService';
import { ServerError } from '@js-camp/core/models/server-error.model';
import { ErrorsService } from '@js-camp/react/api/services/handleErrorsService';
import { UserRegistration } from '@js-camp/core/models/user-registration.model';

import { RegistrationForm } from '../../components/RegistrationForm';
import { AlertDialog } from '../../../../components/AlertDialog';

import styles from './RegistrationPage.module.css';

const RegistrationPageComponent: FC = () => {
	const isDrawerOpen = useSelector(selectIsDrawerOpen);
	const [serverErrors, setServerError] = useState<ServerError[]>([]);
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const navigate = useNavigate();
	const loginUrl = '/login';

	const handleClose = useCallback(() => {
		setIsAlertOpen(false);
		navigate(loginUrl);
	}, [navigate]);

	const submitForm: SubmitHandler<UserRegistration> = useCallback(data => {
		AuthService.register(data)
			.then(
				() => setIsAlertOpen(true),
			)
			.catch(
				error => setServerError(ErrorsService.parseError(error)),
			);
	}, []);

	return (
		<main className={`${styles.layout} ${isDrawerOpen ? styles.layout_open : ''}`}>
			<AlertDialog
				open={isAlertOpen}
				onClose={handleClose}
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
					serverErrors={serverErrors}
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
		</main>
	);
};

/** Anime page. */
export const RegistrationPage = memo(RegistrationPageComponent);
