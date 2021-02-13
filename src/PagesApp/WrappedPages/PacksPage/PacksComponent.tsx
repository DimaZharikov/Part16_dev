import {FC} from "react";
import {ResponseTypeCardsPacksData} from "../../../API/Api";
import style from './Packs.module.scss'
import {useDispatch} from "react-redux";
import ChangeName from "./ChengeNameInput";


interface Props{
    cardPacks: ResponseTypeCardsPacksData
    onDeletePack: (id: string) => void
}

const PacksComponent: FC <Props> = ({
                                        onDeletePack, cardPacks
}) => {

    const dispatch = useDispatch()



    return (<div className={style.items}>
        <ChangeName namePack = {cardPacks.name} id= {cardPacks._id}/>
        <h3>name: {cardPacks.name}</h3>
        <h3> cards Count: {cardPacks.cardsCount}</h3>
        <h3> Update: {cardPacks.updated}</h3>
        <h3> Created:{cardPacks.created}</h3>
        <button onClick = {(e)=>onDeletePack(cardPacks._id)}>delete</button>


</div>)
}


export default PacksComponent