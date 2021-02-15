import React, {FC} from "react";
import SuperButton from "../c2-SuperButton/SuperButton";

import style from './TableWrapper.module.scss'

interface Props {
    onClickHandler?: () => void
}



const TableWrapper: FC<Props> = ({children, onClickHandler}) => {

    return (
        <div className={style.main_wrapped}>
            <div className={style.table_wrapped}>
                <div className={style.title_wrapped}>
                    <div className={style.title_item}>Name</div>
                    <div className={style.title_item}>cardsCount</div>
                    <div className={style.title_item}>updated</div>
                    <div className={style.title_item}>
                        <SuperButton onClick={onClickHandler} className='btn_table'>Add</SuperButton>
                    </div>

                </div>
                {children}
            </div>

        </div>
    )
}


export default TableWrapper