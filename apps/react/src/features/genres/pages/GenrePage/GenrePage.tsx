import { memo, FC, useEffect } from 'react';
import { clsx } from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { selectGenres, selectAreGenresLoading } from '@js-camp/react/store/genre/selectors';
import { fetchGenres } from '@js-camp/react/store/genre/dispatchers';
import { Box, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Outlet, useParams } from 'react-router-dom';

import { GenresList } from '../../components/GenreList';

import styles from './GenrePage.module.css';

const GenrePageComponent: FC = () => {
	const isDrawerOpen = useSelector(selectIsDrawerOpen);
	const dispatch = useAppDispatch();
	const genres = useAppSelector(selectGenres);
	const isLoading = useAppSelector(selectAreGenresLoading);
	const { genreId } = useParams<{ genreId: string; }>();

	useEffect(() => {
		dispatch(fetchGenres());
	}, [dispatch]);

	if (isLoading) {
		return <div>Loading</div>;
	}

	return (
		<main className={clsx(styles.layout, isDrawerOpen && styles.layout_open)}>
			<Box className={styles.layout__sidebar}>
				<GenresList
					genres={genres}
				/>
			</Box>
			{genreId ? <Outlet /> : <div className={styles.layout__empty}>
				<div className={styles.layout__button}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="add"
					>
						<AddIcon />
					</IconButton>
					<ListItemText primary='Add Genre'/>
				</div>
			</div>
			}
		</main>
	);
};

/** Genre layout component. */
export const GenrePage = memo(GenrePageComponent);
