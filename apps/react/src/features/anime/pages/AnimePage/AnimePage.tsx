import { memo, FC } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { Box, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, Outlet, useParams } from 'react-router-dom';

import { AnimeList } from '../../components/AnimeList';

import styles from './AnimePage.module.css';

const AnimePageComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	const navigate = useNavigate();
	const { animeId } = useParams<{ animeId: string; }>();

	const handleGenreClick = (id: number) => {
		navigate(`/anime/${id}`);
	};

	return (
		<main className={`${styles.layout} ${open ? styles.layout_open : ''}`}>
			<Box className={styles.layout__sidebar}>
				<AnimeList
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
export const AnimePage = memo(AnimePageComponent);
