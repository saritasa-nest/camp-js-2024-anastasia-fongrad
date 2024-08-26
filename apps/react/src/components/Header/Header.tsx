import { memo, FC } from 'react';
import { clsx } from 'clsx';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { setOpen } from '@js-camp/react/store/drawer/slice';

import { NavigationProps } from '@js-camp/react/features/genres/utils/navigationProps';

import { NavigationList } from '../NavigationList';

import styles from './Header.module.css';

/** Drawer width in pixels. */
const DRAWER_WIDTH = 280;

const mainRoutes: NavigationProps[] = [
	{ name: 'Anime', path: '/anime' },
	{ name: 'Genres', path: '/genres' },
	{ name: 'Studios', path: '/studios' },
];

const loginRoutes: NavigationProps[] = [
	{ name: 'Login', path: '/login' },
	{ name: 'Logout', path: '/logout' },
	{ name: 'Profile', path: '/profile' },
];

const HeaderComponent: FC = () => {
	const isDrawerOpen = useSelector(selectIsDrawerOpen);
	const dispatch = useDispatch();

	const handleDrawerOpen = () => {
		dispatch(setOpen(true));
	};

	const handleDrawerClose = () => {
		dispatch(setOpen(false));
	};

	return (
		<>
			<MuiAppBar className={clsx(styles['main__app-bar'], isDrawerOpen && styles['main__app-bar_open'])}>
				<Toolbar className={styles.main__toolbar}>
					<IconButton
						className={styles['main__toolbar-icon']}
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="h6"
						noWrap
					>
						Anime App
					</Typography>
				</Toolbar>
			</MuiAppBar>
			<Drawer
				className={styles.main__drawer}
				sx={{
					'& .MuiDrawer-paper': {
						width: DRAWER_WIDTH,
					},
				}}
				variant="persistent"
				anchor="left"
				open={isDrawerOpen}
			>
				<div className={styles['main__drawer-header']}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<NavigationList items={mainRoutes} />
				<Divider />
				<NavigationList items={loginRoutes}/>
			</Drawer>
		</>
	);
};

/** Genre page component. */
export const Header = memo(HeaderComponent);
