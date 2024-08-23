import { memo, FC, MouseEvent } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormHelperText from '@mui/material/FormHelperText';

type Props = {

	/** Select an element on click. */
	readonly showPassword: boolean;

	/** 1. */
	readonly handleClickShowPassword: () => void;

	/** 1. */
	readonly handleMouseDownPassword: (event: MouseEvent<HTMLButtonElement>) => void;

	/** 1. */
	readonly hasError: boolean;

	/** 1. */
	readonly errorMessage?: string;

	/** 1. */
	readonly label: string;
};

const PasswordFieldComponent: FC<Props> = ({
	showPassword,
	handleClickShowPassword,
	handleMouseDownPassword,
	hasError,
	errorMessage,
	label,
}: Props) => (
	<FormControl
		error={hasError}
	>
		<InputLabel htmlFor="retype_password">Re-type Password</InputLabel>
		<OutlinedInput
			type={showPassword ? 'text' : 'password'}
			autoComplete="password"
			endAdornment={
				<InputAdornment position="end">
					<IconButton
						onClick={handleClickShowPassword}
						onMouseDown={handleMouseDownPassword}
						edge="end"
					>
						{showPassword ? <VisibilityOff /> : <Visibility />}
					</IconButton>
				</InputAdornment>
			}
			label={label}
		/>
		{errorMessage && (
			<FormHelperText>{errorMessage}</FormHelperText>
		)}
	</FormControl>
);

/** Genre list item component. */
export const PasswordField = memo(PasswordFieldComponent);
