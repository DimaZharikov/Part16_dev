import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware} from "redux";
import AuthReducer, { AuthType } from "./AuthReducer/AuthReducer";
import NewPassReducer from "./NewPassReducer/NewPassReducer";
import ErrorReducer from "./ErrorReducer/ErrorReducer";
import ProfileReducer, { ActionProfileType } from "./ProfileReducer/ProfileReducer";
import  RegistrationReducer from "./RegistrationReducer/RegistartionReducer";
import ResPasswordReducer from "./ResPassReducer/ResPasswordReducer";
import {AppReducer, AppType } from './AppReducer/AppReducer';




const reducer = combineReducers({
    auth: AuthReducer,
    newPas: NewPassReducer,
    error: ErrorReducer,
    profile: ProfileReducer,
    registration:  RegistrationReducer,
    resPas: ResPasswordReducer,
    app: AppReducer
})





export const store = createStore(reducer, applyMiddleware(thunkMiddleware));



export type AppRootStateType = ReturnType<typeof reducer>
export type AppActionType = AuthType | ActionProfileType | AppType

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootStateType,
    unknown,
    AppActionType
    >

export default store

//@ts-ignore
window.store = store;