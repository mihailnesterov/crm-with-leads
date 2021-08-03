export enum themeActionTypes {
    FETCH_THEME           = 'FETCH_THEME',
    FETCH_THEME_SUCCESS   = 'FETCH_THEME_SUCCESS',
    FETCH_THEME_ERROR     = 'FETCH_THEME_ERROR'
}

export interface IThemeState {
    sidebar: boolean;
    loading: boolean;
    error: null | string;
}

interface IFetchThemeAction {
    // type: typeof FETCH_THEME; // если без enum
    type: themeActionTypes.FETCH_THEME;
}

interface IFetchThemeSuccessAction {
    type: themeActionTypes.FETCH_THEME_SUCCESS;
    payload: boolean;
}

interface IFetchThemeErrorAction {
    type: themeActionTypes.FETCH_THEME_ERROR;
    payload: string;
}

export type themeAction = IFetchThemeAction | IFetchThemeSuccessAction | IFetchThemeErrorAction;
