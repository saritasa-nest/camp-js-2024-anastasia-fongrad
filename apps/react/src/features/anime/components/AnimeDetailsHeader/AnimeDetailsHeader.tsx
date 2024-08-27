import { Avatar } from '@mui/material';
import { FC, memo, useState } from 'react';

import { AnimePosterPopup } from '../AnimePosterPopup';

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
}: AnimeDetailsHeaderProps) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handlePopupOpen = () => {
		setIsPopupOpen(true);
	};

	return (
		<div className={styles.header}>
			<Avatar
				src={animePosterUrl}
				className={styles.header__avatar}
				onClick={handlePopupOpen}
			/>
			<div>
				<p className={styles.header__title}>{titleJapanese}</p>
				{
					titleEnglish != null ? <span className={styles.header__subtitle}>{titleEnglish}</span> : null
				}
			</div>
			<AnimePosterPopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} posterUrl={animePosterUrl} />
		</div>
	);
};

/** Anime details header component. */
export const AnimeDetailsHeader = memo(AnimeDetailsHeaderComponent);
