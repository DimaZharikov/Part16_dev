import React, {FC} from "react";
import {ResponseTypeCardsPacksData} from "../../../API/Api";
import style from './Packs.module.scss'
import {useDispatch} from "react-redux";
import ChangeName from "./ChengeNameInput";
import SuperButton from "../../../Components/c2-SuperButton/SuperButton";
import { NavLink } from "react-router-dom";
import TableItem from "../../../Components/TableWrapper/TableIttem/TableItem";
import {getCardsThunk} from "../../../Redux/CardsReducer/CardsReducer";
import {onChangeNamePackThunk} from "../../../Redux/PacksPageReducer/PacksPageReducer";


interface Props{
    cardPacks: ResponseTypeCardsPacksData
    onDeletePack: (id: string) => void
}

const PacksComponent: FC <Props> = ({
                                        onDeletePack, cardPacks
}) => {



    const dispatch = useDispatch()

    const onChangeNamePack = (id: string, name: string) => {
        dispatch(onChangeNamePackThunk(id, name))
    }



    return (
        < >
            <TableItem name1={cardPacks.name} name2={cardPacks.cardsCount} name3={cardPacks.updated}>
                <SuperButton onClick={() => onDeletePack(cardPacks._id)} className='btn_table'>del</SuperButton>
                <ChangeName namePack={cardPacks.name} cardsPack_id={cardPacks._id}
                            onChangeName = {onChangeNamePack}/>
                <NavLink className={style.arrow_1} to={`/cards/${cardPacks._id}`}
                > Cards <div></div> </NavLink>
            </TableItem>

        </>

    )
}


export default PacksComponent