import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { rootReduser } from "./redusers";

export const store = createStore(
    rootReduser, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);