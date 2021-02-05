import {FC} from "react";
import ResPasswordComponent from "./ResPasswordComponent";

interface Props {

}


const ResPasswordContainer : FC <Props> = ({
     ...props
}) => {
    return (<div>
        <ResPasswordComponent title = {'Reset Password Page'}/>
</div>)
}

export default ResPasswordContainer