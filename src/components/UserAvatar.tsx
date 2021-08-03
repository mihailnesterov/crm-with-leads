import React, {FC, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import { useUserActions } from '../hooks/useUserActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Loader from './Loader';

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
}))(Badge);

const UserAvatar: FC = () => {

    const {users, loading, error} = useTypedSelector(state => state.user);
    const {fetchUser} = useUserActions();

    useEffect(() => {
        fetchUser();
    }, []);

    if( loading ) {
        return <><Loader /></>;
    }

    if( error ) {
        return <><h3>{error}</h3></>
    }

    const user = users[0] ? users[0] : {login:'',avatar:'',name:[],role:''};

    return (
        <div style={{"margin":"40px auto 20px auto","textAlign":"center"}}>
            <StyledBadge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                <NavLink to="/profile" title="Перейти в профиль">
                    <Avatar alt={user.login} src={user.avatar} />
                </NavLink>
                
            </StyledBadge>
                <h4 style={{"margin":"5px 0 0"}}>{user.name.join(' ')}</h4>
                <h5 style={{"margin":"0","fontWeight":"normal"}}>{user.role === 'manager' ? 'менеджер': ''}</h5>
        </div>
    );
}

export default React.memo(UserAvatar);
