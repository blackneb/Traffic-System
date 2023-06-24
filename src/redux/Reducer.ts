import { ADD_BREADCRUMB,ADD_BASIC_INFORMATION,ADD_DRIVER_INFORMATION,ADD_INVOLVED_VEHICLE,ADD_PEOPLE_IN_INVOLVED_VEICLE,ADD_ADDRESS,ADD_REGISTRATION_BASIC_INFORMATION, ADD_USER_TYPE,TRAFFICS,ACCIDENTS, CLEAR_ACCIDENTS, ACCIDENT_ONLY, CLEAR_ACCIDENT_ONLY } from "./ActionTypes";

const initialStateBreadCrumb:any[] = [
    {title:"Home",path:"/"},
];

const initialStateBasicInformation:any[]=[];
const initialStateDriverInformation:any[]=[];
const initialStateInvolvedVehicles = {
    involvedVehicles:[],
}
const initialStatePeopleInInvolvedVehicle = {
    injuredPersons:[],
}
const initialStateAccidents = {
    totalAccidents:[],
}
const initialStateAccidentOnly = {
    Accidents:[],
}
const initialStateAddress:any[]=[];
const initialStateTraffic:any[]=[];
const initialStateRegistrationBasicInformation:any[]=[];
const initialStateUserType:any={
}


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
            return {...state,involvedVehicles:[...state.involvedVehicles,payload]}
        default:
            return state;
    };
};

export const peopleInInvolvedVehicleReducers = ( state=initialStatePeopleInInvolvedVehicle, action:any ) => {
    const { type, payload } = action;
    switch(type){
        case ADD_PEOPLE_IN_INVOLVED_VEICLE:
            return {...state,injuredPersons:[...state.injuredPersons,payload]}
        default:
            return state;
    };
};

export const addressReducers = ( state=initialStateAddress, action:any ) => {
    const { type, payload } = action;
    switch(type){
        case ADD_ADDRESS:
            return payload;
        default:
            return state;
    };
};

export const registrationBasicInformationReducers = ( state=initialStateRegistrationBasicInformation, action:any ) => {
    const { type, payload } = action;
    switch(type){
        case ADD_REGISTRATION_BASIC_INFORMATION:
            return payload;
        default:
            return state;
    };
};

export const userTypeReducers = (state=initialStateUserType, action:any)=>{
    const { type, payload } = action;
    switch(type){
        case ADD_USER_TYPE:
            return payload;
        default:
            return state;
    };
};

export const trafficReducers = (state=initialStateTraffic, action:any)=>{
    const { type, payload } = action;
    switch(type){
        case TRAFFICS:
            return payload;
        default:
            return state;
    };
};
export const accidentReducers = (state=initialStateAccidents, action:any)=>{
    const { type, payload } = action;
    switch(type){
        case ACCIDENTS:
            return {...state,totalAccidents:[...state.totalAccidents,payload]}
        case CLEAR_ACCIDENTS:
            return initialStateAccidents;
        default:
            return state;
    };
};
export const accidentOnlyReducers = (state=initialStateAccidentOnly, action:any)=>{
    const { type, payload } = action;
    switch(type){
        case ACCIDENT_ONLY:
            return {...state,Accidents:[...state.Accidents,payload]}
            case CLEAR_ACCIDENT_ONLY:
                return initialStateAccidentOnly;
        default:
            return state;
    };
};