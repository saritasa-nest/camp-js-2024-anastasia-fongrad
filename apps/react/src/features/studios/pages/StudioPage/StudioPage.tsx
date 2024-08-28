import { memo, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import {
	selectCursor, selectHasMoreData, selectIsPaginationEvent, selectOrdering, selectSearchValue, selectStudios,
} from '@js-camp/react/store/studio/selectors';
import { StudioQueryParameters } from '@js-camp/core/models/studio-query-parameters.model';
import { fetchStudios } from '@js-camp/react/store/studio/dispatchers';

import { composeQueryParams } from '../../utils/composeQueryParams';

import { StudiosList } from '../../components/StudioList';
import { AddStudioButton } from '../../components/AddStudioButton';

import styles from './StudioPage.module.css';

const StudioPageComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	const { studioId } = useParams<{ studioId: string; }>();
	const dispatch = useAppDispatch();
	const studios = useAppSelector(selectStudios);
	const cursor = useAppSelector(selectCursor) ?? undefined;
	const hasMoreData = useAppSelector(selectHasMoreData);
	const isPagination = useAppSelector(selectIsPaginationEvent);
	const searchValue = useAppSelector(selectSearchValue);
	const ordering = useAppSelector(selectOrdering);

	const [searchParams, setSearchParams] = useSearchParams();

	const params: StudioQueryParameters = Object.fromEntries(searchParams);

	useEffect(() => {
		setSearchParams(composeQueryParams({
			...searchParams,
			ordering: ordering ?? searchParams.get('ordering') ?? undefined,
			search: searchValue ?? searchParams.get('search') ?? undefined,
			cursor: cursor ?? searchParams.get('cursor') ?? undefined,
		}));
	}, [cursor, searchValue, ordering]);

	useEffect(() => {
		if (!isPagination || hasMoreData) {
			dispatch(fetchStudios(params));
		}
	}, [dispatch, searchParams]);

	return (
		<main className={clsx(
			styles.layout,
			open && styles.layout_open,
		)}>
			<div className={styles.layout__sidebar}>
				<StudiosList studios={studios} />
			</div>
			{studioId ? <Outlet /> : <AddStudioButton />}
		</main>
	);
};

/** Studio page component. */
export const StudioPage = memo(StudioPageComponent);
