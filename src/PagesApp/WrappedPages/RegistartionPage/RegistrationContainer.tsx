import {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/Store";
import {RequestStatusType} from "../../../Redux/AuthReducer/AuthReducer";
import {Redirect} from "react-router-dom";
import {RoutingType} from "../../../Routes/Routes";
import Spinner from "../../../Common/preloader/Spinner";
import SuperInputText from "../../../Components/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../Components/c2-SuperButton/SuperButton";
import {ResponseTypeRegistration} from "../../../API/Api";
import {putData} from "../../../Redux/RegistrationReducer/RegistartionReducer";


interface Props {

}

const RegistrationContainer: FC<Props> = ({
                                              ...props
                                          }) => {
    //reducer variable
    const isRegistration = useSelector<AppRootStateType, boolean>(state => state.registration.isRegistration);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.registration.status);
    const data = useSelector<AppRootStateType, ResponseTypeRegistration>(state => state.registration.data)
    const dispatch = useDispatch()


    //validate Email with Password
    const reEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const rePassword = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/;


    //values of Email, Password, Confirm Password
    const [email, setEmail] = useState<string>(data.email)
    const [password, setPassword] = useState<string>(data.password)
    const [confirmPassword, setConfirmPassword] = useState<string>()


    //isValid of Email, Password, Confirm Password
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false)
    const [isValidPassword, setIsValidPassword] = useState<boolean>(false)
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState<boolean>(false)


    //Error
    const [errorEmail, setErrorEmail] = useState<string>('Login Required')
    const [errorPassword, setErrorPassword] = useState<string>('Password must be with number and A-Z, a-z letters, length must be 6 and more')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState<string>('passwords must match')

    // Disabled btn for Reg. if email & password & confirmPassword  is Valid => false
    const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true)


    //validate for Email
    const isValidateEmailReg = (value: string) => {
        setEmail(value)
        if (value.trim() === '') {
            setErrorEmail('Email is Required')
            setIsValidEmail(true)
        } else
            // if value inValid of reEmail
        if (!reEmail.test(value)) {
            setErrorEmail('Invalid Email')
            setIsValidEmail(true)
        } else {
            // else value email valid of reEmail
            setErrorEmail('')
            setIsValidEmail(false)
        }
    }
    //validate for Password
    const validatePassword = (value: string) => {
        setPassword(value)
        if (value.trim() === '' && value.length > 6) {

            setIsValidPassword(true)
            setErrorPassword('Password area is Required')
        } else if (!rePassword.test(value)) {
            setIsValidPassword(true)
            setErrorPassword('the password must contain one digit, and length must be 6 and more')
        } else {
            setIsValidPassword(false)
            setErrorPassword('')
        }
    }
    //validate for ConfirmPassword
    // confirmValue === passwordValue => true , else error
    const validateConfirmPassword = (value: string) => {
        setConfirmPassword(value)

        if (value !== password) {
            setIsValidConfirmPassword(true)
            setErrorConfirmPassword('Passwords must be the sames!')

        } else {
            setIsValidConfirmPassword(false)
            setErrorConfirmPassword('')
        }
    }


    //if validate false and email area is valid => registration , btnDisabled - false
    const onRegistrationHandler = () => {
        if (email && password && confirmPassword) {
            dispatch(putData(data.email, data.password))

        }
    }

    // reducer registration changed on True if all input valid
    if (isRegistration) {
        return <Redirect to={RoutingType.auth}/>
    }

    if (status === "loading") {
        return <Spinner/>
    } else if (status === "failed") {
        return (
            <div>
                <h1>Check year type</h1>
            </div>
        )
    }


    return (<div>
        <h1>Registration Page</h1>
        <div>
            {/*Email*/}
            <h2>E-mail:</h2>
            <SuperInputText
                value={email}
                onChangeText={isValidateEmailReg}
                error={isValidEmail}
                placeholder={'E-mail'}
                errorMes={errorEmail}
                setError={setIsValidEmail}
                className={'otherInput'}
            />

            {/*password*/}
            <h2>Password:</h2>
            <SuperInputText
                value={password}
                onChangeText={validatePassword}
                error={isValidPassword}
                placeholder={'Password'}
                errorMes={errorPassword}
                setError={setIsValidPassword}
                className={'otherInput'}
                type={'password'}
            />

            {/*confirm password*/}
            <h2>Confirm Password:</h2>
            <SuperInputText
                value={confirmPassword}
                onChangeText={validateConfirmPassword}
                error={isValidConfirmPassword}
                placeholder={'Confirm Password'}
                errorMes={errorConfirmPassword}
                setError={setIsValidPassword}
                className={'otherInput'}
                type={'password'}
            />
        </div>
        <div>
            <SuperButton
                onClick={onRegistrationHandler}

            >
                Registration
            </SuperButton>
        </div>

    </div>)
}

export default RegistrationContainer

