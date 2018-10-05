import { GET_LOCATION_LIST } from "../actions/types";
const INITIAL_STATE = {
    data: null,
    error: ""
}

export default function LocationReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case GET_LOCATION_LIST:
            return [
                ...state,
                {
                    data: action.payload
                }
            ];
        default:
            return state;
    }
}