import { GET_USER_DETAILS, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_ERROR, ON_LOGOUT } from "../actions/types";
const INITIAL_STATE = {
    data: null,
    error: "",
    success:'',
    loading: false
}

export default function LoginReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case GET_USER_DETAILS:
            return {
                ...state,
                data: '',
                success: '',
                loading: true,
                error: ''
            };
        case GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                data: action.payload.payload,
                success: {title:action.payload.title, message:action.payload.message},
                loading: false,
                error: ''
            };
        case GET_USER_DETAILS_ERROR:
            return {
                ...state,
                data: null,
                loading: false,
                success:'',
                error: {title:action.payload.title, message:action.payload.message}
            };
        case ON_LOGOUT:
            return {
                ...state,
                data: null,
                loading: false,
                success:{title:action.payload.title, message:action.payload.message},
                error: '',
            };
        default:
            return state;
    }
}
