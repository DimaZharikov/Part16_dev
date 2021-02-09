import { ThunkDispatch } from "redux-thunk";
import {RequestStatusType} from "../AuthReducer/AuthReducer";
import {AppRootStateType} from "../Store";
import {ApiRegistration, ResponseTypeRegistration} from "../../API/Api";





export interface stateProps {
    isRegistration: boolean,
    status: RequestStatusType;
    data: ResponseTypeRegistration

}


const initialState: stateProps = {
    isRegistration: false,
    status: "succeeded",
    data : {
        email: '',
        password: '',
        error: undefined
    }
}


//Type
export enum ActionType {
    SET_IS_REGISTRATION = "REGISTRATION_CONTAINER/SET_IS_REGISTRATION",
    SET_STATUS = "REGISTRATION_CONTAINER/SET_STATUS",
    SET_DATA = "REGISTRATION_CONTAINER/SET_DATA",

}


//actions

interface Action<T> {
    type: ActionType,
    payload: T

}


// ActionCreate
export const setRegistration = (isRegistration: boolean): Action<boolean> => ({
    type: ActionType.SET_IS_REGISTRATION,
    payload: isRegistration
});


export const setStatus = (status : RequestStatusType): Action<RequestStatusType> => ({
    type: ActionType.SET_STATUS,
    payload: status
});

export const setData = (data: {
    email: string, password: string, error?: string | undefined
}): Action<{ email: string; password: string; error?: string | undefined }> => ({
    type: ActionType.SET_DATA,
    payload: data
})



//Thunk
export const putData = (email: string, password: string, error?: string | undefined) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>) => {
    dispatch(setStatus('loading'))
        ApiRegistration.register(email, password, error)
            .then (res => {
                dispatch(setData(res.data))
                dispatch(setStatus("succeeded"))
                setRegistration(false)
            })
            .catch(e => {
                const error = e.response
                ? e.response.data.error
                    : (e.response.data.error + 'check console')
                console.log(error)
                console.log('errors:', {...e})
                dispatch(setStatus("failed"))
            })
    }






const RegistrationReducer = (state: stateProps = initialState, action: Action<boolean & RequestStatusType>): stateProps => {
    switch (action.type) {
        //initial Data
        case ActionType.SET_DATA:
            return {...state, data: action.payload}
        //values from UI for push Email and password if VALID
        case ActionType.SET_IS_REGISTRATION:
            return {
                ...state, isRegistration: action.payload
            };
            //values from UI for push Password
        case ActionType.SET_STATUS:
            return {
                ...state, status: action.payload
            };
    }
    return state
}


//types
type TypeActions = ReturnType<typeof setData> |
    ReturnType<typeof setRegistration> |
    ReturnType<typeof setStatus>

export default RegistrationReducer