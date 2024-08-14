import { memo, FC } from 'react';
import { AnimeGenre } from '@js-camp/core/models/genre.model';

import styles from './GenreCard.module.css';

type Props = {

	/** Genre. */
	readonly genre: AnimeGenre;
};

/** Card with genre data. */
const GenreCardComponent: FC<Props> = ({ genre }: Props) => (
	<div className={styles.card}>
		<h2>{genre.name}</h2>
		<span>Id - {genre.id}</span>
	</div>
);

/** Memoized version of GenreCardComponent for performance optimization. */
export const GenreCard = memo(GenreCardComponent);
