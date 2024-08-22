import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Custom form validator to check if control values match.
 * @param matchingControl The control to match against.
 */
export function mustMatch(matchingControl: AbstractControl): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null =>
		control.value !== matchingControl.value ? { mustMatch: true } : null;
}

/**
 * Custom form validator to check if a password is strong enough.
 */
export function passwordStrong(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const hasNumber = /\d/.test(control.value);
		const hasLower = /[a-z]/.test(control.value);
		const hasMinLength = control.value?.length >= 8;
		return hasNumber && hasLower && hasMinLength ? null : { strong: true };
	};
}
