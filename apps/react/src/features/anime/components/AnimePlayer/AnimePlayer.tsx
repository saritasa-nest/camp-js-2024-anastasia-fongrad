import { FC, memo } from 'react';

import styles from './AnimePlayer.module.css';

type PlayerProps = {

	/** Anime trailer youtube id. */
	readonly trailerYoutubeId: string;
};

const AnimePlayerComponent: FC<PlayerProps> = ({ trailerYoutubeId }: PlayerProps) => (
	<iframe
		src={`https://www.youtube.com/embed/${trailerYoutubeId}`}
		title="Anime player"
		allowFullScreen
		className={styles.player}
	>
	</iframe>
);

/** Anime player component. */
export const AnimePlayer = memo(AnimePlayerComponent);
