import { memo, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { selectGenres, selectAreGenresLoading } from '@js-camp/react/store/genre/selectors';
import { fetchGenres } from '@js-camp/react/store/genre/dispatchers';
import Box from '@mui/material/Box';

import { GenresList } from '../../components/GenreList';
import { GenreDetails } from '../../components/GenreDetails';

import styles from './DisplayPage.module.css';

const listWidth = 500;

type MainPageProps = {

	/** 1. */
	readonly title: string;
};

const ListComponent: FC<MainPageProps> = ({ title }) => {
	const open = useSelector(selectIsDrawerOpen);
	const dispatch = useAppDispatch();
	const genres = useAppSelector(selectGenres);
	const isLoading = useAppSelector(selectAreGenresLoading);

	useEffect(() => {
		dispatch(fetchGenres());
	}, [dispatch]);

	if (isLoading) {
		return <div>Loading</div>;
	}

	const handleGenreClick = (_id: number) => {
		// console.log(id);
	};

	return (
		<Box>
			<main className={`${styles.main} ${open ? styles.mainOpen : ''}`}>
				<Box sx={{ width: listWidth, flexShrink: 0 }}>
					<GenresList
						genres={genres}
						onGenreClick={handleGenreClick}
					/>
				</Box>
				<GenreDetails title={title}/>
			</main>
		</Box>
	);
};

/** 1. */
export const DisplayPage = memo(ListComponent);
