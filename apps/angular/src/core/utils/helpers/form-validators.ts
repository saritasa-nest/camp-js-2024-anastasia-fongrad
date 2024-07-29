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
