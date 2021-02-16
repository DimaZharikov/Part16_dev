import {ApiCards, ResponseTypeCardsData} from "../../API/Api";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../Store";
import {RequestStatusType} from "../AuthReducer/AuthReducer";


export interface stateProps {
    cards: Array<ResponseTypeCardsData> | null
    status: RequestStatusType,
    error?: string ,
    page: number,

}


const initialState: stateProps = {
    cards: null,
    status: "succeeded",
    page: 1,



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

export const error = (error: string): Action<string> => ({
    type: ActionType.SET_ERROR,
    payload: error
})

//thunk
export const getCardsThunk = ( cardsPack_id: string) => (dispatch: ThunkDispatch<AppRootStateType, {}, ActionsType>)  => {
    dispatch (setStatus('loading'))
    ApiCards.getCards(cardsPack_id)
        .then ((res) => {
            console.log('cards:',res.data.cards)
            dispatch(setCards(res.data.cards))
            dispatch(setStatus('succeeded'))
        })
        .catch((e)=> {
            const error = e.response.error
            ? e.response.error : (e.response.error + 'error')
            console.log(error)
            console.log('errors:', {...e})
            dispatch(setStatus("failed"))
        })
}



const CardsReducer = (state: stateProps = initialState,
                      action: Action<ResponseTypeCardsData[] & string
                          & RequestStatusType>): stateProps => {
    switch (action.type) {
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
            return { ...state, error: action.payload}


        default:
            return state
    }

}


type  ActionsType= ReturnType<typeof setCards> | ReturnType<typeof setStatus>


export default CardsReducer