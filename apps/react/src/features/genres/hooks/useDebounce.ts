import { useEffect, useState } from 'react';

/**
 * Custom hook to debounce a value.
 * @param value Value to debounce.
 * @param delayInSecond Delay of debounce in second.
 * @returns The debounce value.
 */
export function useDebounce<T>(value: T, delayInSecond: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	const delay = delayInSecond * 1000;
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [value, delayInSecond]);
	return debouncedValue;
}
