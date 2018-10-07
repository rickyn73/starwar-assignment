import { GET_PLANETS_DETAILS, GET_PLANETS_DETAILS_SUCCESS, GET_PLANETS_DETAILS_ERROR, CLEAR_PLANETS_DETAILS } from "../actions/types";
const INITIAL_STATE = {
    pdata: [],
    error: "",
    success:'',
    loading: false
}

export default function PlanetReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case GET_PLANETS_DETAILS:
            return {
                ...state,
                pdata: action.payload.payload,
                success: '',
                loading: true,
                error: ''
            };
        case GET_PLANETS_DETAILS_SUCCESS:
            return {
                ...state,
                pdata: action.payload.payload,
                success: '',
                loading: false,
                error: ''
            };
        case GET_PLANETS_DETAILS_ERROR:
            return {
                ...state,
                pdata: [],
                loading: false,
                success:'',
                error: ''
            };
        case CLEAR_PLANETS_DETAILS:
            return {
                ...state,
                pdata: [],
                loading: false,
                success:'',
                error: ''
            };
        default:
            return state;
    }
}
