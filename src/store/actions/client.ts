
import { Dispatch } from "react";
import { clientAction, clientActionTypes } from "../../types/clients";
import Clients from '../../data/clients.js';

export const fetchClients = () => {
    return async (dispatch: Dispatch<clientAction>) => {
        try {
            dispatch({
                type: clientActionTypes.FETCH_CLIENTS
            });

            setTimeout(() => {
                dispatch({
                    type: clientActionTypes.FETCH_CLIENTS_SUCCESS,
                    payload: Clients.filter(client => client.manager === '608af5e931f85fb848ae1079')
                });
            }, 100);            
            
        } catch (error) {
            dispatch({
                type: clientActionTypes.FETCH_CLIENTS_ERROR,
                payload: 'Error on client loading!'
            });
        }
    }
}

export const fetchClient = () => {
    return async (dispatch: Dispatch<clientAction>) => {
        try {
            dispatch({
                type: clientActionTypes.FETCH_CLIENTS
            });

              setTimeout(() => {
                dispatch({
                    type: clientActionTypes.FETCH_CLIENTS_SUCCESS,
                    payload: Clients.filter(client => client._id === '56dfr6gr56rcvb4g7b5')
                });    
            }, 100);     
            
        } catch (error) {
            dispatch({
                type: clientActionTypes.FETCH_CLIENTS_ERROR,
                payload: 'Error on client loading!'
            });
        }
    }
}