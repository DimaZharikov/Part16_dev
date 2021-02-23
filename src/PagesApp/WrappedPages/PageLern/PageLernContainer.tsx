import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getCardsLearnThunk} from "../../../Redux/CardsGrade.reducer";
import {AppRootStateType} from "../../../Redux/Store";
import {ResponseTypeCardsData} from "../../../API/Api";
import LearnComponent from "./LearnComponent";


const PageLearnContainer : FC = ()  => {

    const dispatch = useDispatch()
    const data = useSelector<AppRootStateType, Array<ResponseTypeCardsData> | null>( state => state.cardsGrade.cards)
    const {id} = useParams<{ id: string }>()


    useEffect(() => {
        dispatch(getCardsLearnThunk(id))
    }, [])


    return <div>
      <LearnComponent data = {data}/>
    </div>
}


export default PageLearnContainer