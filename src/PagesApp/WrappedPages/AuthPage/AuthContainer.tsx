import {FC, useState} from "react";
import AuthComponent from "./AuthComponent";
import SuperInputText from "../../../Components/c1-SuperInputText/SuperInputText";
import {useDispatch} from "react-redux";
import {setLoginAC} from "../../../Redux/AuthReducer/AuthReducer";


interface Props {

}

const AuthContainer: FC<Props> =
    ({
         ...props
     }) => {
        const reEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        const rePassword = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/;
        const [login, setLogin] = useState<string>()
        const [errorLog, setErrorLog] = useState<boolean>(false)
        const [password, setPassword] = useState<string>()
        const [errorMesLog, setErrorMesLog] = useState<string>('Login Required')
        const [errorMesPas, setErrorMesPas] = useState<string>('Password Required')
        const [errorPas, setErrorPas] = useState<boolean>(false)
        const dispatch = useDispatch()
        const validateInputLog = (value:string) => {
            setLogin(value)
            if (value.trim() === '') {
                setErrorMesLog('Login Required')
                setErrorLog(true)

            } else if (!reEmail.test(value)){
                setErrorLog(true)
                setErrorMesLog('Login invalid')
            } else {
                setErrorMesLog('')
                setErrorLog(false)
            }
        }
        const validateInputPas = (value:string) => {
            setPassword(value)
            if (value.trim() === '') {
                setErrorMesPas('Password Required')
                setErrorPas(true)
            } else if (!rePassword.test(value)){
                console.log(rePassword.test(value))
                setErrorPas(true)
                setErrorMesPas('the password must contain one digit, and length must be 6 and more')

            } else {
                setErrorMesPas('')
                setErrorPas(false)
            }

        }

        return (

            <div>
                <h3>Login</h3>
                <SuperInputText
                    value={login}
                    onChangeText={validateInputLog}
                    error={errorLog}
                    placeholder={'Login'}
                    errorMes={errorMesLog}
                    setError={setErrorLog}

                />
                <SuperInputText
                    value={password}
                    onChangeText={validateInputPas}
                    error={errorPas}
                    placeholder={'Password'}
                    errorMes={errorMesPas}
                    setError={setErrorPas}
                    type={'password'}
                />
            </div>)
    }


export default AuthContainer