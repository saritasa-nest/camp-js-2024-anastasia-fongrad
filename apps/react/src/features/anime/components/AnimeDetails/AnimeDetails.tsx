import { memo, FC, useEffect } from 'react';
import { Button, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { fetchAnimeById } from '@js-camp/react/store/anime/dispatchers';
import { selectAnimeDetails } from '@js-camp/react/store/anime/selectors';

import { AnimeDetailsList } from '../AnimeDetailsList';
import { AnimeDetailsHeader } from '../AnimeDetailsHeader/AnimeDetailsHeader';
import { AnimePlayer } from '../AnimePlayer';

import styles from './AnimeDetails.module.css';

const AnimeDetailsComponent: FC = () => {
	const { animeId } = useParams<{ animeId: string; }>();
	const dispatch = useAppDispatch();
	const animeDetails = useAppSelector(selectAnimeDetails);

	useEffect(() => {
		if (animeId != null) {
			dispatch(fetchAnimeById(animeId));
		}
	}, [animeId]);

	return (
		<div>
			<AnimeDetailsHeader
				animePosterUrl={animeDetails?.imageUrl ?? ''}
				titleJapanese={animeDetails?.titleJapanese ?? ''}
				titleEnglish={animeDetails?.titleEnglish}
			/>
			<Divider />
			<AnimeDetailsList anime={animeDetails}/>
			<Divider />
			<AnimePlayer trailerYoutubeId={animeDetails?.trailerYoutubeIdUrl ?? ''} />
			<div className={styles.buttons}>
				<Button variant="outlined" className={styles.button}>Edit</Button>
				<Button variant="outlined" color="error" className={styles.button}>Delete</Button>
			</div>
		</div>
	);
};

/** Anime details component. */
export const AnimeDetails = memo(AnimeDetailsComponent);
