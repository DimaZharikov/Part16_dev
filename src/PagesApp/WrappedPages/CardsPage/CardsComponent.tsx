import React, {FC, Fragment} from "react";
import {ResponseTypeCardsData} from "../../../API/Api";
import TableItem from "../../../Components/TableWrapper/TableIttem/TableItem";
import SuperButton from "../../../Components/c2-SuperButton/SuperButton";

import ChangeName from "../PacksPage/ChengeNameInput";

interface Props {
    cards: ResponseTypeCardsData,
    onDeleteCard: (id: string) => void
    onChangeNameQuestion: (cardId: string,question:string) => void
}

const CardsComponent: FC <Props> = ({ cards, onDeleteCard, onChangeNameQuestion

}) => {


    return (<Fragment>
        <TableItem name1={cards.question} name2={cards.rating} name3={cards.updated}>
            <SuperButton onClick={() => onDeleteCard(cards._id)} className='btn_table'>del</SuperButton>
            <ChangeName namePack={cards.question}
                        cardsPack_id={cards._id}
                        onChangeName = {onChangeNameQuestion}
            />
        </TableItem>

    </Fragment>)
}


export default CardsComponent