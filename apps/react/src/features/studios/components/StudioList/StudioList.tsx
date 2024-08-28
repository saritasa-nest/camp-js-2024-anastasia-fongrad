import { memo, FC, useEffect, useRef } from 'react';
import { List, ListItem, Typography, Button, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '@js-camp/react/store';
import { AnimeStudio } from '@js-camp/core/models/studio.model';
import { setPaginationEvent, updateCursor } from '@js-camp/react/store/studio/slice';

import { StudioListItem } from '../StudioListItem';
import { StudioSortSelect } from '../StudioSortSelect';
import { StudioSearch } from '../StudioSearch';

import styles from './StudioList.module.css';

type StudiosListProps = {

	/** Anime studio list. */
	readonly studios: AnimeStudio[];
};

const StudiosListComponent: FC<StudiosListProps> = ({ studios }: StudiosListProps) => {
	const { studioId } = useParams<{ studioId: string; }>();
	const observerRef = useRef(null);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				dispatch(updateCursor());
				dispatch(setPaginationEvent(true));
			}
		}, { threshold: 1 });

		if (observerRef.current) {
			observer.observe(observerRef.current);
		}

		return () => {
			if (observerRef.current) {
				observer.unobserve(observerRef.current);
			}
		};
	}, [dispatch]);

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
