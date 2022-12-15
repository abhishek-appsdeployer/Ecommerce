import changeNumber from "./Reducer";
import getId from "./Getid";
import { combineReducers } from "redux";
const RootReducer=combineReducers(
    {
        changeNumber,getId
    }
)
export default RootReducer