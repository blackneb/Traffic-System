import { combineReducers, createStore } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import { breadcrumbReducers,basicInformationReducers,driverInformationReducers,involvedVehicleReducers,peopleInInvolvedVehicleReducers,addressReducers,registrationBasicInformationReducers } from "./Reducer";

const reducers = combineReducers(
    {
        breadcrumb:breadcrumbReducers,
        basicInformation:basicInformationReducers,
        driverInformation:driverInformationReducers,
        involvedVehicle:involvedVehicleReducers,
        peopleInInvolvedVehicle:peopleInInvolvedVehicleReducers,
        address:addressReducers,
        registrationBasicInformation:registrationBasicInformationReducers,
    }
);

export const store = createStore(reducers, composeWithDevTools())
