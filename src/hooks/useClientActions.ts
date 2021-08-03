import {useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientActionCreators from '../store/actions/client';

export const useClientActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(clientActionCreators, dispatch);
}