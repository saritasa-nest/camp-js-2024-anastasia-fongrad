import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

type NavigationListProps = {

	/** 1. */
	items: {

		/** 1. */
		readonly name: string;

		/** 1. */
		readonly path: string;
	}[];
};

const NavigationListComponent: FC<NavigationListProps> = ({ items }) => (
	<List>
		{items.map((item, index) => (
			<ListItem key={item.name} disablePadding>
				<ListItemButton component={Link} to={item.path}>
					<ListItemIcon>
						{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
					</ListItemIcon>
					<ListItemText primary={item.name} />
				</ListItemButton>
			</ListItem>
		))}
	</List>
);

/** 1. */
export const NavigationList = memo(NavigationListComponent);
