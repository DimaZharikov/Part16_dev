import {FC} from "react";
import AuthComponent from "./AuthComponent";


interface Props {

}

const AuthContainer : FC<Props>  = ({
            ...props
}) => {
    return(<div>
        <AuthComponent title = {'Auth Page'}/>
    </div>)
}


export default AuthContainer