import React, {FC} from "react";
import {ResponseTypeCardsPacksData} from "../../../API/Api";
import style from './Packs.module.scss'
import {useDispatch} from "react-redux";
import ChangeName from "./ChangeNameInput";
import {NavLink} from "react-router-dom";
import TableItem from "../../../Components/TableWrapper/TableIttem/TableItem";
import {onChangeNamePackThunk} from "../../../Redux/PacksPageReducer/PacksPageReducer";
import DeleteModal from "../../../Components/Modal/DeleteModal/DeleteModal";


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
                <DeleteModal onDeleteCard={onDeletePack} id={cardPacks._id}/>
                <ChangeName namePack={cardPacks.name} cardsPack_id={cardPacks._id}
                            onChangeName = {onChangeNamePack}/>
                <NavLink className={style.arrow_1} to={`/cards/${cardPacks._id}`}
                > Cards <div/> </NavLink>
            </TableItem>

        </>

    )
}


export default PacksComponent