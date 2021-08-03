import {userAction, userActionTypes, IUserState} from '../../types/users'

const initialState: IUserState = {
    users: [],
    loading: false,
    error: null
};

export const userReducer = (state = initialState, action: userAction): IUserState => {
    switch (action.type) {
        case userActionTypes.FETCH_USERS:
            return {
                users: [],
                loading: true,
                error: null
            }
        case userActionTypes.FETCH_USERS_SUCCESS:
            return {
                users: action.payload,
                loading: false,
                error: null
            }
        case userActionTypes.FETCH_USERS_ERROR:
            return {
                users: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}