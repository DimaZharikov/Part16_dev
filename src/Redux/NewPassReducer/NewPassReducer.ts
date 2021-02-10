import {AppThunk} from "../Store";
import {ApiAuth} from "../../API/Api";


export interface stateProps {
    changeMes?: string
    errorMes?: string
    loading: boolean


}
//Type
export enum ActionType {
    NEW_CHANGE_MES = 'NEW_PAS/NEW_CHANGE_MES',
    ERROR_MES = 'NEW_PAS/ERROR_MES',
    LOADING = 'NEW_PAS/LOADING'
}

const initialState: stateProps = {
    changeMes: undefined,
    errorMes: undefined,
    loading:false
}
//actions
export const setNewMes = (changeMes:string) => ({type:ActionType.NEW_CHANGE_MES, payload:{changeMes}})
export const setErrorMes = (errorMes:string) => ({type:ActionType.ERROR_MES, payload: {errorMes}})
const loadingNewPas = (loading:boolean) => ({type:ActionType.LOADING, payload:{loading}})

export type NewMesActionType = ReturnType<typeof setNewMes> | ReturnType<typeof setErrorMes>| ReturnType<typeof loadingNewPas>




const NewPasswordReducer = (state: stateProps = initialState, action: NewMesActionType): stateProps => {
    switch (action.type) {

        case ActionType.NEW_CHANGE_MES:
            return {...state, ...action.payload}
        case ActionType.ERROR_MES:
            return {...state, ...action.payload}
        case ActionType.LOADING:
            return {...state, ...action.payload}
        default: return state
    }

}

export const ChangePassword = (password: string, token:string):AppThunk => (dispatch) => {
    dispatch(loadingNewPas(true))
    ApiAuth.changePas(password, token)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log(error)
            console.log('Error:', {...e})
            dispatch(setErrorMes(error))
        })
        .finally(() => {
            dispatch(loadingNewPas(false))
        })
}

export default NewPasswordReducer