import React, {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import SuperInputText from "../../../Components/c1-SuperInputText/SuperInputText";
import Modal from "../../../Components/Modal/Modal";
import SuperButton from "../../../Components/c2-SuperButton/SuperButton";
import {onChangeNamePackThunk} from "../../../Redux/PacksPageReducer/PacksPageReducer";

interface Props {
    errorMes?: string
    namePack: string,
    id: string
}

const ChangeName: FC<Props> = ({id, namePack, errorMes}) => {

    const [name, setName] = useState<string>(namePack)
    const [modal, setModal] = useState<boolean>(false)
    const dispatch = useDispatch();

    const changeNameHandler = () => {
        if (name) {
            dispatch(onChangeNamePackThunk(id, name))
            setModal(false)
        }
    }
    return (
        <>
            <span onClick={() => setModal(true)}>Change name</span>
            <Modal
                modal={modal}
                setModal={setModal}
            >
                <SuperInputText
                    value={name}
                    onChangeText={setName}
                    placeholder={'New-Name'}

                />
                <SuperButton onClick={changeNameHandler}>Change Name</SuperButton>
                {!!errorMes ? <span>errorMes</span> : null}
            </Modal>
        </>
    );
};

export default ChangeName;