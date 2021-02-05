import {FC, useState} from "react";
import AuthComponent from "./AuthComponent";
import SuperInputText from "../../../Components/c1-SuperInputText/SuperInputText";


interface Props {

}

const AuthContainer: FC<Props> =
    ({
         ...props
     }) => {

        const [login, setLogin] = useState<string>()
        const [errorLog, setErrorLog] = useState<boolean>(false)
        const [password, setPassword] = useState<string>()
        const [errorMesLog, setErrorMesLog] = useState<string>('Login Required')
        const [errorMesPas, setErrorMesPas] = useState<string>('Password Required')
        const [errorPas, setErrorPas] = useState<boolean>(false)


        const validateInputLog = (value:string) => {
            setLogin(value)
            if (value.trim() === '') {
                setErrorMesLog('Login Required')
                setErrorLog(true)
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
            } else if (value.length < 6){
                setErrorPas(true)
                setErrorMesPas('must be greater than 5')

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
                />
            </div>)
    }


export default AuthContainer