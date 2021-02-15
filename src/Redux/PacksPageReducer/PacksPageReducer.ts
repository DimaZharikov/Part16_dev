import {ApiPack, ResponseTypeCardsPacksData} from "../../API/Api";
import {RequestStatusType} from "../AuthReducer/AuthReducer";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../Store";


export interface stateProps {
    cardPacks: ResponseTypeCardsPacksData[] | null    
    error: string | undefined
    status: RequestStatusType,
    isDisabled: boolean,
    pageSize: number
    currentPage: number
}


const initialState: stateProps = {
    cardPacks: null,
    status: "succeeded",
    error: undefined,
    isDisabled: false,
    pageSize: 4,
    currentPage: 1

}


//Type
export enum ActionType {
    GET_PACKS = "/PACKS/GET_PACKS",
    SET_STATUS = "/PACKS/SET_STATUS",
    SET_ERROR = 'PACKS/SET_ERROR',
    IS_DISABLED = "PACKS/ADD_BTN/IS_DISABLED",
    SET_PAGE_SIZE = "PACKS/SET_PAGE_SIZE",
    SET_CURRENT_PAGE = "PACKS/SET_CURRENT_PAGE",
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
export const setPageSizeAC = (pageSize: number): Action<number> => ({
    type: ActionType.SET_PAGE_SIZE,
    payload: pageSize
})
export const setCurrentPageAC = (currentPage: number): Action<number> => ({
    type: ActionType.SET_CURRENT_PAGE,
    payload: currentPage
})


//thunk


export const getPacksThunk = (pageSize:number,currentPage:number) => (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>) => {
    dispatch(setStatus('loading'))
    ApiPack.getCardPacks(pageSize, currentPage)
        .then(res => {
            console.log(res.data.cardPacks)            
            dispatch(isDisabled(false))
            dispatch(getPacks(res.data.cardPacks))
            dispatch(setStatus('succeeded'))
        })
        .catch(e => {
            const error = e.response.error
                ? e.response.error
                : (e.response.error + 'checkError')
            console.log(error)
            console.log('errors:', {...e})
            dispatch(setError(error))
            dispatch(setStatus('failed'))
        })
        .finally(() => {
            dispatch(setStatus('succeeded'))
        })

}
export const addPacksThunk = (body: {}) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>, getState: () => AppRootStateType) => {
        dispatch(setStatus('loading'))
        const pageSize = getState().packsPage.pageSize
        const currentPage = getState().packsPage.currentPage
        ApiPack.addCardPacks(body)
            .then(() => {
                dispatch(isDisabled(true))
                dispatch(getPacksThunk(pageSize,currentPage))

            })
            .catch(e => {
                const error = e.response.error
                    ? e.response.error
                    : (e.response.error + 'checkError')
                console.log(error)
                console.log('errors:', {...e})
                dispatch(setError(error))
                dispatch(setStatus('failed'))
            })


    }

export const deletePackThunk = (_id: string) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>, getState: () => AppRootStateType) => {
        const pageSize = getState().packsPage.pageSize
        const currentPage = getState().packsPage.currentPage
        dispatch(setStatus('loading'))
        ApiPack.deleteCardPack(_id)
            .then(() => {
                dispatch(isDisabled(false))
                dispatch(getPacksThunk(pageSize, currentPage))
            })
            .catch(e => {
                const error = e.response.error
                    ? e.response.error
                    : (e.response.error + 'checkError')
                console.log(error)
                console.log('errors:', {...e})
                dispatch(setError(error))
                dispatch(setStatus('failed'))
            })
    }

export const onChangeNamePackThunk = ( _id: string, name: string) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>, getState: () => AppRootStateType) => {
        const pageSize = getState().packsPage.pageSize
        const currentPage = getState().packsPage.currentPage
        ApiPack.putCardPack({_id,name})
            .then ((res)=> {
                console.log(res)
                dispatch(getPacksThunk(pageSize,currentPage))
            })
            .catch(e => {
            const error = e.response.error
                ? e.response.error
                : (e.response.error + 'checkError')
            console.log(error)
            console.log('errors:', {...e})
            dispatch(setError(error))
            dispatch(setStatus('failed'))
        })
    }



const PacksPageReducer = (state: stateProps = initialState, action: Action<ResponseTypeCardsPacksData[] &
    RequestStatusType & ResponseTypeCardsPacksData & boolean & number>): stateProps => {
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
        case ActionType.SET_PAGE_SIZE:
            return {...state, pageSize: action.payload}
        case ActionType.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state
    }

}


type TypeActions = ReturnType<typeof getPacks> | ReturnType<typeof setStatus>
    | ReturnType<typeof setError> | ReturnType<typeof isDisabled>

export default PacksPageReducer