import thunk from "redux-thunk";

import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers";

const middleware = [thunk];
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
);

export default store;