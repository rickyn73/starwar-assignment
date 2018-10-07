import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./Redux/Store";
import {Provider} from "react-redux";
import ReduxToastr from 'react-redux-toastr'
ReactDOM.render(
    <Provider store={store}>
        <div>
        <App />
        <ReduxToastr
            timeOut={2000}
            newestOnTop={false}
            preventDuplicates
            position="top-center"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick/>
        </div>
    </Provider>, 
document.getElementById('root'));
