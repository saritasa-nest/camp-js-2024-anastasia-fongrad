import { memo, FC, useState, useEffect, MouseEvent } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Button, Box } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormHelperText from '@mui/material/FormHelperText';
import { AuthService } from '@js-camp/react/api/services/authService';
import { useNavigate } from 'react-router-dom';
import { ServerError } from '@js-camp/core/models/server-error.model';
import { ErrorsService } from '@js-camp/react/api/services/handleErrorsService';

import { PasswordField } from '../PasswordField';
import { AlertDialog } from '../../../../components/AlertDialog';

import styles from './RegistrationForm.module.css';

const validationSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
	firstName: z.string().min(1, { message: 'First name is required' }),
	lastName: z.string().min(1, { message: 'Last name is required' }),
	password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
	passwordConfirm: z.string().min(6, { message: 'Please re-type your password' }),
}).refine(data => data.password === data.passwordConfirm, {
	message: 'Passwords do not match',
	path: ['passwordConfirm'],
});

type RegistrationFormValues = z.infer<typeof validationSchema>;

const defaultRegistrationFormValues: RegistrationFormValues = {
	email: '',
	firstName: '',
	lastName: '',
	password: '',
	passwordConfirm: '',
};

/**
 * 1.
 * @param key 1.
 */
function isRegistrationFormField(key: string): key is keyof RegistrationFormValues {
	return key === 'email' || key === 'password';
}

// eslint-disable-next-line max-lines-per-function
const RegistrationFormComponent: FC = () => {
	const { handleSubmit, formState: { errors }, control, setError } = useForm({
		defaultValues: defaultRegistrationFormValues,
		resolver: zodResolver(validationSchema),
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showRetypePassword, setShowRetypePassword] = useState(false);
	const [serverErrors, setServerError] = useState<ServerError[]>([]);
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const submitForm: SubmitHandler<RegistrationFormValues> = data => {
		// Disable eslint for unused passwordConfirm
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { passwordConfirm, ...registrationData } = data;
		AuthService.register(registrationData)
			.then(
				() => {
					setOpen(true);
					navigate('/login');
				},
			)
			.catch(
				error => setServerError(ErrorsService.parseError(error)),
			);
	};

	useEffect(() => {
		serverErrors.forEach(error => {
			if (isRegistrationFormField(error.controlName)) {
				setError(error.controlName, {
					type: 'manual',
					message: error.controlErrors[0],
				});
			}
		});
	}, [serverErrors]);

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickShowPassword = () => setShowPassword((show: boolean) => !show);
	const handleClickShowRetypePassword = () => setShowRetypePassword((show: boolean) => !show);

	const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const handleMouseDownRetypePassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<Box component="form"
			onSubmit={handleSubmit(submitForm)}
			className={styles.form}
		>
			<AlertDialog
				open={open}
				onClose={handleClose}
				title={'Registration successful'}
				description={'Now you can log in a system'}
			/>
			<Controller
				name="email"
				control={control}
				render={({ field }) => <TextField
					{...field}
					label="Email"
					InputLabelProps={{ required: true }}
					fullWidth
					error={errors.email != null}
					helperText={errors?.email?.message}
					className={styles.form__control}
				/>}
			/>
			<Controller
				name="firstName"
				control={control}
				render={({ field }) => <TextField
					{...field}
					label="First Name"
					InputLabelProps={{ required: true }}
					fullWidth
					error={errors.firstName != null}
					helperText={errors?.firstName?.message}
					className={styles.form__control}
				/>}
			/>
			<Controller
				name="lastName"
				control={control}
				render={({ field }) => <TextField
					{...field}
					label="Last Name"
					InputLabelProps={{ required: true }}
					fullWidth
					error={errors.lastName != null}
					helperText={errors?.lastName?.message}
					className={styles.form__control}
				/>}
			/>
			<Controller
				name='password'
				control={control}
				render={() => <PasswordField
					showPassword={showPassword}
					handleClickShowPassword={handleClickShowPassword}
					handleMouseDownPassword={handleMouseDownPassword}
					hasError={errors.password != null}
					errorMessage={errors?.password?.message}
					label='Password'
				/>
				}
			/>
			<Controller
				name='passwordConfirm'
				control={control}
				render={() => <PasswordField
					showPassword={showRetypePassword}
					handleClickShowPassword={handleClickShowRetypePassword}
					handleMouseDownPassword={handleMouseDownRetypePassword}
					hasError={errors.passwordConfirm != null}
					errorMessage={errors?.passwordConfirm?.message}
					label='Re-type Password'
				/>
				}
			/>
			<Typography
				component="p"
				gutterBottom
				className={styles.form__error}
			>
				{ serverErrors[0]?.controlName === 'form' && serverErrors[0]?.controlErrors[0]}
			</Typography>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				className={styles.form__button}
			>
				Register
			</Button>
		</Box>
	);
};

/** Anime page. */
export const RegistrationForm = memo(RegistrationFormComponent);
