import { ADD_BREADCRUMB,ADD_BASIC_INFORMATION,ADD_DRIVER_INFORMATION,ADD_INVOLVED_VEHICLE,ADD_PEOPLE_IN_INVOLVED_VEICLE,ADD_ADDRESS,ADD_REGISTRATION_BASIC_INFORMATION, ADD_USER_TYPE, TRAFFICS } from "./ActionTypes";

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

export const add_address = (address:any) => {
    return{
        type:ADD_ADDRESS,
        payload:address,
    };
};

export const add_registraion_basic_information = (registration:any) => {
    return{
        type:ADD_REGISTRATION_BASIC_INFORMATION,
        payload:registration,
    };
};

export const add_user_type=(usertype:any)=>{
    return{
        type:ADD_USER_TYPE,
        payload:usertype,
    };
};

export const traffics = (traffic:any) => {
    return{
        type:TRAFFICS,
        payload:traffic
    }
}