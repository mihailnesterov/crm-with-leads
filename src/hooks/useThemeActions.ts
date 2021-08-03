import {useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as themeActionCreators from '../store/actions/theme';

export const useThemeActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(themeActionCreators, dispatch);
}