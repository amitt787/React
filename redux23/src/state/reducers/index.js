import { combineReducers } from "redux";
import amountReducer from "./amounReducer";
const reducers =combineReducers({
    amount:amountReducer
})
export default reducers;