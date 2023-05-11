import { ADD_BREADCRUMB,ADD_BASIC_INFORMATION,ADD_DRIVER_INFORMATION,ADD_INVOLVED_VEHICLE,ADD_PEOPLE_IN_INVOLVED_VEICLE } from "./ActionTypes";

const initialStateBreadCrumb:any[] = [
    {title:"Home",path:"/"},
];

const initialStateBasicInformation:any[]=[];
const initialStateDriverInformation:any[]=[];
const initialStateInvolvedVehicles:any[]=[];
const initialStatePeopleInInvolvedVehicle:any[]=[];

export const breadcrumbReducers = ( state=initialStateBreadCrumb, action:any ) => {
    const { type,payload } = action;
    switch(type){
        case ADD_BREADCRUMB:
            return payload;
        default:
            return state;
    };
};

export const basicInformationReducers = (state=initialStateBasicInformation, action:any) => {
    const { type, payload } = action;
    switch(type){
        case ADD_BASIC_INFORMATION:
            return payload;
        default:
            return state;
    };
};

export const driverInformationReducers = ( state=initialStateDriverInformation, action:any ) => {
    const { type, payload } = action;
    switch(type){
        case ADD_DRIVER_INFORMATION:
            return payload;
        default:
            return state;
    };
};

export const involvedVehicleReducers = ( state=initialStateInvolvedVehicles, action:any ) => {
    const { type, payload } = action;
    switch(type){
        case ADD_INVOLVED_VEHICLE:
            return payload;
        default:
            return state;
    };
};

export const peopleInInvolvedVehicleReducers = ( state=initialStatePeopleInInvolvedVehicle, action:any ) => {
    const { type, payload } = action;
    switch(type){
        case ADD_PEOPLE_IN_INVOLVED_VEICLE:
            return payload;
        default:
            return state;
    };
};