
import { Dispatch } from "react";
import { userAction, userActionTypes } from "../../types/users";
//import axios from "axios";
import Users from '../../data/users.js';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({
                type: userActionTypes.FETCH_USERS
            });
           
            setTimeout(() => {
                dispatch({
                    type: userActionTypes.FETCH_USERS_SUCCESS,
                    payload: Users.filter(user => user.role === 'manager')
                });
            }, 100);            
            
        } catch (error) {
            dispatch({
                type: userActionTypes.FETCH_USERS_ERROR,
                payload: 'Error on users loading!'
            });
        }
    }
}

export const fetchUser = () => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({
                type: userActionTypes.FETCH_USERS
            });
            
            setTimeout(() => {
                dispatch({
                    type: userActionTypes.FETCH_USERS_SUCCESS,
                    payload: Users.filter(user => user._id === '608af5e931f85fb848ae1079')
                });
            }, 100);
            
        } catch (error) {
            dispatch({
                type: userActionTypes.FETCH_USERS_ERROR,
                payload: 'Error on user loading!'
            });
        }
    }
}