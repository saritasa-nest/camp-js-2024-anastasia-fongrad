import { FC, memo } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

type Props = {

	/** An array of navigation objects. */
	items: {

		/** Navigation name. */
		readonly name: string;

		/** Navigation path. */
		readonly path: string;
	}[];
};

const NavigationListComponent: FC<Props> = ({ items }: Props) => (
	<List>
		{items.map((item, index) => (
			<ListItem key={item.name} disablePadding>
				<ListItemButton>
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
