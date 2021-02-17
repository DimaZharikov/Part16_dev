import React, { FC, useState } from 'react';
import SuperInputText from '../c1-SuperInputText/SuperInputText';
import SuperButton from '../c2-SuperButton/SuperButton';

interface Props {
    onSerch: (value:string) => void
    placeholderInput: string
    placeholderBtn: string
    classNameInput: string

}



const SerchPanel:FC<Props> = ({onSerch, placeholderInput, placeholderBtn, classNameInput}) => {
    const [name, setName] = useState<string>('')

    const changeNameHandler = () => {
        if (name) {
            onSerch(name)
        } else {
            setName('')
        }
    }

    return (
        <>
            <SuperInputText
                onChangeText={setName}
                placeholder={placeholderInput}
                className={classNameInput}
            />
            <SuperButton onClick={changeNameHandler}>{placeholderBtn}</SuperButton>
        </>
    );
};

export default SerchPanel;