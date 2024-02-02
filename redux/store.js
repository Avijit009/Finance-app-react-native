import { legacy_createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import Reducer from "./reducer";

const Store = legacy_createStore(Reducer, applyMiddleware(thunk));


export default Store;