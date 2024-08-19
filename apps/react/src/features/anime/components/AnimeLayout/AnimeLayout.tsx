import { memo, FC } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { useAppSelector } from '@js-camp/react/store';
import { selectAnime, selectAreAnimeLoading } from '@js-camp/react/store/anime/selectors';
import { Box, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, Outlet, useParams } from 'react-router-dom';
import { Loader } from '@js-camp/react/components/Loader';

import { AnimeList } from '../AnimeList';

import styles from './AnimeLayout.module.css';

const AnimeLayoutComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	const anime = useAppSelector(selectAnime);
	const isLoading = useAppSelector(selectAreAnimeLoading);
	const navigate = useNavigate();
	const { animeId } = useParams<{ animeId: string; }>();

	if (isLoading) {
		return <Loader />;
	}

	const handleGenreClick = (id: number) => {
		navigate(`/anime/${id}`);
	};

	return (
		<main className={`${styles.layout} ${open ? styles.layout_open : ''}`}>
			<Box className={styles.layout__sidebar}>
				<AnimeList
					anime={anime}
					onGenreClick={handleGenreClick}
				/>
			</Box>
			{animeId ? <Outlet /> : <div className={styles.layout__empty}>
				<div className={styles.layout__button}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="add"
					>
						<AddIcon />
					</IconButton>
					<ListItemText primary='Add Anime'/>
				</div>
			</div>
			}
		</main>
	);
};

/** Genre layout component. */
export const AnimeLayout = memo(AnimeLayoutComponent);
