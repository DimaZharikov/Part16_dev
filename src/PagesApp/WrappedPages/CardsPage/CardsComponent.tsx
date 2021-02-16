import {FC} from "react";
import {ResponseTypeCardsData} from "../../../API/Api";

interface Props {
    cards: ResponseTypeCardsData
}

const CardsComponent: FC <Props> = ({ cards

}) => {


    return (<div>
        <h2>{cards.question}</h2>
    </div>)
}


export default CardsComponent