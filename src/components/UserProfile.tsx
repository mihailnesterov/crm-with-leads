import React, {FC, useEffect} from 'react';
import { useUserActions } from '../hooks/useUserActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Loader from './Loader';

const UserProfile: FC = () => {

    const {users, loading, error} = useTypedSelector(state => state.user);
    const {fetchUser} = useUserActions();

    useEffect(() => {
        fetchUser();
    }, []);

    if( loading ) {
        return <><Loader /></>;
    }

    if( error ) {
        return <><h1>{error}</h1></>
    }

    const user = users[0];
    
    return (
        <>
            <p>ФИО: <b>{user.name}</b></p>
            <p>Роль: <b>{user.role}</b></p>
            <p>Группа: <b>{user.groups[0]}</b></p>
        </>
    );
}

export default React.memo(UserProfile);
