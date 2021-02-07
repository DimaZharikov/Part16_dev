import {FC} from "react";
import SuperInputText from "../../../Components/c1-SuperInputText/SuperInputText";


interface CreateEmailProps {
    // createEmail: string,
    // validateInputEmail: (value: string) => void,
    // errorInputEmail: boolean,
    // errorMessage: (value: boolean)=> void;
}

interface createPasswordProps {
    // createPassword: string,
    // validationPassword: (value: string) => void,
    // errorCreatePassword: boolean,
    // errorMessagePasswordCreate: (value: boolean)=> void ;

}

interface confirmPasswordProps {
    // confirmPassword: string,
    // validationConfirmPassword: (value: string) => void,
    // errorConfirmPassword: boolean,
    // errorMessageConfirmPassword: (value: boolean) => void


}


const RegistrationComponent: FC<CreateEmailProps &
    createPasswordProps & confirmPasswordProps> = ({
  //   errorMessage,errorInputEmail,
  //    validateInputEmail,createEmail,
  //     createPassword, validationPassword, errorCreatePassword,
  //    errorMessagePasswordCreate,confirmPassword,validationConfirmPassword,
  // errorConfirmPassword,errorMessageConfirmPassword

                                                                                }) => {
    return (<div>

        {/*<h1>Type year Email</h1>*/}
        {/*<SuperInputText*/}
        {/*    value={createEmail}*/}
        {/*    onChangeText={validateInputEmail}*/}
        {/*    error={errorInputEmail}*/}
        {/*    placeholder={'Create Email for Join'}*/}
        {/*    errorMes={'invalid Email'}*/}
        {/*    setError={errorMessage}*/}
        {/*    type={'text'}*/}
        {/*    className={'otherInput'}*/}
        {/*/>*/}

        {/*<h1>Field of Create Password</h1>*/}
        {/*<SuperInputText*/}
        {/*    value={createPassword}*/}
        {/*    onChangeText={validationPassword}*/}
        {/*    error={errorCreatePassword}*/}
        {/*    placeholder={'Typ your password'}*/}
        {/*    errorMes={'invalid password'}*/}
        {/*    setError={errorMessagePasswordCreate}*/}
        {/*    type={'password'}*/}
        {/*    className={'otherInput'}*/}
        {/*/>*/}

        {/*<h1>Field of Password confirmation</h1>*/}
        {/*<SuperInputText*/}
        {/*    value={confirmPassword}*/}
        {/*    onChangeText={validationConfirmPassword}*/}
        {/*    error={errorConfirmPassword}*/}
        {/*    placeholder={'Typ your password'}*/}
        {/*    errorMes={'invalid password'}*/}
        {/*    setError={errorMessageConfirmPassword}*/}
        {/*    type={'password'}*/}
        {/*    className={'otherInput'}*/}
        {/*/>*/}

    </div>)
}


export default RegistrationComponent


