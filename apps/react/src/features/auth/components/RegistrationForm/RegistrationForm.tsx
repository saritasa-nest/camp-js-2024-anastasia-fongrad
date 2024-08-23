import { memo, FC, useState, MouseEvent } from 'react';
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
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormHelperText from '@mui/material/FormHelperText';
import { AuthService } from '@js-camp/react/api/services/authService';
import { useNavigate } from 'react-router-dom';

import { AlertDialog } from '../RegistrarionConfirm';

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

// eslint-disable-next-line max-lines-per-function
const RegistrationFormComponent: FC = () => {
	const { handleSubmit, formState: { errors }, control } = useForm({
		defaultValues: defaultRegistrationFormValues,
		resolver: zodResolver(validationSchema),
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showRetypePassword, setShowRetypePassword] = useState(false);
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const submitForm: SubmitHandler<RegistrationFormValues> = data => {
		const { passwordConfirm, ...registrationData } = data;
		AuthService.register(registrationData).then(
			_token => {
				setOpen(true);
				navigate('/login');
			},
		);
	};

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
					className={styles['form-control']}
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
					className={styles['form-control']}
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
					className={styles['form-control']}
				/>}
			/>
			<Controller
				name='password'
				control={control}
				render={({ field }) => <FormControl
					className={styles['form-control']}
					error={errors.password != null}
				>
					<InputLabel htmlFor="new_password">Password</InputLabel>
					<OutlinedInput
						{...field}
						type={showPassword ? 'text' : 'password'}
						fullWidth
						autoComplete="new-password"
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label="Password"
					/>
					{errors.password && (
						<FormHelperText>{errors.password.message}</FormHelperText>
					)}
				</FormControl>
				}
			/>
			<Controller
				name='passwordConfirm'
				control={control}
				render={({ field }) => <FormControl
					className={styles['form-control']}
					error={errors.passwordConfirm != null}
				>
					<InputLabel htmlFor="retype_password">Re-type Password</InputLabel>
					<OutlinedInput
						{...field}
						type={showRetypePassword ? 'text' : 'password'}
						autoComplete="retype-password"
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle re-type password visibility"
									onClick={handleClickShowRetypePassword}
									onMouseDown={handleMouseDownRetypePassword}
									edge="end"
								>
									{showRetypePassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label="Re-type Password"
					/>
					{errors.passwordConfirm && (
						<FormHelperText>{errors.passwordConfirm.message}</FormHelperText>
					)}
				</FormControl>
				}
			/>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				sx={{ mt: 3, mb: 2 }}
			>
				Register
			</Button>
		</Box>
	);
};

/** Anime page. */
export const RegistrationForm = memo(RegistrationFormComponent);
