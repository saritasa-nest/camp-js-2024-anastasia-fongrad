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

/** Drawer width in pixels. */
const DRAWER_WIDTH = 280;

const mainRoutes = [
	{ name: 'Anime', path: '/anime' },
	{ name: 'Genres', path: '/genres' },
	{ name: 'Studios', path: '/studios' },
];

const loginRoutes = [
	{ name: 'Login', path: '/login' },
	{ name: 'Logout', path: '/logout' },
	{ name: 'Profile', path: '/profile' },
];

const GenrePageComponent: FC = () => {
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
				<Toolbar className={styles.toolbar}>
					<IconButton
						className={`${styles.icon} ${open ? styles.none : ''}`}
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="h6">
						Anime App
					</Typography>
				</Toolbar>
			</MuiAppBar>
			<Drawer
				className={styles.drawer}
				sx={{
					'& .MuiDrawer-paper': {
						width: DRAWER_WIDTH,
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
				<NavigationList items={mainRoutes} />
				<Divider />
				<NavigationList items={loginRoutes}/>
			</Drawer>
			<GenreLayout/>
		</Box>
	);
};

/** Genre page component. */
export const GenrePage = memo(GenrePageComponent);
