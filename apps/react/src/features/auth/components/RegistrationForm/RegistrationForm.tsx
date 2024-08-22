import { memo, FC, useState, MouseEvent} from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Button, Box } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

import styles from './RegistrationForm.module.css';

const RegistrationFormComponent: FC = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data: FieldValues) => console.log(data);

	const [showPassword, setShowPassword] = useState(false);
	const [showRetypePassword, setShowRetypePassword] = useState(false);

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
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
		>
			<TextField
				margin="normal"
				required
				fullWidth
				id="email"
				label="Email Address"
				autoComplete="email"
				autoFocus
				{...register('email', { required: 'Email is required' })}
				error={!!errors.email}
			/>
			<TextField
				margin="normal"
				id="first_name"
				label="First Name"
				required
				fullWidth
				autoComplete="given-name"
				{...register('first_name', { required: 'First name is required' })}
				error={!!errors.first_name}
			/>
			<TextField
				margin="normal"
				required
				fullWidth
				id="last_name"
				label="Last Name"
				autoComplete="family-name"
				{...register('last_name', { required: 'Last name is required' })}
				error={!!errors.last_name}
			/>
			<FormControl className={styles['form-control']}>
				<InputLabel htmlFor="new_password">Password</InputLabel>
				<OutlinedInput
					id="new_password"
					type={showPassword ? 'text' : 'password'}
					fullWidth
					required
					autoComplete="new-password"
					{...register('new-password', { required: 'Password is required' })}
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
					error={!!errors.new_password}
				/>
			</FormControl>
			<FormControl className={styles['form-control']}>
				<InputLabel htmlFor="retype_password">Re-type Password</InputLabel>
				<OutlinedInput
					id="retype_password"
					type={showRetypePassword ? 'text' : 'password'}
					required
					autoComplete="retype-password"
					{...register('retype-password', { required: 'Re-type password is required' })}
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
					error={!!errors.retype_password}
				/>
			</FormControl>
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
