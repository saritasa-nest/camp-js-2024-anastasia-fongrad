import { memo, FC } from 'react';
import { List, ListItem, Typography, Button, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import { AnimeStudio } from '@js-camp/core/models/studio.model';
import { useInfiniteScroll } from '@js-camp/react/hooks/useInfiniteScroll';

import { StudioListItem } from '../StudioListItem';
import { StudioSortSelect } from '../StudioSortSelect';
import { StudioSearch } from '../StudioSearch';

import styles from './StudioList.module.css';

type StudiosListProps = {

	/** Anime studio list. */
	readonly studios: readonly AnimeStudio[];
};

const StudiosListComponent: FC<StudiosListProps> = ({ studios }) => {
	const { studioId } = useParams<{ studioId: string; }>();
	const observerRef = useInfiniteScroll();

	return (
		<div className={styles['genre-list']}>
			<Paper component="form" className={styles.filters} elevation={0}>
				<Typography variant="h5" component="h5" gutterBottom>
					Filters
				</Typography>
				<StudioSortSelect />
				<StudioSearch />
			</Paper>
			<Button variant='text' startIcon={<AddIcon />}>
				Add Studio
			</Button>
			<List className={styles['genre-list__items']}>
				{studios.map(studio => (
					<StudioListItem
						key={studio.id}
						studio={studio}
						selected={studio.id === Number(studioId)}
					/>
				))}
				<ListItem ref={observerRef} />
			</List>
		</div>
	);
};

/** Studio list component. */
export const StudiosList = memo(StudiosListComponent);
