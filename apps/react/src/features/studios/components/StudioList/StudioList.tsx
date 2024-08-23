import { memo, FC, useState, useEffect, useRef } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, IconButton, Typography } from '@mui/material';
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

	/** Handles displaying studio details on click. */
	onStudioClick: (id: number) => void;
};

const StudiosListComponent: FC<StudiosListProps> = ({ studios, onStudioClick }: StudiosListProps) => {
	const { studioId } = useParams<{ studioId: string; }>();
	const [selectedStudioId, setSelectedStudioId] = useState<number | undefined>(studioId ?
		Number(studioId) :
		undefined);
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

	const handleStudioClick = (id: number) => {
		setSelectedStudioId(id);
		onStudioClick(id);
	};

	return (
		<Box className={styles['genre-list']}>
			<Box className={styles.filters}>
				<Typography variant="h5" component="h5" gutterBottom>
					Filters
				</Typography>
				<StudioSortSelect />
				<StudioSearch />
			</Box>
			<List className={styles['genre-list__items']}>
				<ListItem disablePadding>
					<ListItemButton>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="add"
						>
							<AddIcon />
						</IconButton>
						<ListItemText primary='Add studio'/>
					</ListItemButton>
				</ListItem>
				{studios.map(studio => (
					<StudioListItem
						key={studio.id}
						studio={studio}
						onClick={() => handleStudioClick(studio.id)}
						selected={studio.id === selectedStudioId}
					/>
				))}
				<ListItem ref={observerRef} />
			</List>
		</Box>
	);
};

/** Studio list component. */
export const StudiosList = memo(StudiosListComponent);
