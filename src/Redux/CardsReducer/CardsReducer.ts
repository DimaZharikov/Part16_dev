import {ApiCards, ResponseTypeCardsData} from "../../API/Api";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../Store";
import {RequestStatusType} from "../AuthReducer/AuthReducer";
import UseErrorCatch from "../../Utils/Hooks/useErrorCatch";


export interface stateProps {
    cards: Array<ResponseTypeCardsData> | null
    status: RequestStatusType,
    error: string | null,
    pageSize: number
    pageCurrent: number

}


const initialState: stateProps = {
    cards: null,
    status: "succeeded",
    error: null,
    pageSize: 3,
    pageCurrent:1


}


//Type
export enum ActionType {
    GET_CARDS = "CardsContainer/GET_CARDS",
    SET_STATUS = "CardsContainer/SET_STATUS",

    SET_ERROR = "CardsContainer/SET_ERROR",
    SET_PAGE_SIZE = "CardsContainer/SET_PAGE_SIZE",
    SET_CURRENT_PAGE = "CardsContainer/SET_CURRENT_PAGE"
}


//actions

interface Action<T> {
    type: ActionType,
    payload: T

}

export const setCards = (cards: Array<ResponseTypeCardsData> | null): Action<Array<ResponseTypeCardsData> | null> => ({
    type: ActionType.GET_CARDS,
    payload: cards
})
export const setPageSizeAC = (pageSize: number): Action<number> => ({
    type: ActionType.SET_PAGE_SIZE,
    payload: pageSize
})
export const setCurrentPageAC = (pageCurrent: number): Action<number> => ({
    type: ActionType.SET_CURRENT_PAGE,
    payload: pageCurrent
})


export const setStatus = (status: RequestStatusType): Action<RequestStatusType> => ({
    type: ActionType.SET_STATUS,
    payload: status
})


export const getError = (error: string): Action<string> => ({
    type: ActionType.SET_ERROR,
    payload: error
})

//thunk
export const getCardsThunk = (pageSize:number,currentPage:number, cardsPack_id: string) => (dispatch: ThunkDispatch<AppRootStateType, {}, ActionsType>) => {
    dispatch(setStatus('loading'))
    ApiCards.getCards(cardsPack_id, pageSize, currentPage)
        .then((res) => {
            console.log('cards:', res.data.cards)



            dispatch(setCards(res.data.cards))
            dispatch(setStatus('succeeded'))
        })
        .catch((e) => {
            UseErrorCatch(e, dispatch)
        })
        .finally(() => {
        dispatch(setStatus('succeeded'))
    })
};

export const addCardsThunk = (cardsPack_id: string, question: string) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, ActionsType>, getState: () => AppRootStateType) => {
        const pageSize = getState().cardsPage.pageSize
        const currentPage = getState().cardsPage.pageCurrent
        dispatch(setStatus('loading'))
        ApiCards.addCards(cardsPack_id, question)
            .then(() => {
                dispatch(getCardsThunk(pageSize, currentPage, cardsPack_id))
            })
            .catch((e) => {
                UseErrorCatch(e, dispatch)
            })

    }


export const deleteCardsThunk = (cardsPack_id: string,_id: string) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, ActionsType>, getState: () => AppRootStateType) => {
        const pageSize = getState().cardsPage.pageSize
        const currentPage = getState().cardsPage.pageCurrent
        dispatch(setStatus('loading'))
        ApiCards.deleteCards(_id)
            .then(() => {
                dispatch(getCardsThunk(pageSize, currentPage, cardsPack_id))
            })
            .catch(e => {
                UseErrorCatch(e, dispatch)
            })
    }


    export const onChangedCardsThunk = (cardsPack_id: string,_id: string, question: string)=>
        (dispatch: ThunkDispatch<AppRootStateType, {}, ActionsType>, getState: () => AppRootStateType) => {
            const pageSize = getState().cardsPage.pageSize
            const currentPage = getState().cardsPage.pageCurrent
            dispatch(setStatus('loading'))
            ApiCards.putCards(_id, question)
                .then(()=> {
                    dispatch(getCardsThunk(pageSize, currentPage, cardsPack_id))
                })
                .catch(e => {
                UseErrorCatch(e, dispatch)
            })
        }


const CardsReducer = (state: stateProps = initialState,
                      action: Action<ResponseTypeCardsData[] & string
                          & RequestStatusType & number>): stateProps => {
    switch (action.type) {
        //get cards from API
        case ActionType.GET_CARDS:
            return {
                ...state, cards: action.payload
            }

        //status
        case ActionType.SET_STATUS:
            return {
                ...state, status: action.payload
            };
        //error
        case ActionType.SET_ERROR:
            return {...state, error: action.payload}
        case ActionType.SET_CURRENT_PAGE:
            return {...state, pageCurrent: action.payload}
        case ActionType.SET_PAGE_SIZE:
            return {...state, pageSize:action.payload}

        default:
            return state
    }

}


type  ActionsType = ReturnType<typeof setCards> | ReturnType<typeof setStatus> |
    ReturnType<typeof getError>


export default CardsReducer