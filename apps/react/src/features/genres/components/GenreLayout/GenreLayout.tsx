import { memo, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { selectGenres, selectAreGenresLoading } from '@js-camp/react/store/genre/selectors';
import { fetchGenres } from '@js-camp/react/store/genre/dispatchers';
import { Box, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, Outlet, useParams } from 'react-router-dom';

import { GenresList } from '../GenreList';

import styles from './GenreLayout.module.css';

const GenreLayoutComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	const dispatch = useAppDispatch();
	const genres = useAppSelector(selectGenres);
	const isLoading = useAppSelector(selectAreGenresLoading);
	const navigate = useNavigate();
	const { genreId } = useParams<{ genreId: string; }>();

	useEffect(() => {
		dispatch(fetchGenres());
	}, [dispatch]);

	if (isLoading) {
		return <div>Loading</div>;
	}

	const handleGenreClick = (id: number) => {
		navigate(`/genre/${id}`);
	};

	return (
		<Box>
			<main className={`${styles.layout} ${open ? styles.layout_open : ''}`}>
				<Box className={styles.layout__sidebar}>
					<GenresList
						genres={genres}
						onGenreClick={handleGenreClick}
					/>
				</Box>
				{genreId ? <Outlet /> : <div className={styles.layout__button}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="add"
					>
						<AddIcon />
					</IconButton>
					<ListItemText primary='Add Genre'/>
				</div>}
			</main>
		</Box>
	);
};

/** Genre layout component. */
export const GenreLayout = memo(GenreLayoutComponent);
