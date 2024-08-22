import { memo, FC, useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import { AnimeStudio } from '@js-camp/core/models/studio.model';

import { StudioFilters } from '../StudioFilters';
import { StudioListItem } from '../StudioListItem';

import styles from './StudioList.module.css';

type StudiosListProps = {

	/** An array of anime studios. */
	readonly studios: readonly AnimeStudio[];

	/** Handles displaying studio details on click. */
	onStudioClick: (id: number) => void;
};

const StudiosListComponent: FC<StudiosListProps> = ({ studios, onStudioClick }: StudiosListProps) => {
	const { studioId } = useParams<{ studioId: string; }>();
	const [selectedStudioId, setSelectedStudioId] = useState<number | undefined>(studioId ?
		Number(studioId) :
		undefined);

	const handleGenreClick = (id: number) => {
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
						<ListItemText primary='Add Genre'/>
					</ListItemButton>
				</ListItem>
				{studios.map(studio => (
					<StudioListItem
						key={studio.id}
						studio={studio}
						onClick={() => handleGenreClick(studio.id)}
						selected={studio.id === selectedStudioId}
					/>
				))}
			</List>
		</Box>
	);
};

/** Studio list component. */
export const StudiosList = memo(StudiosListComponent);
