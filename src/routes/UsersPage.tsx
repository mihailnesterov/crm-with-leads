import React, {FC} from 'react';
import UserList from '../components/UserList';

const UsersPage: FC = () => {

    return (
        <div>
            {<UserList />}
        </div>
    );
}

export default React.memo(UsersPage);