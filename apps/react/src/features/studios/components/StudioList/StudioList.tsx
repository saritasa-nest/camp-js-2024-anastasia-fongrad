import { memo, FC, useState, useEffect, useRef } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { fetchStudios } from '@js-camp/react/store/studio/dispatchers';
import { selectStudios, selectStudiosPageNumber } from '@js-camp/react/store/studio/selectors';
import { incrementPageNumber } from '@js-camp/react/store/studio/slice';

import { StudioFilters } from '../StudioFilters';
import { StudioListItem } from '../StudioListItem';

import styles from './StudioList.module.css';

type StudiosListProps = {

	/** Handles displaying studio details on click. */
	onStudioClick: (id: number) => void;
};

const DEFAULT_PAGE_SIZE = 25;

const StudiosListComponent: FC<StudiosListProps> = ({ onStudioClick }: StudiosListProps) => {
	const { studioId } = useParams<{ studioId: string; }>();
	const [selectedStudioId, setSelectedStudioId] = useState<number | undefined>(studioId ?
		Number(studioId) :
		undefined);
	const observerRef = useRef(null);
	const dispatch = useAppDispatch();
	const pageNumber = useAppSelector(selectStudiosPageNumber);
	const studios = useAppSelector(selectStudios);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				dispatch(incrementPageNumber());
				dispatch(fetchStudios({ pageSize: DEFAULT_PAGE_SIZE, pageNumber }));
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
	}, [observerRef, dispatch]);

	const handleStudioClick = (id: number) => {
		setSelectedStudioId(id);
		onStudioClick(id);
	};

	return (
		<Box className={styles['genre-list']}>
			<StudioFilters/>
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
