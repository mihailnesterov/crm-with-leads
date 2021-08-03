import {clientAction, clientActionTypes, IClientState} from '../../types/clients'

const initialState: IClientState = {
    clients: [],
    loading: false,
    error: null
};

export const clientReducer = (state = initialState, action: clientAction): IClientState => {
    switch (action.type) {
        case clientActionTypes.FETCH_CLIENTS:
            return {
                clients: [],
                loading: true,
                error: null
            }
        case clientActionTypes.FETCH_CLIENTS_SUCCESS:
            return {
                clients: action.payload,
                loading: false,
                error: null
            }
        case clientActionTypes.FETCH_CLIENTS_ERROR:
            return {
                clients: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}