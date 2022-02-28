import { combineReducers } from "redux";
import clientReducer from "./client/client.reducer";

const rootReducer = combineReducers({
    client: clientReducer,
});

export default rootReducer;
