import React, {FC} from "react";
import AddNewPack from "../../PagesApp/WrappedPages/PacksPage/AddNewPack/AddNewPack";

import style from './TableWrapper.module.scss'

interface Props {
    onClickHandler?: (name:string) => void,
    title1: string
    title2:string
    title3:string
    disabled?: boolean
}



const TableWrapper: FC<Props> = ({children, onClickHandler, title1, title2, title3, disabled}) => {
    const addNewName = (name:string) => {
        onClickHandler && onClickHandler(name)
    }
    return (
        <div className={style.main_wrapped}>
            <div className={style.table_wrapped}>
                <div className={style.title_wrapped}>
                    <div className={style.title_item}>{title1}</div>
                    <div className={style.title_item}>{title2}</div>
                    <div className={style.title_item}>{title3}</div>
                    <div className={style.title_item}>
                       <AddNewPack addNewName={addNewName} disabled={disabled ? disabled : false}/>
                    </div>

                </div>
                {children}
            </div>

        </div>
    )
}


export default TableWrapper