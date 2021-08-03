import React, {FC, useEffect} from 'react';
import { useUserActions } from '../hooks/useUserActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Loader from './Loader';

const UserList: FC = () => {

    const {users, loading, error} = useTypedSelector(state => state.user);
    const {fetchUsers} = useUserActions();
   

    useEffect(() => {
        fetchUsers();
    }, []);

    if( loading ) {
        return <><Loader /></>;
    }

    if( error ) {
        return <><h1>{error}</h1></>
    }
    
    
    return (
        <>
            {users.filter(user => user.role === 'manager').map(user => <p key={user._id.$oid}>{user.name}</p>)}
        </>
    );
}

export default React.memo(UserList);
