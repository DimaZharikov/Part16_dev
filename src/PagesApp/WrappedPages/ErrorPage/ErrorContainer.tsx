import {FC} from "react";
import ErrorComponent from "./ErrorComponent";


interface Props {

}

const ErrorContainer: FC<Props> = ({
                                         ...props
                                   }) => {
    return (<div>
        <ErrorComponent title = {'Error page 404'}/>
    </div>)
}

export default ErrorContainer

