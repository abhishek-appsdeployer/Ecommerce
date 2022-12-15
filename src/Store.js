import RootReducer from "./Reducer";
import { createStore } from "redux";
const store=createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store