import {ApiCardsGrade, ResponseTypeCardsGradeType} from "../API/Api";
import {RequestStatusType} from "./AuthReducer/AuthReducer";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./Store";
import HelperErrorCatch from "../Utils/Helpers/HelperErrorCatch";

interface stateProps {
    date: ResponseTypeCardsGradeType | null;
    status: RequestStatusType,
    error?: string
}


const initialState: stateProps = {
    date: null,
    status: "succeeded"
}


export enum ActionType {
    SET_CARDS_GRADE = "CARDS_GRADE/SET_CARDS_GRADE",
    SET_STATUS = "CARDS_GRADE/SET_STATUS",
    SET_ERROR = "CARDS_GRADE/ERROR"
}


interface Action<T> {
    type: ActionType,
    payload: T
}


//ActionCreator

export const setCardsGradeAC = (cardsGrade: ResponseTypeCardsGradeType): Action<ResponseTypeCardsGradeType> => ({
    type: ActionType.SET_CARDS_GRADE,
    payload: cardsGrade
})

export const setError = (error: string): Action<string> => ({
    type: ActionType.SET_ERROR,
    payload: error
})

export const setStatusAC = (status: RequestStatusType): Action<RequestStatusType> => ({
    type: ActionType.SET_STATUS,
    payload: status
})

//THUNK

export const getCardsGrade = (card_id: string, grade?: number) => (dispatch: ThunkDispatch<AppRootStateType, {}, TypeActions>) => {
    dispatch(setStatusAC("loading"))
    ApiCardsGrade.putCardsGrade(card_id, grade)
        .then(
            (res) => {
                console.log(res)
                dispatch(setCardsGradeAC(res.data))
            }
        )
        .catch(rej => {
            HelperErrorCatch(rej, dispatch)
        })
}


const CardsGradeReducer = (state: stateProps = initialState, action: Action<ResponseTypeCardsGradeType & RequestStatusType>): stateProps => {
    switch (action.type) {
        case ActionType.SET_CARDS_GRADE:
            return {...state, date: action.payload};
        case ActionType.SET_STATUS:
            return {...state, status: action.payload};
        case ActionType.SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}

export type TypeActions =
    ReturnType<typeof setCardsGradeAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setError>

export default CardsGradeReducer