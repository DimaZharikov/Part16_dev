import React, {FC, useState} from 'react';
import SuperButton from '../../c2-SuperButton/SuperButton';
import Modal from '../Modal';
import style from './DeleteModal.module.scss'


interface Props {
    onDeleteCard: (id: string) => void
    id: string
}

const DeleteModal:FC<Props> = ({id,onDeleteCard}) => {

    const [modal, setModal] = useState<boolean>(false)



    return (
        <>
            <SuperButton onClick={() => setModal(true)} className='btn_table'>del</SuperButton>
            <Modal setModal={setModal} modal={modal}>
                <div className={style.delete_modal_wrapper}>
                    <h1 className={style.delete_modal_title}>Are you sure you want to delete it?</h1>
                    <div className={style.btn_group_delete}>
                        <SuperButton onClick={() => onDeleteCard(id)}>Yes</SuperButton>
                        <SuperButton onClick={() => setModal(false)}>No</SuperButton>
                    </div>
                </div>
            </Modal>
        </>

    );
};

export default DeleteModal;