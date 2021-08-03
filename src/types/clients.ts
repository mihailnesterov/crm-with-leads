/*const FETCH_CLIENTS           = 'FETCH_CLIENTS';
const FETCH_CLIENTS_SUCCESS   = 'FETCH_CLIENTS_SUCCESS';
const FETCH_CLIENTS_ERROR     = 'FETCH_CLIENTS_ERROR';*/

export enum clientActionTypes {
    FETCH_CLIENTS           = 'FETCH_CLIENTS',
    FETCH_CLIENTS_SUCCESS   = 'FETCH_CLIENTS_SUCCESS',
    FETCH_CLIENTS_ERROR     = 'FETCH_CLIENTS_ERROR'
}

export interface IClientState {
    clients: any[];
    loading: boolean;
    error: null | string;
}

interface IFetchClientAction {
    // type: typeof FETCH_CLIENTS; // если без enum
    type: clientActionTypes.FETCH_CLIENTS;
}

interface IFetchClientSuccessAction {
    type: clientActionTypes.FETCH_CLIENTS_SUCCESS;
    payload: any[];
}

interface IFetchClientErrorAction {
    type: clientActionTypes.FETCH_CLIENTS_ERROR;
    payload: string;
}

/*interface clientAction {
    type: string;
    payload?: any;
}*/

export type clientAction = IFetchClientAction | IFetchClientSuccessAction | IFetchClientErrorAction;
