import { FC, memo } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { UserProfile } from '@js-camp/core/models/user-profile.model';
import { Avatar } from '@mui/material';

type Props = {

	/** An array of navigation objects. */
	readonly userProfile: UserProfile;

};

const UserProfileComponent: FC<Props> = ({ userProfile }: Props) => {
	const getInitials = () => {
		const firstNameInitial = userProfile.firstName.charAt(0).toUpperCase();
		const lastNameInitial = userProfile.lastName.charAt(0).toUpperCase();
		const fullInitials = `${firstNameInitial}${lastNameInitial}`;
		return fullInitials !== '' ? fullInitials : 'A';
	};

	return (
		<ListItem
			key='Profile'
			disablePadding
		>
			<ListItemButton>
				<ListItemAvatar>
					<Avatar>
						{ getInitials() }
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={userProfile.getFullName()}
					secondary={userProfile.email}
				/>
			</ListItemButton>
		</ListItem>
	);
};

/** Navigation list component. */
export const UserProfileItem = memo(UserProfileComponent);
