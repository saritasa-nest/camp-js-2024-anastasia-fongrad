import { memo, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import {
	selectCursor, selectHasMoreData, selectSearchValue, selectSortDirection, selectSorting, selectStudios,
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
	const sorting = useAppSelector(selectSorting) ?? undefined;
	const sortDirection = useAppSelector(selectSortDirection);
	const searchValue = useAppSelector(selectSearchValue) ?? undefined;
	const studios = useAppSelector(selectStudios);
	const cursor = useAppSelector(selectCursor) ?? undefined;
	const hasMoreData = useAppSelector(selectHasMoreData);

	const { queryParams, setQueryParams } = useQueryParams();

	const params = {
		ordering: queryParams.get('ordering') ?? undefined,
		search: searchValue ?? queryParams.get('search') ?? undefined,
		cursor: cursor ?? queryParams.get('cursor') ?? undefined,
	};

	useEffect(() => {
		if (hasMoreData) {
			dispatch(fetchStudios(params));
			setQueryParams({
				...queryParams,
				...JSON.parse(JSON.stringify(params)),
			});
		}
	}, [dispatch, sorting, sortDirection, searchValue, cursor]);

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
