import { memo, FC, useEffect } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { ServerError } from '@js-camp/core/models/server-error.model';
import { z } from 'zod';

import { PasswordField } from '../PasswordField';

import styles from './LoginForm.module.css';

const validationSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Email is required' }),
	password: z
		.string()
		.min(1, { message: 'Password is required' }),
});

type LoginFormValues = z.infer<typeof validationSchema>;

const defaultLoginFormValues: LoginFormValues = {
	email: '',
	password: '',
};

/**
 * A type guard for login form keys.
 * @param key A key value to check.
 */
function isLoginFormField(key: string): key is keyof LoginFormValues {
	return key in validationSchema.shape;
}

type Props = {

	/** Handles user login on form submit. */
	onSubmit: SubmitHandler<LoginFormValues>;

	/** An array of error received from the server. */
	serverErrors: ServerError[];
};

const LoginFormComponent: FC<Props> = ({
	onSubmit,
	serverErrors,
}) => {
	const { handleSubmit, formState: { errors }, control, setError } = useForm({
		defaultValues: defaultLoginFormValues,
		resolver: zodResolver(validationSchema),
	});

	useEffect(() => {
		serverErrors.forEach(error => {
			if (isLoginFormField(error.controlName)) {
				setError(error.controlName, {
					type: 'manual',
					message: error.controlErrors[0],
				});
			}
		});
	}, [serverErrors]);

	return (
		<Box component="form"
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
		>
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
				name='password'
				control={control}
				render={({ field }) => <PasswordField
					field={field}
					hasError={errors.password != null}
					errorMessage={errors?.password?.message}
					label='Password'
				/>}
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
				Login
			</Button>
		</Box>
	);
};

/** Login form component. */
export const LoginForm = memo(LoginFormComponent);
