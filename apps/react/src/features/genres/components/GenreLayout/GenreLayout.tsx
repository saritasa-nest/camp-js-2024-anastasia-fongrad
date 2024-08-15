import { memo, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { selectGenres, selectAreGenresLoading } from '@js-camp/react/store/genre/selectors';
import { fetchGenres } from '@js-camp/react/store/genre/dispatchers';
import Box from '@mui/material/Box';
import { useNavigate, Outlet, useParams } from 'react-router-dom';

import { GenresList } from '../GenreList';

import styles from './GenreLayout.module.css';

type MainPageProps = {

	/** 1. */
	readonly title: string;
};

const ListComponent: FC<MainPageProps> = ({ title }) => {
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
			<main className={`${styles.main} ${open ? styles.mainOpen : ''}`}>
				<Box className={`${styles.sidebar} ${!genreId ? styles.fullWidth : ''}`}>
					<GenresList
						genres={genres}
						onGenreClick={handleGenreClick}
						title={title}
					/>
				</Box>
				{genreId && <Outlet />}
			</main>
		</Box>
	);
};

/** 1. */
export const GenreLayout = memo(ListComponent);
