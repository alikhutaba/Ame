import { combineReducers } from "redux";

import NewPatient from "./NewPatientReducer"
import staticData from "./staticDataReducer"

export default combineReducers({ NewPatient, staticData });