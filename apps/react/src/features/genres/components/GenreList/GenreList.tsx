import { memo, FC } from 'react';
import { AnimeGenre } from '@js-camp/core/models/genre.model';

import { GenreCard } from '../GenreCard';

import styles from './GenreList.module.css';

type GenresListProps = {

	/** 1. */
	genres: Array<AnimeGenre>;
};

const GenresListComponent: FC<GenresListProps> = ({ genres }) => <div className={styles.list}>
	<h1>Genres</h1>
	{genres.map(genre => <GenreCard key={genre.id} genre={genre} />)}
</div>;

/** 1. */
export const GenresList = memo(GenresListComponent);
