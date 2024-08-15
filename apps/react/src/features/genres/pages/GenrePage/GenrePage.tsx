import { memo, FC } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { setOpen } from '@js-camp/react/store/drawer/slice';

import { GenreLayout } from '../../components/GenreLayout';
import { NavigationList } from '../../components/NavigationList';

import styles from './GenrePage.module.css';

const drawerWidth = 280;

const PersistentDrawerLeft: FC = () => {
	const theme = useTheme();
	const open = useSelector(selectIsDrawerOpen);
	const dispatch = useDispatch();

	const handleDrawerOpen = () => {
		dispatch(setOpen(true));
	};

	const handleDrawerClose = () => {
		dispatch(setOpen(false));
	};
	return (
		<Box className={styles.main}>
			<CssBaseline />
			<MuiAppBar className={`${styles.appBar} ${open ? styles.appBarOpen : ''}`}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: 'none' }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Anime App
					</Typography>
				</Toolbar>
			</MuiAppBar>
			<Drawer
				className={styles.drawer}
				sx={{
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<div className={styles.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<NavigationList items={[
					{ name: 'Anime', path: '/example/anime' },
					{ name: 'Genres', path: '/example/genres' },
					{ name: 'Studios', path: '/example/studios' },
				]} />
				<Divider />
				<NavigationList items={[
					{ name: 'Login', path: '/example/login' },
					{ name: 'Logout', path: '/example/logout' },
					{ name: 'Profile', path: '/example/profile' },
				]}/>
			</Drawer>
			<GenreLayout title='Genres'/>
		</Box>
	);
};

/** 1. */
export const ExamplePage = memo(PersistentDrawerLeft);
