import { memo, FC, useEffect } from 'react';
import { clsx } from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { selectGenres, selectAreGenresLoading } from '@js-camp/react/store/genre/selectors';
import { fetchGenres } from '@js-camp/react/store/genre/dispatchers';
import { Box, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, Outlet, useParams, useSearchParams } from 'react-router-dom';

import { GenresList } from '../GenreList';

import styles from './GenreLayout.module.css';

const GenreLayoutComponent: FC = () => {
	const isDrawerOpen = useSelector(selectIsDrawerOpen);

	// const dispatch = useAppDispatch();
	const genres = useAppSelector(selectGenres);

	// const isLoading = useAppSelector(selectAreGenresLoading);
	const navigate = useNavigate();
	const { genreId } = useParams<{ genreId: string; }>();
	const handleGenreClick = (id: number) => {
		navigate(`/genre/${id}`);
	};

	// useEffect(() => {
	// 	dispatch(fetchGenres());
	// }, [dispatch]);

	// if (isLoading) {
	// 	return <div>Loading</div>;
	// }

	return (
		<main className={clsx(styles.layout, isDrawerOpen && styles.layout_open)}>
			<Box className={styles.layout__sidebar}>
				<GenresList onGenreClick={handleGenreClick} />
			</Box>
			{genreId ? (
				<Outlet />
			) : (
				<div className={styles.layout__empty}>
					<div className={styles.layout__button}>
						<IconButton edge="start" color="inherit" aria-label="add">
							<AddIcon />
						</IconButton>
						<ListItemText primary="Add Genre" />
					</div>
				</div>
			)}
		</main>
	);
};

/** Genre layout component. */
export const GenreLayout = memo(GenreLayoutComponent);
