import {FC} from "react";
import SuperInputText from "../../../Components/c1-SuperInputText/SuperInputText";


interface CreateEmailProps {
    email: string | undefined
    isValidEmail: boolean
    errorEmail: string

}

interface createPasswordProps {
    password: string | undefined
    isValidPassword : boolean
    errorPassword: string
}

interface confirmPasswordProps {
    confirmPassword: string | undefined
    isValidConfirmPassword: boolean
    errorConfirmPassword: string
}




const RegistrationComponent: FC<CreateEmailProps &
    createPasswordProps & confirmPasswordProps> =
    ({

     }) => {





        return (<div>


        </div>)
    }


export default RegistrationComponent


