import { Pipe, PipeTransform } from '@angular/core';

/** Pipe for alternative representation of empty value. */
@Pipe({
  name: 'empty',
  standalone: true,
})
export class EmptyPipe implements PipeTransform {
  /**
   * Transforms the specified empty string or nullable value into the specified placeholder.
   * @param value Specified string.
   * @param placeholder Specified placeholder.
   */
  public transform(
    value: string | null | undefined,
    placeholder?: string
  ): string;

  /** @inheritdoc */
  public transform(
    value: number | null | undefined,
    placeholder?: string
  ): number | string;

  /** @inheritdoc */
  public transform(
    value: number | string | null | undefined,
    placeholder = '\u2014'
  ): string | number {
    if (value == null || value === '') {
      return placeholder;
    }

    return value;
  }
}
