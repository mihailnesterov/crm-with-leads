import {themeAction, themeActionTypes, IThemeState} from '../../types/theme'

const initialState: IThemeState = {
    sidebar: true,
    loading: false,
    error: null
};

export const themeReduser = (state = initialState, action: themeAction): IThemeState => {
    switch (action.type) {
        case themeActionTypes.FETCH_THEME:
            return {
                sidebar: true,
                loading: true,
                error: null
            }
        case themeActionTypes.FETCH_THEME_SUCCESS:
            return {
                sidebar: action.payload,
                loading: false,
                error: null
            }
        case themeActionTypes.FETCH_THEME_ERROR:
            return {
                sidebar: true,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}