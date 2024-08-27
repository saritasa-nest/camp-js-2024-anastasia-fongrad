import { FC, memo } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

import styles from './AnimePlayer.module.css';

type PlayerProps = {

	/** Anime trailer youtube id. */
	readonly trailerYoutubeId: string;
};

const AnimePlayerComponent: FC<PlayerProps> = ({ trailerYoutubeId }: PlayerProps) => {
	if (trailerYoutubeId.length === 0) {
		return (
			<Card className={styles['alternative-card']}>
				<CardContent>
					<Typography>
						Sorry, trailer is unavailable
					</Typography>
				</CardContent>
				<SentimentDissatisfiedIcon />
			</Card>
		);
	}

	return (
		<iframe
			src={`https://www.youtube.com/embed/${trailerYoutubeId}`}
			title="Anime player"
			allowFullScreen
			className={styles.player}
		>
		</iframe>
	);
};

/** Anime player component. */
export const AnimePlayer = memo(AnimePlayerComponent);
