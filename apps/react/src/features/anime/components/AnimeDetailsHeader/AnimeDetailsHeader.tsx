import { Avatar } from '@mui/material';
import { FC, memo } from 'react';

import styles from './AnimeDetailsHeader.module.css';

/** Anime details header props. */
type AnimeDetailsHeaderProps = {

	/** Anime poster url. */
	readonly animePosterUrl: string;

	/** Japanese title. */
	readonly titleJapanese: string;

	/** English title. */
	readonly titleEnglish?: string;
};

const AnimeDetailsHeaderComponent: FC<AnimeDetailsHeaderProps> = ({
	animePosterUrl,
	titleJapanese,
	titleEnglish,
}: AnimeDetailsHeaderProps) => (
	<div className={styles.header}>
		<Avatar src={animePosterUrl} className={styles.header__avatar} />
		<div>
			<p className={styles.header__title}>{titleJapanese}</p>
			{
				titleEnglish != null ? <span className={styles.header__subtitle}>{titleEnglish}</span> : null
			}
		</div>
	</div>
);

/** Anime details header component. */
export const AnimeDetailsHeader = memo(AnimeDetailsHeaderComponent);
