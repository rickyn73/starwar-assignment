import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import PlanetReducer from './PlanetReducer';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
    toastr: toastrReducer ,
    LoginReducer ,
    PlanetReducer
})