import { combineReducers, createStore } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import { breadcrumbReducers,basicInformationReducers,driverInformationReducers,involvedVehicleReducers,peopleInInvolvedVehicleReducers,addressReducers,registrationBasicInformationReducers,userTypeReducers,trafficReducers,accidentReducers, accidentOnlyReducers } from "./Reducer";

const reducers = combineReducers(
    {
        breadcrumb:breadcrumbReducers,
        basicInformation:basicInformationReducers,
        driverInformation:driverInformationReducers,
        involvedVehicle:involvedVehicleReducers,
        peopleInInvolvedVehicle:peopleInInvolvedVehicleReducers,
        address:addressReducers,
        registrationBasicInformation:registrationBasicInformationReducers,
        userType:userTypeReducers,
        traffics:trafficReducers,
        accident:accidentReducers,
        accidentOnly:accidentOnlyReducers,
    }
);

export const store = createStore(reducers, composeWithDevTools())
