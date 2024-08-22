import { memo } from 'react';
import { TextField, TextFieldProps, TextFieldVariants } from '@mui/material';
import {
	Control,
	FieldPath,
	FieldValues,
	useController,
} from 'react-hook-form';

type FormControlProps<T extends FieldValues = FieldValues> = {

	/** 1. */
	readonly control: Control<T, unknown>;

	/** 1. */
	readonly name: FieldPath<T>;
};

type Props<T extends FieldValues, Variant extends TextFieldVariants> = Omit<
TextFieldProps<Variant>,
'name'
> &
FormControlProps<T>;

/** 1. */
const ControlledTextInputComponent = <
	T extends FieldValues,
	Variant extends TextFieldVariants,
>({
	control,
	name,
	...textFieldProps
}: Props<T, Variant>) => {
	const { field, fieldState: { error } } = useController({ control, name });

	return (
		<TextField
			{...textFieldProps}
			{...field}
			error={error != null}
			helperText={error?.message}
		/>
	);
};

/** Anime page. */
export const ControlledTextInput = memo(ControlledTextInputComponent);
