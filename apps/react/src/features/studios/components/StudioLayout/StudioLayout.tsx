import { memo, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import {
	selectAreStudiosLoading, selectCursor, selectHasMoreData, selectSearchValue, selectSortDirection, selectSorting,
	selectStudios,
} from '@js-camp/react/store/studio/selectors';
import { Box, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, Outlet, useParams, createSearchParams } from 'react-router-dom';
import { fetchStudios } from '@js-camp/react/store/studio/dispatchers';

import { StudiosList } from '../StudioList';

import styles from './StudioLayout.module.css';

const StudioLayoutComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	const isLoading = useAppSelector(selectAreStudiosLoading);
	const navigate = useNavigate();
	const { studioId } = useParams<{ studioId: string; }>();
	const dispatch = useAppDispatch();
	const sorting = useAppSelector(selectSorting) ?? undefined;
	const sortDirection = useAppSelector(selectSortDirection);
	const searchValue = useAppSelector(selectSearchValue) ?? undefined;
	const studios = useAppSelector(selectStudios);
	const cursor = useAppSelector(selectCursor) ?? undefined;
	const hasMoreData = useAppSelector(selectHasMoreData);

	const params = {
		ordering: sortDirection === 'asc' ? sorting : `-${sorting}`,
		search: searchValue,
		cursor,
	};

	useEffect(() => {
		if (hasMoreData) {
			dispatch(fetchStudios(params));
			navigate({
				pathname: '/studio/',
				search: createSearchParams(JSON.parse(JSON.stringify(params))).toString(),
			});
		}
	}, [dispatch, sorting, sortDirection, searchValue, cursor]);

	if (isLoading) {
		return <div>Loading</div>;
	}

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
