import React, {FC} from "react";
import {ResponseTypeCardsPacksData} from "../../../API/Api";
import style from './Packs.module.scss'
import {useDispatch} from "react-redux";
import ChangeName from "./ChengeNameInput";
import SuperButton from "../../../Components/c2-SuperButton/SuperButton";
import { NavLink } from "react-router-dom";
import TableItem from "../../../Components/TableWrapper/TableIttem/TableItem";


interface Props{
    cardPacks: ResponseTypeCardsPacksData
    onDeletePack: (id: string) => void
}

const PacksComponent: FC <Props> = ({
                                        onDeletePack, cardPacks
}) => {

    const dispatch = useDispatch()



    return (
        < >
            <TableItem name1={cardPacks.name} name2={cardPacks.cardsCount} name3={cardPacks.updated}>
                <SuperButton onClick={() => onDeletePack(cardPacks._id)} className='btn_table'>del</SuperButton>
                <ChangeName namePack={cardPacks.name} id={cardPacks._id}/>
                <NavLink to={`/cards/${cardPacks._id}`}> Cards </NavLink>
            </TableItem>

        </>

    )
}


export default PacksComponent