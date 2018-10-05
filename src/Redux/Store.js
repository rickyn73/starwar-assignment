import thunk from "redux-thunk";

import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers";
import logger from "./Middleware/Logger";

const middleware = [thunk, logger];
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
);

export default store;