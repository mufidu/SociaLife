import { combineReducers } from "redux";

import authReducer from "./authReducer";
import chatReducer from "./ChatUserReducer";

export const reducers = combineReducers({ authReducer, chatReducer });
