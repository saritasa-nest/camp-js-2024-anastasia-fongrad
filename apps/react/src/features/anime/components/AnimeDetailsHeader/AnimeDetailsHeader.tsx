import { Avatar, Card, CardHeader } from '@mui/material';
import { FC, memo } from 'react';

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
	<Card>
		<CardHeader
			avatar={<Avatar src={animePosterUrl} />}
			title={titleJapanese}
			subheader={titleEnglish}
		/>
	</Card>
);

/** Anime details header component. */
export const AnimeDetailsHeader = memo(AnimeDetailsHeaderComponent);
