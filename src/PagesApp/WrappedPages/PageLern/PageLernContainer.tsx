
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/Store";
import {ResponseTypeCardsGradeType} from "../../../API/Api";

import {FC, useEffect} from "react";
import {getCardsGrade} from "../../../Redux/CardsGrade.reducer";
import {useParams} from "react-router-dom";


const PageLearnContainer : FC = ()  => {
    const CardsGrade = useSelector<AppRootStateType, ResponseTypeCardsGradeType | null>(state => state.cardsGrade.date);


    const dispatch = useDispatch()
    const {id} = useParams<{ id: string }>()
    useEffect(()=> {
        dispatch(getCardsGrade(id, CardsGrade?.grade))
    },[])
    return <div>
        <h1>{CardsGrade?.shots}</h1>
    </div>
}


export default PageLearnContainer