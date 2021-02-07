import {FC, useState} from "react";
import RegistrationComponent from "./RegistrationComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/Store";


interface Props {

}

const RegistrationContainer: FC <Props> = ({
     ...props
})  => {
    //reducer variable
    const emailReg = useSelector<AppRootStateType, string>( state => state.registration.email)
    const passwordReg = useSelector<AppRootStateType, string>( state => state.registration.password)
    const dispatch = useDispatch()


    //validate Email with Password
    const reEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const rePassword = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/;


    //values of Email, Password, Confirm Password
    const [email, setEmail] = useState<string>( )
    const [password, setPassword] = useState<string>()
    const [confirmPassword, setConfirmPassword] = useState<string>()


    //isValid of Email, Password, Confirm Password
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false)
    const [isValidPassword, setIsValidPassword] = useState <boolean>(false)
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState<boolean>(false)


    //Error
    const [errorEmailValue, setErrorEmailValue] = useState<string>('Login Required')
    const [errorPasswordValue, setErrorPasswordValue] = useState<string>('Password must be with number and A-Z, a-z letters')
    const [errorConfirmPassword,setErrorConfirmPassword] = useState<string>('passwords must match')



    //validate for Email
    //trim
    const validateEmailReg = (value: string) => {
        setEmail(value)
        if (value.trim()===''){
            setErrorEmailValue('Email is Required')
            setIsValidEmail(true)
        } else
            // if value inValid of reEmail
            if (!reEmail.test(value)) {
                setErrorEmailValue('Invalid Email')
                setIsValidEmail(true)
            } else {
                // else value email valid of reEmail
                setErrorEmailValue('')
                setIsValidEmail(false)
            }
    }


    //validate for Password
    //trim
    const validatePassword = (value: string) => {
        setPassword(value)
        if (value.trim() === '') {
            setErrorPasswordValue('Password area is Required')
            setIsValidPassword (true)
        } else
            if (!rePassword.test(value)) {
                setIsValidPassword(true)
                setErrorPasswordValue('the password must contain one digit, and length must be 6 and more')
            } else  {
                setErrorPasswordValue('')
                setIsValidPassword(false)
            }
    }


    //validate for ConfirmPassword
    // if confirmValue  !== '' and confirmValue === passwordValue => true , else error
    const validateConfirmPassword = (value: string) =>  {
        setConfirmPassword(value)
            if (value !== ''){
                if (value === password){
                    setIsValidConfirmPassword(false)
                    setErrorConfirmPassword('')
                }
        } else {
                setIsValidConfirmPassword(true)
                setErrorConfirmPassword('Passwords must be the sames ')
            }
    }

    const onRegistrationHandler = () => {
        if (email && password && confirmPassword) {
            
    }
    }

    return (<div>
        <h1>Registration Page</h1>
        <RegistrationComponent />
    </div>)
}

export default RegistrationContainer
