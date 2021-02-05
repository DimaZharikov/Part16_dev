import {FC} from "react";

interface Props {
    title: string
}


const ProfileComponent: FC<Props> = ({
                                         title,  ...props
                                     }) => {
    return (<div>
        <h1>{title}</h1>
    </div>)
}


export default ProfileComponent