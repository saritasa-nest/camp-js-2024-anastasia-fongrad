import { memo, FC } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { useAppSelector } from '@js-camp/react/store';
import { selectAreStudiosLoading } from '@js-camp/react/store/studio/selectors';
import { Box, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, Outlet, useParams } from 'react-router-dom';

import { StudiosList } from '../StudioList';

import styles from './StudioLayout.module.css';

const StudioLayoutComponent: FC = () => {
	const open = useSelector(selectIsDrawerOpen);
	const isLoading = useAppSelector(selectAreStudiosLoading);
	const navigate = useNavigate();
	const { studioId } = useParams<{ studioId: string; }>();

	if (isLoading) {
		return <div>Loading</div>;
	}

	const handleStudioClick = (id: number) => {
		navigate(`/studio/${id}`);
	};

	return (
		<main className={`${styles.layout} ${open ? styles.layout_open : ''}`}>
			<Box className={styles.layout__sidebar}>
				<StudiosList onStudioClick={handleStudioClick} />
			</Box>
			{studioId ? (
				<Outlet />
			) : (
				<div className={styles.layout__empty}>
					<div className={styles.layout__button}>
						<IconButton edge="start" color="inherit" aria-label="add">
							<AddIcon />
						</IconButton>
						<ListItemText primary="Add Studio" />
					</div>
				</div>
			)}
		</main>
	);
};

/** Studio layout component. */
export const StudioLayout = memo(StudioLayoutComponent);
