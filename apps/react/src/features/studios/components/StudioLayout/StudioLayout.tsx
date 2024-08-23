import { memo, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import {
	selectCursor, selectHasMoreData, selectIsPaginationEvent, selectStudios,
} from '@js-camp/react/store/studio/selectors';
import { Box, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Outlet, useParams } from 'react-router-dom';
import { fetchStudios } from '@js-camp/react/store/studio/dispatchers';
import { StudioQueryParameters } from '@js-camp/core/models/studio-query-parameters.model';
import clsx from 'clsx';

import { useQueryParams } from '../../hooks/useQueryParams';

import { StudiosList } from '../StudioList';

import styles from './StudioLayout.module.css';

const StudioLayoutComponent: FC = () => {
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
			<Box className={styles.layout__sidebar}>
				<StudiosList studios={studios} />
			</Box>
			{studioId ? (
				<Outlet />
			) : (
				<div className={styles.layout__empty}>
					<div className={styles.layout__button}>
						<IconButton edge="start" color="inherit" aria-label="add">
							<AddIcon />
						</IconButton>
						<ListItemText primary="Add Studio" />
					</div>
				</div>
			)}
		</main>
	);
};

/** Studio layout component. */
export const StudioLayout = memo(StudioLayoutComponent);
