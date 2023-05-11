import { ADD_BREADCRUMB,ADD_BASIC_INFORMATION,ADD_DRIVER_INFORMATION,ADD_INVOLVED_VEHICLE,ADD_PEOPLE_IN_INVOLVED_VEICLE } from "./ActionTypes";

export const add_breadcrumb = (breadcrumb:any) => {
    return{
        type:ADD_BREADCRUMB,
        payload:breadcrumb,
    }
};

export const add_basic_information = (basicinformation:any) => {
    return{
        type:ADD_BASIC_INFORMATION,
        payload:basicinformation,
    };
};

export const add_driver_information = (driverinformation:any) => {
    return{
        type:ADD_DRIVER_INFORMATION,
        payload:driverinformation,
    };
};

export const add_involved_vehicle = (involvedvehicle:any) => {
    return{
        type:ADD_INVOLVED_VEHICLE,
        payload:involvedvehicle,
    };
};

export const add_people_in_involved_vehicle = (peopleininvolvedvehicle:any) => {
    return{
        type:ADD_PEOPLE_IN_INVOLVED_VEICLE,
        payload:peopleininvolvedvehicle,
    };
};