import { ADD_BREADCRUMB } from "./ActionTypes";

const initialStateBreadCrumb:any[] = [
    {title:"Home",path:"/"},
];

export const breadcrumbReducers = ( state=initialStateBreadCrumb, action:any ) => {
    const { type,payload } = action;
    switch(type){
        case ADD_BREADCRUMB:
            return payload;
        default:
            return state;
    };
};