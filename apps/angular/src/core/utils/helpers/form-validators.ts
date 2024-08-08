import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Custom form validator to check if control values match.
 * @param controlName The name of the main control.
 * @param matchingControlName The name of the matching control.
 */
export function mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
	return (formGroup: AbstractControl): ValidationErrors | null => {
		const control = formGroup.get(controlName);
		const matchingControl = formGroup.get(matchingControlName);
		if (matchingControl?.errors && !matchingControl?.errors['mustMatch']) {
			return null;
		}
		if (control?.value !== matchingControl?.value) {
			matchingControl?.setErrors({ mustMatch: true });
			return { mustMatch: true };
		}
		matchingControl?.setErrors(null);
		return null;
	};
}

/**
 * Custom form validator to check if a password is strong enough.
 * @param controlName The name of the control to validate.
 */
export function passwordStrong(controlName: string): ValidatorFn {
	return (formGroup: AbstractControl): ValidationErrors | null => {
		const control = formGroup.get(controlName);
		if (!control) {
			return null;
		}
		const hasNumber = /\d/.test(control?.value);
		const hasLower = /[a-z]/.test(control?.value);
		const hasMinLength = control?.value?.length >= 8;
		const valid = hasNumber && hasLower && hasMinLength;
		if (!valid) {
			control?.setErrors({ strong: true });
			return { strong: true };
		}
		control?.setErrors(null);
		return null;
	};
}
