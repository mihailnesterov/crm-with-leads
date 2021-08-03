import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import './index.css'; // "sideEffects": false может сломать стили, тогда заменить false на ["*.css"]
import App from './App';
//import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { store } from './store/store';
import { SnackbarProvider} from 'notistack';

ReactDOM.render(
  <Provider store = {store}>
    <SnackbarProvider anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
    }}>
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
