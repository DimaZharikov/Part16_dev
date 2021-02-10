import React, {FC, useState} from "react";
import SuperInputText from "../../../Components/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../Components/c2-SuperButton/SuperButton";
import Spinner from "../../../Common/preloader/Spinner";

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/Store";
import {validateInputNewPas} from "../../../Utils/Validation/ValidationPassword";
import {ChangePassword} from "../../../Redux/NewPassReducer/NewPassReducer";
import {useHistory} from "react-router-dom";


interface Props {

}

const NewPasswordContainer : FC<Props>  = () => {
    const [password, setPassword] = useState<string>()
    const [errorMesPas, setErrorMesPas] = useState<string>('Password Required')
    const [errorPas, setErrorPas] = useState<boolean>(false)
    const errorMes = useSelector((state: AppRootStateType) => state.newPas.errorMes)
    const loading = useSelector((state: AppRootStateType) => state.newPas.loading)

    const dispatch = useDispatch()


    const history = useHistory()
    const regUrl = /(\/.+\/)/gm

    const token = history.location.pathname.replace(regUrl, "")



    const changePasswordValue = (value:string) => {
        validateInputNewPas(setPassword,value, setErrorMesPas, setErrorPas)
    }
    const changePasswordHandler = () => {
        if (password) {
            dispatch(ChangePassword(password, token))
        }
        setPassword('')
    }

    return(
        <div>
        <SuperInputText
            value={password}
            onChangeText={changePasswordValue}
            placeholder={'New Password'}
            error={errorPas}
            errorMes={errorMesPas}
            setError={setErrorPas}
            type={'password'}
        />
        <SuperButton onClick={changePasswordHandler} disabled={loading}>Change password</SuperButton>
        {loading? <Spinner/> : null}
        {!!errorMes ? <span>errorMes</span> : null}
    </div>)
}


export default NewPasswordContainer