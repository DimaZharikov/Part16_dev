import React, {FC} from "react";
import AddNewPack from "../../PagesApp/WrappedPages/PacksPage/AddNewPack/AddNewPack";

import style from './TableWrapper.module.scss'

interface Props {
    onClickHandler?: (name:string) => void
}



const TableWrapper: FC<Props> = ({children, onClickHandler}) => {
    const addNewName = (name:string) => {
        onClickHandler && onClickHandler(name)
    }
    return (
        <div className={style.main_wrapped}>
            <div className={style.table_wrapped}>
                <div className={style.title_wrapped}>
                    <div className={style.title_item}>Name</div>
                    <div className={style.title_item}>cardsCount</div>
                    <div className={style.title_item}>updated</div>
                    <div className={style.title_item}>
                       <AddNewPack addNewName={addNewName}/>
                    </div>

                </div>
                {children}
            </div>

        </div>
    )
}


export default TableWrapper