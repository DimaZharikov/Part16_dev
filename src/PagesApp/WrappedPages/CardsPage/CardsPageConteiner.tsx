import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getCardsThunk} from "../../../Redux/CardsReducer/CardsReducer";
import {AppRootStateType} from "../../../Redux/Store";
import {ResponseTypeCardsData} from "../../../API/Api";
import CardsComponent from "./CardsComponent";


interface Props {

}


const CardsPageContainer: FC<Props> = ({...props}) => {

    const page = useSelector<AppRootStateType, number>(state => state.cardsPage.page)
    const cards = useSelector<AppRootStateType, ResponseTypeCardsData[] | null>(state => state.cardsPage.cards)

    const dispatch = useDispatch()


    const {id} = useParams<{ id: string }>()
    useEffect(() => {
        dispatch(getCardsThunk(id))
    }, [id])

    return <div>
        {
            cards?.map(item => {
                return (<CardsComponent key={id} cards={item}/>)

            })
        }
    </div>
}


export default CardsPageContainer