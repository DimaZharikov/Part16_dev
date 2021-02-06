import {ApiAuth} from "../../API/Api";
import {setProfileAc} from "../ProfileReducer/ProfileReducer";
import {AppThunk} from "../Store";

export type RequestStatusType = 'loading' | 'succeeded' | 'failed'

export interface stateProps {
    isLogin: boolean
    status: RequestStatusType
}


const initialState: stateProps = {
    isLogin: false,
    status: "succeeded"
}


//Type
export enum ActionType {
    SET_LOGIN = 'AUTH/SET_LOGIN',
    SET_STATUS = 'AUTH/SET_STATUS'
}

//actions

// interface Action<T> {
//     type: ActionType,
//     payload: T
// }


const AuthReducer = (state: stateProps = initialState, action: AuthType): stateProps => {
    switch (action.type) {
        case ActionType.SET_LOGIN:
            return {...state, ...action.payload}
        case ActionType.SET_STATUS: {
            return {...state, ...action.payload}
        }
    }
    return state
}

export const setLoginAC = (isLogin: boolean) => ({type: ActionType.SET_LOGIN, payload: {isLogin}})
export const setStatusAC = (status: RequestStatusType) => ({type: ActionType.SET_LOGIN, payload: {status}})
export const setLoginT = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    dispatch(setStatusAC('loading'))
    ApiAuth.login(email, password, rememberMe)
        .then(res => {
            dispatch(setProfileAc(res.data))
            dispatch(setLoginAC(true))
            dispatch(setStatusAC('succeeded'))
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log(error)
            console.log('Error:', {...e})
            dispatch(setStatusAC('failed'))
        })
}
export const setLogOut = (): AppThunk => (dispatch) => {
    dispatch(setStatusAC('loading'))
    ApiAuth.logOut()
        .then(res => {
            console.log(res)
            dispatch(setLoginAC(false))
            dispatch(setStatusAC('succeeded'))
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log(error)
            console.log('Error:', {...e})
            dispatch(setStatusAC('failed'))
        })
}


export type AuthType = ReturnType<typeof setLoginAC> | ReturnType<typeof setStatusAC>

export default AuthReducer