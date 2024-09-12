import { Chip, List, ListItem } from '@mui/material';
import { FC, memo } from 'react';
import { AnimeGenresData } from '@js-camp/core/models/anime-genres-data.model';

import styles from './AnimeGenreList.module.css';

type GenreListProps = {

	/** List of genres. */
	readonly genres?: readonly AnimeGenresData[];
};

const AnimeGenreListComponent: FC<GenreListProps> = ({ genres }: GenreListProps) => (
	<List className={styles['genres-list']}>
		{
			genres?.map(genre => (
				<ListItem className={styles.chip} key={genre.id}>
					<Chip label={genre.name} variant='outlined'/>
				</ListItem>
			))
		}
	</List>
);

/** Anime genre list component. */
export const AnimeGenreList = memo(AnimeGenreListComponent);
