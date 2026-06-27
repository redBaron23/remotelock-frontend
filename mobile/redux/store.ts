import { createStore, applyMiddleware } from "redux";
import { useDispatch } from "react-redux";
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer
  , applyMiddleware(thunk)
);

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
