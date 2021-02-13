import {ApiPack, ResponseTypeCardsPacksData} from "../../API/Api";
import {RequestStatusType} from "../AuthReducer/AuthReducer";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../Store";


export interface stateProps {
    cardPacks: ResponseTypeCardsPacksData[] | null
    page?: number
    pageCount?: number
    error: string | undefined
    status: RequestStatusType,
    isDisabled: boolean,
}


const initialState: stateProps = {
    cardPacks: null,
    status: "succeeded",
    error: undefined,
    isDisabled: false

}


//Type
export enum ActionType {
    GET_PACKS = "/PACKS/GET_PACKS",
    SET_STATUS = "/PACKS/SET_STATUS",
    SET_ERROR = 'PACKS/SET_ERROR',
    IS_DISABLED = "PACKS/ADD_BTN/IS_DISABLED",


}


//actions

interface Action<T> {
    type: ActionType,
    payload: T

}

export const getPacks = (data: ResponseTypeCardsPacksData[]): Action<ResponseTypeCardsPacksData[]> => ({
    type: ActionType.GET_PACKS,
    payload: data
});


export const setStatus = (status: RequestStatusType): Action<RequestStatusType> => ({
    type: ActionType.SET_STATUS,
    payload: status
})

export const setError = (error: string | undefined): Action<string | undefined> => ({
    type: ActionType.SET_ERROR,
    payload: error
})


export const isDisabled = (isDisabled: boolean): Action<boolean> => ({
    type: ActionType.IS_DISABLED,
    payload: isDisabled
})


//thunk


export const getPacksThunk = () => (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>) => {
    dispatch(setStatus('loading'))
    ApiPack.getCardPacks(1, 5)
        .then(res => {
            dispatch(isDisabled(false))
            dispatch(getPacks(res.data.cardPacks))
            dispatch(setStatus('succeeded'))
        })

}
export const addPacksThunk = (body: {}) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>) => {
        dispatch(setStatus('loading'))
        ApiPack.addCardPacks(body)
            .then(() => {
                dispatch(isDisabled(true))
                dispatch(getPacksThunk())

            })
            .catch(e => {
                const error = e.response.error
                    ? e.response.error
                    : (e.response.error + 'checkError')
                console.log(error)
                console.log('errors:', {...e})
                dispatch(setError(error))
                dispatch(setStatus('succeeded'))
            })

    }

export const deletePackThunk = (_id: string) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>) => {
        dispatch(setStatus('loading'))
        ApiPack.deleteCardPack(_id)
            .then(() => {
                dispatch(isDisabled(false))
                dispatch(getPacksThunk())
            })
    }

export const onChangeNamePackThunk = ( _id: string, name: string) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>) => {
        ApiPack.putCardPack({_id,name})
            .then (()=> {

            })
    }



const PacksPageReducer = (state: stateProps = initialState, action: Action<ResponseTypeCardsPacksData[] &
    RequestStatusType & ResponseTypeCardsPacksData & boolean>): stateProps => {
    switch (action.type) {
        //initial state from Back
        case ActionType.GET_PACKS:
            return {
                ...state, cardPacks: action.payload
            }

        // loading | succeeded
        case ActionType.SET_STATUS: {
            return {
                ...state, status: action.payload
            }
        }
        // on BTN for addPacksThunk
        case ActionType.IS_DISABLED:
            return {
                ...state, isDisabled: action.payload
            }

        // errors
        case ActionType.SET_ERROR:
            return {
                ...state, error: action.payload
            }

        default:
            return state
    }

}


type TypeActions = ReturnType<typeof getPacks> | ReturnType<typeof setStatus>
    | ReturnType<typeof setError> | ReturnType<typeof isDisabled>

export default PacksPageReducer