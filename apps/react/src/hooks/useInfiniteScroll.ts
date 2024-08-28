import { useEffect, useRef } from 'react';

import { useAppDispatch } from '../store';
import { setPaginationEvent, updateCursor } from '../store/studio/slice';

/** Hook to interact with infinite scroll. */
export function useInfiniteScroll() {
	const dispatch = useAppDispatch();
	const observerRef = useRef<HTMLLIElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				dispatch(updateCursor());
				dispatch(setPaginationEvent(true));
			}
		}, { threshold: 1 });

		if (observerRef.current) {
			observer.observe(observerRef.current);
		}

		return () => {
			if (observerRef.current) {
				observer.unobserve(observerRef.current);
			}
		};
	}, [dispatch]);

	return observerRef;
}
