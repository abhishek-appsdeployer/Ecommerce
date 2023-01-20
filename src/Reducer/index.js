import changeNumber from "./Reducer";
import getId from "./Getid";
import Productname from "./Procuctname";
import { combineReducers } from "redux";
const RootReducer=combineReducers(
    {
        changeNumber,getId,Productname
    }
)
export default RootReducer