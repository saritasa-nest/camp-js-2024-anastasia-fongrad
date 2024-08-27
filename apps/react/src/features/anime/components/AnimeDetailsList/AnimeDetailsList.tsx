import { FC, memo } from 'react';

import { AnimeDetails } from '@js-camp/core/models/anime-details.model';
import { List, ListItem, ListItemText } from '@mui/material';

import { AnimeGenreList } from '../AnimeGenreList';

import { AnimeStudioList } from '../AnimeStudioList';

import styles from './AnimeDetailsList.module.css';

type AnimeDetailsListProps = {

	/** Anime. */
	readonly anime: AnimeDetails | null;
};

const AnimeDetailsListComponent: FC<AnimeDetailsListProps> = ({ anime }: AnimeDetailsListProps) => (
	<List className={styles.details}>
		<ListItem>
			<ListItemText primary={`Type: ${anime?.type ?? '—'}`} />
		</ListItem>
		<ListItem>
			<ListItemText primary={`Status: ${anime?.status ?? '—'}`} />
		</ListItem>
		<ListItem>
			<ListItemText primary={`Rating: ${anime?.rating ?? '—'}`} />
		</ListItem>
		<ListItem>
			<ListItemText primary={`Source: ${anime?.source ?? '—'}`} />
		</ListItem>
		<ListItem>
			<ListItemText primary={`Season: ${anime?.season ?? '—'}`} />
		</ListItem>
		<ListItem>
			<ListItemText primary={`Synopsis: ${anime?.synopsis.length ? anime.synopsis : '—'}`} />
		</ListItem>
		<ListItem>
			<ListItemText primary={`Airing: ${anime?.airing ?? '—'}`} />
		</ListItem>
		<ListItem>
			<ListItemText primary={`Aired start: ${anime?.aired.start ?? '—'}`} />
		</ListItem>
		<ListItem>
			<ListItemText primary={`Aired end: ${anime?.aired.end ?? '—'}`} />
		</ListItem>
		<ListItem>
			<ListItemText primary={`${anime?.studiosData.length ? 'Studios: ' : 'Studios: —'}`} />
			<AnimeStudioList studios={anime?.studiosData} />
		</ListItem>
		<ListItem>
			<ListItemText primary='Genres:' />
			<AnimeGenreList genres={anime?.genresData}/>
		</ListItem>
	</List>
);

/** Anime details list component. */
export const AnimeDetailsList = memo(AnimeDetailsListComponent);
