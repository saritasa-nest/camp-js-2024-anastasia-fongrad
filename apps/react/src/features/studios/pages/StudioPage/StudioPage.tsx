import { memo, FC, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { Outlet, useParams } from 'react-router-dom';
import {
	selectCursor, selectHasMoreData, selectIsPaginationEvent, selectStudios,
} from '@js-camp/react/store/studio/selectors';
import { StudioQueryParameters } from '@js-camp/core/models/studio-query-parameters.model';
import { fetchStudios } from '@js-camp/react/store/studio/dispatchers';
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useQueryParams } from '../../hooks/useQueryParams';

import { StudiosList } from '../../components/StudioList';

import styles from './StudioPage.module.css';

const StudioPageComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	const { studioId } = useParams<{ studioId: string; }>();
	const dispatch = useAppDispatch();
	const studios = useAppSelector(selectStudios);
	const cursor = useAppSelector(selectCursor) ?? undefined;
	const hasMoreData = useAppSelector(selectHasMoreData);
	const isPagination = useAppSelector(selectIsPaginationEvent);

	const { queryParams, setQueryParams } = useQueryParams();

	const params: StudioQueryParameters = Object.fromEntries(queryParams);

	useEffect(() => {
		setQueryParams({
			...queryParams,
			ordering: queryParams.get('ordering') ?? undefined,
			search: queryParams.get('search') ?? undefined,
			cursor: cursor ?? queryParams.get('cursor') ?? undefined,
		});
	}, [cursor]);

	useEffect(() => {
		if (!isPagination || hasMoreData) {
			dispatch(fetchStudios(params));
		}
	}, [dispatch, queryParams]);

	return (
		<main className={clsx(
			styles.layout,
			open && styles.layout_open,
		)}>
			<div className={styles.layout__sidebar}>
				<StudiosList studios={studios} />
			</div>
			{studioId ? (
				<Outlet />
			) : (
				<div className={styles.layout__empty}>
					<div className={styles.layout__button}>
						<IconButton edge="start" color="inherit" aria-label="add">
							<AddIcon />
						</IconButton>
						<Typography>Add Studio</Typography>
					</div>
				</div>
			)}
		</main>
	);
};

/** Studio page component. */
export const StudioPage = memo(StudioPageComponent);
