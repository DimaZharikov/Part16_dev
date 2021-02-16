import {ApiCards, ResponseTypeCardsData} from "../../API/Api";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../Store";
import {RequestStatusType} from "../AuthReducer/AuthReducer";
import UseErrorCatch from "../../Utils/Hooks/useErrorCatch";


export interface stateProps {
    cards: Array<ResponseTypeCardsData> | null
    status: RequestStatusType,
    error: string | null,


}


const initialState: stateProps = {
    cards: null,
    status: "succeeded",
    error: null,


}


//Type
export enum ActionType {
    GET_CARDS = "CardsContainer/GET_CARDS",
    SET_STATUS = "CardsContainer/SET_STATUS",

    SET_ERROR = "CardsContainer/SET_ERROR",

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


export const setStatus = (status: RequestStatusType): Action<RequestStatusType> => ({
    type: ActionType.SET_STATUS,
    payload: status
})


export const getError = (error: string): Action<string> => ({
    type: ActionType.SET_ERROR,
    payload: error
})

//thunk
export const getCardsThunk = (cardsPack_id: string, question?: string, _id?: string) => (dispatch: ThunkDispatch<AppRootStateType, {}, ActionsType>) => {
    dispatch(setStatus('loading'))
    ApiCards.getCards(cardsPack_id)
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
    (dispatch: ThunkDispatch<AppRootStateType, {}, ActionsType>) => {
        dispatch(setStatus('loading'))
        ApiCards.addCards(cardsPack_id, question)
            .then(() => {
                dispatch(getCardsThunk(cardsPack_id, question))
                dispatch(setStatus('succeeded'))
            })
            .catch((e) => {
                UseErrorCatch(e, dispatch)
            })

    }


export const deleteCardsThunk = (cardsPack_id: string,_id: string) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, ActionsType>) => {
        dispatch(setStatus('loading'))
        ApiCards.deleteCards(_id)
            .then(() => {
                dispatch(getCardsThunk(cardsPack_id,_id))
                dispatch(setStatus('succeeded'))
            })
            .catch(e => {
                UseErrorCatch(e, dispatch)
            })
    }


    export const onChangedCardsThunk = (cardsPack_id: string,_id: string, question: string)=>
        (dispatch: ThunkDispatch<AppRootStateType, {}, ActionsType>) => {
            dispatch(setStatus('loading'))
            ApiCards.putCards(_id, question)
                .then(()=> {
                    dispatch(getCardsThunk(cardsPack_id,_id,question))
                    dispatch(setStatus('succeeded'))

                })
                .catch(e => {
                UseErrorCatch(e, dispatch)
            })
        }


const CardsReducer = (state: stateProps = initialState,
                      action: Action<ResponseTypeCardsData[] & string
                          & RequestStatusType>): stateProps => {
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


        default:
            return state
    }

}


type  ActionsType = ReturnType<typeof setCards> | ReturnType<typeof setStatus> |
    ReturnType<typeof getError>


export default CardsReducer