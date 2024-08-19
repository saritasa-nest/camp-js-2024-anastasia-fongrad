import { FC, memo } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-router-dom';

import { NavigationProps } from '@js-camp/react/utils/navigationProps';

type Props = {

	/** An array of navigation objects. */
	readonly items: readonly NavigationProps[];

	/** 1. */
	readonly currentPage: string;

	/** 1. */
	readonly onClick: (name: string) => void;
};

const NavigationListComponent: FC<Props> = ({ items, currentPage, onClick }: Props) => (
	<List>
		{items.map((item, index) => (
			<ListItem key={item.name} disablePadding>
				<ListItemButton
					component={NavLink}
					to={item.path}
					onClick={() => onClick(item.name)}
					selected={item.name === currentPage}
				>
					<ListItemIcon>
						{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
					</ListItemIcon>
					<ListItemText primary={item.name} />
				</ListItemButton>
			</ListItem>
		))}
	</List>
);

/** Navigation list component. */
export const NavigationList = memo(NavigationListComponent);
