import { memo, FC } from 'react';
import { clsx } from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { Box, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, Outlet, useParams } from 'react-router-dom';

import { GenresList } from '../GenreList';

import styles from './GenreLayout.module.css';

const GenreLayoutComponent: FC = () => {
	const isDrawerOpen = useSelector(selectIsDrawerOpen);

	// const isLoading = useAppSelector(selectAreGenresLoading);
	const navigate = useNavigate();
	const { genreId } = useParams<{ genreId: string; }>();
	const handleGenreClick = (id: number) => {
		navigate(`/genre/${id}`);
	};

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
