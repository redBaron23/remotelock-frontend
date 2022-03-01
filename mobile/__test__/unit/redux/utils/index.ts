import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../../../../redux/rootReducer";

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

export const delay = (ms) => new Promise(resolve =>
    setTimeout(resolve, ms)
);