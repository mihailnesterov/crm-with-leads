
import { Dispatch } from "react";
import { themeAction, themeActionTypes } from "../../types/theme";

export const fetchTheme = () => {
    return async (dispatch: Dispatch<themeAction>) => {
        try {
            dispatch({
                type: themeActionTypes.FETCH_THEME
            });
           
            setTimeout(() => {
                dispatch({
                    type: themeActionTypes.FETCH_THEME_SUCCESS,
                    payload: false
                });
            }, 100);            
            
        } catch (error) {
            dispatch({
                type: themeActionTypes.FETCH_THEME_ERROR,
                payload: 'Error on theme loading!'
            });
        }
    }
}
