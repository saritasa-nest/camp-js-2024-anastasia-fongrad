import { memo, FC } from 'react';
import { GenreCard } from '../GenreCard';
import { AnimeGenre } from '@js-camp/core/models/genre.model';
import styles from './GenreList.module.css'

type GenresListProps = {
  genres: Array<AnimeGenre>;
};

const GenresListComponent: FC<GenresListProps> = ({ genres }) => {
  return (
		<div className={styles.list}>
			<h1>Genres</h1>
			{genres.map(genre => <GenreCard key={genre.id} genre={genre} />)}
		</div>
	);
};

export const GenresList = memo(GenresListComponent);
