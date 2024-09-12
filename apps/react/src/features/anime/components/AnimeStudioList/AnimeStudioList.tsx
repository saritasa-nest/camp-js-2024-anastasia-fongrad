import { AnimeStudiosData } from '@js-camp/core/models/anime-studios-data.model';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

import { FC, memo } from 'react';

import styles from './AnimeStudioList.module.css';

type StudioListProps = {

	/** List of studios. */
	readonly studios?: readonly AnimeStudiosData[];
};

const AnimeStudioListComponent: FC<StudioListProps> = ({ studios }: StudioListProps) => (
	<List className={styles['studios-list']}>
		{
			studios?.map(studio => (
				<ListItem className={styles.chip} key={studio.id}>
					<ListItemAvatar>
						<Avatar src={studio.image} />
					</ListItemAvatar>
					<ListItemText primary={studio.name} />
				</ListItem>
			))
		}
	</List>
);

/** Anime studio list component. */
export const AnimeStudioList = memo(AnimeStudioListComponent);
