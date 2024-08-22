import { memo, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import {
	selectCursor, selectHasMoreData, selectIsPaginationEvent, selectStudios,
} from '@js-camp/react/store/studio/selectors';
import { Box, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, Outlet, useParams } from 'react-router-dom';
import { fetchStudios } from '@js-camp/react/store/studio/dispatchers';

import { useQueryParams } from '../../hooks/useQueryParams';

import { StudiosList } from '../StudioList';

import styles from './StudioLayout.module.css';

const StudioLayoutComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	const navigate = useNavigate();
	const { studioId } = useParams<{ studioId: string; }>();
	const dispatch = useAppDispatch();
	const studios = useAppSelector(selectStudios);
	const cursor = useAppSelector(selectCursor) ?? undefined;
	const hasMoreData = useAppSelector(selectHasMoreData);
	const isPaginationEvent = useAppSelector(selectIsPaginationEvent);

	const { queryParams, setQueryParams } = useQueryParams();

	const params = {
		ordering: queryParams.get('ordering') ?? undefined,
		search: queryParams.get('search') ?? undefined,
		cursor: cursor ?? queryParams.get('cursor') ?? undefined,
	};

	useEffect(() => {
		setQueryParams({
			...queryParams,
			ordering: queryParams.get('ordering') ?? undefined,
			search: queryParams.get('search') ?? undefined,
			cursor: cursor ?? queryParams.get('cursor') ?? undefined,
		});
	}, [cursor, queryParams]);

	useEffect(() => {
		if (!isPaginationEvent || isPaginationEvent && hasMoreData) {
			dispatch(fetchStudios(params));
		}
	}, [dispatch, queryParams]);

	const handleStudioClick = (id: number) => {
		navigate(`/studio/${id}`);
	};

	return (
		<main className={`${styles.layout} ${open ? styles.layout_open : ''}`}>
			<Box className={styles.layout__sidebar}>
				<StudiosList studios={studios} onStudioClick={handleStudioClick} />
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
