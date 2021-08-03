/*const FETCH_USERS           = 'FETCH_USERS';
const FETCH_USERS_SUCCESS   = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR     = 'FETCH_USERS_ERROR';*/

export enum userActionTypes {
    FETCH_USERS           = 'FETCH_USERS',
    FETCH_USERS_SUCCESS   = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR     = 'FETCH_USERS_ERROR'
}

export interface IUserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface IFetchUserAction {
    // type: typeof FETCH_USERS; // если без enum
    type: userActionTypes.FETCH_USERS;
}

interface IFetchUserSuccessAction {
    type: userActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface IFetchUserErrorAction {
    type: userActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

/*interface userAction {
    type: string;
    payload?: any;
}*/

export type userAction = IFetchUserAction | IFetchUserSuccessAction | IFetchUserErrorAction;
