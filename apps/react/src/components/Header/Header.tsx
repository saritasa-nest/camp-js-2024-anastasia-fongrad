import { memo, FC, useCallback, useState, useEffect } from 'react';
import { clsx } from 'clsx';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { selectIsDrawerOpen } from '@js-camp/react/store/drawer/selectors';
import { setOpen } from '@js-camp/react/store/drawer/slice';
import { NavigationProps } from '@js-camp/react/utils/navigationProps';
import { useAppSelector, useAppDispatch } from '@js-camp/react/store';
import { fetchUserProfile } from '@js-camp/react/store/userProfile/dispatchers';
import { NavLink } from 'react-router-dom';
import { selectUserProfile, selectIsUserProfileLoading } from '@js-camp/react/store/userProfile/selectors';
import { AuthTokenService } from '@js-camp/react/api/services/authTokenService';

import { Loader } from '../Loader';
import { UserProfileItem } from '../UserProfile';
import { NavigationList } from '../NavigationList';

import styles from './Header.module.css';

/** Drawer width in pixels. */
const DRAWER_WIDTH = 280;

const mainRoutes: NavigationProps[] = [
	{ name: 'Anime', path: '/anime' },
	{ name: 'Genres', path: '/genre' },
	{ name: 'Studios', path: '/anime' },
];

const loginRoutes: NavigationProps[] = [
	{ name: 'Login', path: '/login' },
	{ name: 'Registration', path: '/registration' },
];

const HeaderComponent: FC = () => {
	const isDrawerOpen = useAppSelector(selectIsDrawerOpen);
	const isLoading = useAppSelector(selectIsUserProfileLoading);
	const userProfile = useAppSelector(selectUserProfile);
	const [currentPage, setCurrentPage] = useState<string>('Anime');
	const [authToken, setAuthToken] = useState(AuthTokenService.getAuthToken());
	const dispatch = useAppDispatch();

	const logout = useCallback(() => {
		AuthTokenService.removeAuthToken();
		setAuthToken(null);
		dispatch(fetchUserProfile());
	}, [dispatch]);

	const handleDrawerOpen = useCallback(() => {
		dispatch(setOpen(true));
	}, [dispatch]);

	const handleDrawerClose = useCallback(() => {
		dispatch(setOpen(false));
	}, []);

	const handleNavigation = useCallback((pageName: string) => {
		setCurrentPage(pageName);
	}, []);

	useEffect(() => {
		dispatch(fetchUserProfile());
	}, [dispatch, authToken]);

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
				<NavigationList
					items={mainRoutes}
					currentPage={currentPage}
					onClick={handleNavigation}
				/>
				<Divider />

				{ isLoading && <Loader/> }

				{ userProfile && <>
					<UserProfileItem
						userProfile={userProfile}
					/>
					<ListItem key='logout' disablePadding>
						<ListItemButton
							component={NavLink}
							to='/login'
							onClick={logout}
						>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary='Logout' />
						</ListItemButton>
					</ListItem>
				</>}
				{!userProfile && <NavigationList
					items={loginRoutes}
					currentPage={currentPage}
					onClick={handleNavigation}
				/>}
			</Drawer>
		</>
	);
};

/** Genre page component. */
export const Header = memo(HeaderComponent);
