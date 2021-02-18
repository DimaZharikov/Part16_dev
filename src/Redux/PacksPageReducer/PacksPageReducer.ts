import {ApiPack, ResponseTypeCardsPacksData} from "../../API/Api";
import {RequestStatusType} from "../AuthReducer/AuthReducer";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../Store";
import UseErrorCatch from "../../Utils/Hooks/useErrorCatch";


export interface stateProps {
    cardPacks: ResponseTypeCardsPacksData[] | null    
    error: string | undefined
    status: RequestStatusType,
    isDisabled: boolean,
    pageSize: number
    currentPage: number
    isPrivat: boolean
    cardPacksTotalCount: number | null
}


const initialState: stateProps = {
    cardPacks: null,
    status: "succeeded",
    error: undefined,
    isDisabled: false,
    pageSize: 4,
    currentPage: 1,
    isPrivat: false,
    cardPacksTotalCount: null

}


//Type
export enum ActionType {
    GET_PACKS = "/PACKS/GET_PACKS",
    SET_STATUS = "/PACKS/SET_STATUS",
    SET_ERROR = 'PACKS/SET_ERROR',
    IS_DISABLED = "PACKS/ADD_BTN/IS_DISABLED",
    IS_PRIVAT = "PACKS/CHECK/IS_PRIVAT",
    SET_PAGE_SIZE = "PACKS/SET_PAGE_SIZE",
    SET_CURRENT_PAGE = "PACKS/SET_CURRENT_PAGE",
    SET_PACKS_TOTAL_COUNT = "PACKS/SET_PACKS_TOTAL_COUNT",

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
export const seTisPrivat = (isPrivat: boolean): Action<boolean> => ({
    type: ActionType.IS_PRIVAT,
    payload: isPrivat
})
export const setPageSizeAC = (pageSize: number): Action<number> => ({
    type: ActionType.SET_PAGE_SIZE,
    payload: pageSize
})
export const setCurrentPageAC = (currentPage: number): Action<number> => ({
    type: ActionType.SET_CURRENT_PAGE,
    payload: currentPage
})
export const setTotalCount = (cardPacksTotalCount: number): Action<number> => ({
    type: ActionType.SET_PACKS_TOTAL_COUNT,
    payload: cardPacksTotalCount
})


//thunk


export const getPacksThunk = (pageSize:number,currentPage:number, user_id?: string, packName?: string) => (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>) => {
    dispatch(setStatus('loading'))
    ApiPack.getCardPacks(pageSize, currentPage, user_id, packName)
        .then(res => {
            console.log(res.data)
            dispatch(isDisabled(false))
            dispatch(getPacks(res.data.cardPacks))
            dispatch(setTotalCount(res.data.cardPacksTotalCount))
            dispatch(setStatus('succeeded'))
        })
        .catch(e => {
            UseErrorCatch(e, dispatch)

        })
        .finally(() => {
            dispatch(setStatus('succeeded'))
        })

}

export const addPacksThunk = (name:string) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>, getState: () => AppRootStateType) => {
        dispatch(setStatus('loading'))
        const pageSize = getState().packsPage.pageSize
        const currentPage = getState().packsPage.currentPage
        const isPrivat = getState().packsPage.isPrivat
        const profile = getState().profile.profile
        ApiPack.addCardPacks({name})
            .then(() => {
                dispatch(isDisabled(true))
                if(isPrivat && profile) {
                    dispatch(getPacksThunk(pageSize,currentPage, profile._id))
                } else {
                    dispatch(getPacksThunk(pageSize,currentPage))
                }


            })
            .catch(e => {
                UseErrorCatch(e, dispatch)
            })


    }

export const deletePackThunk = (_id: string) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>, getState: () => AppRootStateType) => {
        const pageSize = getState().packsPage.pageSize
        const currentPage = getState().packsPage.currentPage
        const isPrivat = getState().packsPage.isPrivat
        const profile = getState().profile.profile
        dispatch(setStatus('loading'))
        ApiPack.deleteCardPack(_id)
            .then(() => {
                dispatch(isDisabled(false))
                if(isPrivat && profile) {
                    dispatch(getPacksThunk(pageSize,currentPage, profile._id))
                } else {
                    dispatch(getPacksThunk(pageSize,currentPage))
                }
            })
            .catch(e => {
                UseErrorCatch(e, dispatch)
            })
    }

export const onChangeNamePackThunk = ( _id: string, name: string) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>, getState: () => AppRootStateType) => {
        const pageSize = getState().packsPage.pageSize
        const currentPage = getState().packsPage.currentPage
        const isPrivat = getState().packsPage.isPrivat
        const profile = getState().profile.profile
        ApiPack.putCardPack({_id,name})
            .then (()=> {
                if(isPrivat && profile) {
                    dispatch(getPacksThunk(pageSize,currentPage, profile._id))
                } else {
                    dispatch(getPacksThunk(pageSize,currentPage))
                }

            })
            .catch(e => {
                UseErrorCatch(e, dispatch)
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
        case ActionType.IS_PRIVAT:
            return {...state, isPrivat: action.payload}
        case ActionType.SET_PACKS_TOTAL_COUNT:
            return {...state, cardPacksTotalCount: action.payload}
        default:
            return state
    }

}


type TypeActions = ReturnType<typeof getPacks> | ReturnType<typeof setStatus>
    | ReturnType<typeof setError> | ReturnType<typeof isDisabled> | ReturnType<typeof setCurrentPageAC>

export default PacksPageReducer