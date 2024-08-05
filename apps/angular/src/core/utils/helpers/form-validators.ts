import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * 1.
 * @param controlName 1.
 * @param matchingControlName 1.
 * @returns 1.
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
 * 1.
 * @param controlName 1.
 * @returns 1.
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
