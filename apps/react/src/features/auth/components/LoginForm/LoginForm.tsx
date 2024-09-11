import { memo, FC, useMemo } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ServerError } from '@js-camp/core/models/server-error.model';
import { HandleErrorsService } from '@js-camp/react/api/services/handleErrorsService';
import { z } from 'zod';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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
	const memoizedErrors = useMemo(
		() => HandleErrorsService.mapServerErrorsToFieldErrors(serverErrors),
		[serverErrors],
	);

	const { handleSubmit, formState: { errors }, control } = useForm({
		defaultValues: defaultLoginFormValues,
		resolver: zodResolver(validationSchema),
		mode: 'onChange',
		errors: memoizedErrors,
	});

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
				name='password'
				control={control}
				render={({ field, fieldState }) => <PasswordField
					field={field}
					hasError={fieldState.invalid}
					errorMessage={fieldState.error?.message}
					label='Password'
				/>}
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
				Login
			</Button>
		</Box>
	);
};

/** Login form component. */
export const LoginForm = memo(LoginFormComponent);
