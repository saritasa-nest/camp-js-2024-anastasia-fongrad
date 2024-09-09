import { memo, FC, useEffect } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ServerError } from '@js-camp/core/models/server-error.model';
import { UserRegistration } from '@js-camp/core/models/user-registration.model';
import { HandleErrorsService } from '@js-camp/react/api/services/handleErrorsService';
import { z } from 'zod';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { PasswordField } from '../PasswordField';

import styles from './RegistrationForm.module.css';

const validationSchema = z.object({
	email: z
		.string()
		.min(1, 'Email is required')
		.email({ message: 'Invalid email address' }),
	firstName: z
		.string()
		.min(1, { message: 'First name is required' }),
	lastName: z
		.string()
		.min(1, { message: 'Last name is required' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters long' })
		.regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
			{ message: 'Password must contain at least one letter and one digit' }),
	passwordConfirm: z
		.string()
		.min(8, { message: 'Please re-type your password' }),
}).refine(data => data.password === data.passwordConfirm, {
	message: 'Passwords do not match',
	path: ['passwordConfirm'],
});

const defaultRegistrationFormValues: UserRegistration = {
	email: '',
	firstName: '',
	lastName: '',
	password: '',
	passwordConfirm: '',
};

type Props = {

	/** Handles user registration on form submit. */
	onSubmit: SubmitHandler<UserRegistration>;

	/** An array of server errors. */
	serverErrors: ServerError[];
};

const RegistrationFormComponent: FC<Props> = ({
	onSubmit,
	serverErrors,
}) => {
	const { handleSubmit, formState: { errors }, control, setError } = useForm({
		defaultValues: defaultRegistrationFormValues,
		resolver: zodResolver(validationSchema),
	});

	useEffect(() => {
		HandleErrorsService.setErrors(serverErrors, setError, defaultRegistrationFormValues);
	}, [serverErrors]);

	return (
		<Box component="form"
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
		>
			<Controller
				name="email"
				control={control}
				render={({ field, fieldState }) => <TextField
					{...field}
					label="Email"
					fullWidth
					error={fieldState.invalid}
					helperText={fieldState.error?.message}
					className={styles.form__control}
				/>}
			/>
			<Controller
				name="firstName"
				control={control}
				render={({ field, fieldState }) => <TextField
					{...field}
					label="First Name"
					fullWidth
					error={fieldState.invalid}
					helperText={fieldState.error?.message}
					className={styles.form__control}
				/>}
			/>
			<Controller
				name="lastName"
				control={control}
				render={({ field, fieldState }) => <TextField
					{...field}
					label="Last Name"
					fullWidth
					error={fieldState.invalid}
					helperText={fieldState.error?.message}
					className={styles.form__control}
				/>}
			/>
			<Controller
				name='password'
				control={control}
				render={({ field, fieldState }) => <PasswordField
					field={field}
					hasError={fieldState.invalid}
					errorMessage={fieldState.error?.message}
					label='Password'
				/>
				}
			/>
			<Controller
				name='passwordConfirm'
				control={control}
				render={({ field, fieldState }) => <PasswordField
					field={field}
					hasError={fieldState.invalid}
					errorMessage={fieldState.error?.message}
					label='Re-type Password'
				/>
				}
			/>
			<Typography
				component="p"
				gutterBottom
				className={styles.form__error}
			>
				{ errors?.root?.message }
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

/** Registration form component. */
export const RegistrationForm = memo(RegistrationFormComponent);
