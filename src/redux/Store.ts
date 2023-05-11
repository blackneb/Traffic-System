import { combineReducers, createStore } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import { breadcrumbReducers,basicInformationReducers,driverInformationReducers,involvedVehicleReducers,peopleInInvolvedVehicleReducers } from "./Reducer";

const reducers = combineReducers(
    {
        breadcrumb:breadcrumbReducers,
        basicInformation:basicInformationReducers,
        driverInformation:driverInformationReducers,
        involvedVehicle:involvedVehicleReducers,
        peopleInInvolvedVehicle:peopleInInvolvedVehicleReducers,
    }
);

export const store = createStore(reducers, composeWithDevTools())
