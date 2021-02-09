import {FC, useState} from "react";
import SuperInputText from "../../../Components/c1-SuperInputText/SuperInputText";
import {useDispatch, useSelector} from "react-redux";
import SuperCheckbox from "../../../Components/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../Components/c2-SuperButton/SuperButton";
import style from './AuthContainer.module.css'
import {AppRootStateType} from "../../../Redux/Store";
import {Redirect, NavLink} from "react-router-dom";
import {setLoginT} from "../../../Redux/AuthReducer/AuthReducer";
import Spinner from "../../../Common/preloader/Spinner";
import {RoutingType} from "../../../Routes/Routes";

interface Props {

}

const AuthContainer: FC<Props> = () => {
    const reEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const rePassword = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/;
    const [email, setEmail] = useState<string>()
    const [errorLog, setErrorLog] = useState<boolean>(false)
    const [password, setPassword] = useState<string>()
    const [errorMesLog, setErrorMesLog] = useState<string>('Login Required')
    const [errorMesPas, setErrorMesPas] = useState<string>('Password Required')
    const [errorPas, setErrorPas] = useState<boolean>(false)
    const [check, setCheck] = useState<boolean>(false)
    const isLogin = useSelector((state: AppRootStateType) => state.auth.isLogin)
    const status = useSelector((state: AppRootStateType) => state.auth.status)
    const profile = useSelector((state: AppRootStateType) => state.profile.profile)
    console.log(profile)
    const dispatch = useDispatch()
    const validateInputLog = (value: string) => {
        setEmail(value)
        if (value.trim() === '') {
            setErrorMesLog('Login Required')
            setErrorLog(true)

        } else if (!reEmail.test(value)) {
            setErrorLog(true)
            setErrorMesLog('Login invalid')
        } else {
            setErrorMesLog('')
            setErrorLog(false)
        }
    }
    const validateInputPas = (value: string) => {
        setPassword(value)
        if (value.trim() === '') {
            setErrorMesPas('Password Required')
            setErrorPas(true)
        } else if (!rePassword.test(value)) {
            console.log(rePassword.test(value))
            setErrorPas(true)
            setErrorMesPas('the password must contain one digit, and length must be 6 and more')

        } else {
            setErrorMesPas('')
            setErrorPas(false)
        }

    }

    const logHandler = () => {

        if (email && password) {
            dispatch(setLoginT(email, password, check))
        }

    }

    if (isLogin) {
        return <Redirect to={'/profile'}/>
    }



    return (
        <div className={style.container}>
            <div className={style.auth_main}>
                <h3>Login</h3>
                <div className={style.auth_wrapper}>
                    <div className={style.input_block}>
                        <SuperInputText
                            value={email}
                            onChangeText={validateInputLog}
                            error={errorLog}
                            placeholder={'E-mail'}
                            errorMes={errorMesLog}
                            setError={setErrorLog}
                            className={'otherInput'}

                        />
                        <SuperInputText
                            value={password}
                            onChangeText={validateInputPas}
                            error={errorPas}
                            placeholder={'Password'}
                            errorMes={errorMesPas}
                            setError={setErrorPas}
                            type={'password'}
                            className={'otherInput'}
                        />
                        <div className={style.auth_link}>
                            <span><NavLink to={RoutingType.newPass}>Registration</NavLink></span>
                            <span><NavLink to={RoutingType.resPass}>Forgot Pas?</NavLink></span>
                        </div>
                    </div>
                    <div className={style.btn_check}>
                        <SuperCheckbox
                            onChangeChecked={setCheck}
                        > Remember </SuperCheckbox>
                        <SuperButton
                            onClick={logHandler}
                            disabled={status === 'loading'}
                        >
                            Login
                        </SuperButton>
                    </div>
                </div>
                {
                    status === 'loading'
                        ? <Spinner/>
                        : status === 'failed'
                        ? <div>
                        <h1>something wrong</h1></div>
                        : ''
                }
            </div>
        </div>
    )

}


export default AuthContainer