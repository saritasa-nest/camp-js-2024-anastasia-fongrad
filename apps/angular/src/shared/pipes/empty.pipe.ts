import { Pipe, PipeTransform } from '@angular/core';

/** Pipe for alternative representation of empty value. */
@Pipe({
	name: 'empty',
	standalone: true,
})
export class EmptyPipe implements PipeTransform {
	/**
	 * Transforms the specified empty string or nullable value into the specified placeholder.
	 * @param value Specified string or number.
	 * @param placeholder Specified placeholder.
	 * @returns Transformed value.
	 */
	public transform(
		value: number | string | null | undefined,
		placeholder?: string,
	): string | number {
		if (value == null || value === '') {
			return placeholder ?? '\u2014';
		}
		return value;
	}
}
