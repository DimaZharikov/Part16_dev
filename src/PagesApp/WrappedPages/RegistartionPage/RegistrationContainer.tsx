import {FC} from "react";
import RegistrationComponent from "./RegistrationComponent";


interface Props {

}

const RegistrationContainer: FC <Props> = ({
     ...props
})  => {
    return (<div>
        <RegistrationComponent title = {'Registration Page'}/>
    </div>)
}

export default RegistrationContainer
