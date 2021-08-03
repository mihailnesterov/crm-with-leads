import {combineReducers} from "redux";
import { userReducer } from "./userReduser";
import { clientReducer } from "./clientReduser";
import { themeReduser } from "./themeReduser";

export const rootReduser = combineReducers({
    user: userReducer,
    client: clientReducer,
    theme: themeReduser,
});

export type RootState = ReturnType<typeof rootReduser>;