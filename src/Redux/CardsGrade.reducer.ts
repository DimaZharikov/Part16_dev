import {ApiCards, ApiLearn, ResponseTypeCardsData} from "../API/Api";
import {RequestStatusType} from "./AuthReducer/AuthReducer";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./Store";
import HelperErrorCatch from "../Utils/Helpers/HelperErrorCatch";


interface stateProps {
    cards: Array<ResponseTypeCardsData> | null
    status: RequestStatusType,
    error: string | null,
}


const initialState: stateProps = {
    cards: null,
    status: "succeeded",
    error: null
}


export enum ActionType {
    SET_CARDS_LEARN= 'SN/LEARN_PAGE/SET_CARDS_LEARN',
    SET_STATUS_LEARN = 'SN/LEARN_PAGE/SET_STATUS_LEARN/',
    SET_ERROR_LEARN = 'SN/LEARN_PAGE/SET_ERROR_LEARN'
}


interface Action<T> {
    type: ActionType,
    payload: T
}


//ActionCreator

export const setCards = (cards: ResponseTypeCardsData[] | null) : Action<ResponseTypeCardsData[] | null> => ({
    type: ActionType.SET_CARDS_LEARN,
    payload: cards
})

export const setStatus = (status: RequestStatusType) : Action<RequestStatusType> => ({
    type: ActionType.SET_STATUS_LEARN,
    payload: status
})

export const setError = (error:string| null):Action<string|null>=>({
    type:ActionType.SET_ERROR_LEARN,
    payload:error
})


export const getCardsLearnThunk = (cardsPack_id: string) =>
    (dispatch: ThunkDispatch<AppRootStateType, {}, ActionsType>) => {
    dispatch(setStatus('loading'))
    ApiLearn.getCardsLearn(cardsPack_id)
        .then((res) => {
            console.log('cards:', res.data)
            dispatch(setCards(res.data.cards))
            dispatch(setStatus('succeeded'))
        })
        .catch((e) => {
            HelperErrorCatch(e, dispatch)
        })
        .finally(() => {
            dispatch(setStatus('succeeded'))
        })
};






const CardsGradeReducer = (state: stateProps = initialState, action: Action<ResponseTypeCardsData[] & RequestStatusType>): stateProps => {
    switch (action.type) {
        case ActionType.SET_CARDS_LEARN:
            return {...state, cards: action.payload}
        case ActionType.SET_STATUS_LEARN:
            return {...state, status: action.payload}
        case ActionType.SET_ERROR_LEARN:
            return {...state, error: action.payload}

        default:
            return state
    }
}

export type ActionsType = ReturnType<typeof setCards> |
    ReturnType<typeof setError> | ReturnType<typeof setStatus>


export default CardsGradeReducer