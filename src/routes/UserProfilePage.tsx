import React, {FC} from 'react';
import UserProfile from '../components/UserProfile';

const UserProfilePage: FC = () => {

    return (
        <div>
            {<UserProfile />}
        </div>
    );
}

export default React.memo(UserProfilePage);