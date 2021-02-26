import { combineReducers } from "redux";

import patient from "./patient";
import staticData from "./staticData"

export default combineReducers({ patient, staticData });