import React, {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {AppRootStateType} from "../../../Redux/Store";
import {ResponseTypeCardsData} from "../../../API/Api";
import CardsComponent from "./CardsComponent";
import TableWrapper from "../../../Components/TableWrapper/TableWrapper";
import {RequestStatusType} from "../../../Redux/AuthReducer/AuthReducer";
import Spinner from "../../../Common/preloader/Spinner";
import {addCardsThunk, deleteCardsThunk, onChangedCardsThunk} from "../../../Redux/CardsReducer/CardsReducer";


interface Props {

}


const CardsPageContainer: FC<Props> = ({...props}) => {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.cardsPage.status)
    const cards = useSelector<AppRootStateType, ResponseTypeCardsData[] | null>(state => state.cardsPage.cards)
    const error = useSelector<AppRootStateType, string | null> (state => state.cardsPage.error)
    const dispatch = useDispatch()

console.log(status, error)

        // cardsId - params from route for get Id from params
    const {cardId} = useParams<{ cardId: string }>()

    const onAddCard = (question: string) => {
        dispatch(addCardsThunk(cardId, question))
    }
    const onDeleteCard = (id: string) => {
        dispatch(deleteCardsThunk(cardId,id))
    }

    const onChangeNameQuestion = (id: string, question: string) => {
        dispatch(onChangedCardsThunk(cardId, id, question ))
    }

    return (<div>
                <div>{error}</div>
        <TableWrapper onClickHandler={onAddCard} >
            { status === "loading"? <Spinner /> : cards ?
                cards?.map((item) => {
                    return (<CardsComponent key={cardId} cards={item}
                                            onDeleteCard = {onDeleteCard}
                                            onChangeNameQuestion = {onChangeNameQuestion}
                    />)

                }) : null
            }

        </TableWrapper>

    </div>)
}
export default CardsPageContainer