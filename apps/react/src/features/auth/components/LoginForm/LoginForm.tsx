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
import { AuthTokenService } from '@js-camp/react/api/services/localStorageService';
import { useAppDispatch } from '@js-camp/react/store';
import { fetchUserProfile } from '@js-camp/react/store/userProfile/dispatchers';
import { ErrorsService } from '@js-camp/react/api/services/handleErrorsService';
import { ServerError } from '@js-camp/core/models/server-error.model';

import styles from './LoginForm.module.css';

const validationSchema = z.object({
	email: z.string().min(1, { message: 'Invalid email address' }),
	password: z.string().min(1, { message: 'Password is required' }),
});

type LoginFormValues = z.infer<typeof validationSchema>;

const defaultLoginFormValues: LoginFormValues = {
	email: '',
	password: '',
};

/**
 * 1.
 * @param key 1.
 */
function isLoginFormField(key: string): key is keyof LoginFormValues {
	return key in validationSchema.shape;
}

const LoginFormComponent: FC = () => {
	const { handleSubmit, formState: { errors }, control, setError } = useForm({
		defaultValues: defaultLoginFormValues,
		resolver: zodResolver(validationSchema),
	});

	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [serverErrors, setServerError] = useState<ServerError[]>([]);
	const dispatch = useAppDispatch();

	const submitForm: SubmitHandler<LoginFormValues> = data => {
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
	};

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

	const handleClickShowPassword = () => setShowPassword((show: boolean) => !show);

	const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<Box component="form"
			onSubmit={handleSubmit(submitForm)}
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
				sx={{ mt: 3, mb: 2 }}
			>
				Login
			</Button>
		</Box>
	);
};

/** Anime page. */
export const LoginForm = memo(LoginFormComponent);
