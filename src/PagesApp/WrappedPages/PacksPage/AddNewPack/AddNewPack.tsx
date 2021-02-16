import React, {FC, useState} from 'react';
import Modal from "../../../../Components/Modal/Modal";
import SuperInputText from "../../../../Components/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../../Components/c2-SuperButton/SuperButton";


interface Props{
    addNewName: (name:string) => void
}

const AddNewPack:FC<Props> = (props) => {
    const [names, setNames] = useState<string>()
    const [modal, setModal] = useState<boolean>(false)
    const changeNameHandler = () => {
        if (names) {
            props.addNewName(names)
            setModal(false)
            setNames('')
        }
    }
    return (
        <>
            <SuperButton onClick={() => setModal(true)}>Add</SuperButton>
            <Modal
                modal={modal}
                setModal={setModal}
            >
                <SuperInputText
                    value={names}
                    onChangeText={setNames}
                    placeholder={'Name pack'}
                />
                <SuperButton onClick={changeNameHandler}>Add</SuperButton>
            </Modal>
        </>
    );
};

export default AddNewPack;