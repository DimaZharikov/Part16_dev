import {FC} from "react";
import NewPasswordComponent from "./NewPasswordComponent";


interface Props {

}

const NewPasswordContainer : FC<Props>  = ({
                                                  ...props
                                    }) => {
    return(<div>
        <NewPasswordComponent title = {'New Password Page'}/>
    </div>)
}


export default NewPasswordContainer